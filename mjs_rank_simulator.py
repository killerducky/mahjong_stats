import statistics
import random
import collections
import sys
import numpy as np
import matplotlib.pyplot as plt
import signal

NUM_PLAYERS = 9999
NUM_ROOMS = 5
NUM_ROUNDS = 50000
PLACE_POINTS = [
    [20, 10, 0],   # Bronze S
    [40, 20, 0],   # Silver S
    [80, 40, 0],   # Gold S
    [110, 55, 0],  # Jade S
    [120, 60, 0],  # Throne S
]
UMA_POINTS = [15, 5, -5, -15]
RANK_STRS    = ['N1', 'N2', 'N3', 'A1', 'A2', 'A3', 'E1', 'E2', 'E3', 'M1', 'M2', 'M3', 'S1', 'S2', 'S3', 'C1']
START_POINTS = [   0,    0,    0,  300, 400,  500,  600,  700, 1000, 1400, 1600, 1800, 2000, 3000, 4500,  5000]
PROMO_POINTS = [  20,   80,  200,  600, 800, 1000, 1200, 1400, 2000, 2800, 3200, 3600, 4000, 6000, 9000, 10000]
LAST_POINTS  = [   0,    0,    0,  -20, -40,  -60,  -80, -100, -120, -165, -180, -195, -210, -225, -240,  -180]
ROOMS        = [   0,    0,    0,    1,   1,    1,    2,    2,    2,    3,    3,    3,    3,    3,    3,     4]

class Player:
    def __init__(self, rating, play_freq):
        self.rating = rating
        self.rank = 0
        self.points = START_POINTS[self.rank]
        self.play_freq = play_freq
    def __str__(self):
        return f'P({self.rating} {self.rank} {self.points})'

class Match:
    def __init__(self):
        self.players = []
        self.order = []
    def setresult(self):
        assert(len(self.players)==4)
        avg_r = statistics.mean([p.rating for p in self.players])
        last_rates = [min(0.70, max(0.10, 0.25+((p.rating-avg_r)/16/100))) for p in self.players]
        last_rates = [w / sum(last_rates) for w in last_rates]  # Normalize probabilities
        #other_rates = [(1-p)/3 for p in last_rates]
        other_rates = [0.25 for p in last_rates]  # Just make it even for 1st/2nd/3rd
        player_idx = [0,1,2,3]
        p = random.choices(range(len(player_idx)), last_rates)[0]
        self.order.append(player_idx[p])
        player_idx.pop(p)
        other_rates.pop(p)
        #print('a', self.order, player_idx, other_rates)
        for i in range(3):
            p = random.choices(range(len(player_idx)), other_rates)[0]
            self.order.append(player_idx[p])
            player_idx.pop(p)
            other_rates.pop(p)
            #print('b', self.order, player_idx, other_rates)
        self.order.reverse # Now the list order points to 1st, 2nd, 3rd, 4th
        debug_order = sorted(self.order)
        if (debug_order != [0, 1, 2, 3]):
            print("error", debug_order)
            sys.exit()
        debug = False
        net = 0
        for i in range(len(self.order)):
            place = self.order[i]
            p = self.players[i]
            #debug = p.rank >= 3
            if debug:
                print('before', i, place, p, self.order, end=' ')
            # UMAx2 just to roughly simulate the points they score also
            # That makes the average final scores: 10000, 20000, 30000, 40000
            points = UMA_POINTS[place]*2  
            if place < 3:
                points = PLACE_POINTS[ROOMS[p.rank]][place]
            else:
                points = LAST_POINTS[p.rank]
            p.points += points
            net += points
            if p.points < 0:
                p.rank = max(p.rank-1, 0)
                p.points = START_POINTS[p.rank]
            # For Celestials just let them make more and more points if the like
            if p.points > PROMO_POINTS[p.rank] and p.rank<len(PROMO_POINTS):
                p.rank += 1
                p.points = START_POINTS[p.rank]
            if debug:
                print('after', p)
        if debug:
            print('net', net)
            #sys.exit()
        #print(avg_r, [str(p) for p in self.players], last_rates, self.order)

# Tenhou R:
# Rating_change = Adjustment*(Placement_base+(Average_table_rate - Own_rate)/40)
# Placement_base = 30/10/-10/-30 for yonma,
# 
def r_tests():
    for last_rate in range(20,30):
        expected_r_diff = last_rate/100*(-30) + (1-last_rate/100)*((30+10-10)/3)
        #expected_r_diff = last_rate/(-0.3) + (1-last_rate/100)*(10)
        #expected_r_diff = 10 + last_rate/(-0.3) -last_rate/0.1
        print("lr, erd", last_rate, expected_r_diff)
    # Every 16 R_diff changes last_rate by 1%
    # Min/best last_rate set to 10%
    # 25-10 = 15 --   15*16 = 240 R_diff

def matchmake(pool):
    random.shuffle(pool)
    while (len(pool) > 0):
        match = Match()
        while len(match.players)<4 and len(pool)>0:
            p = pool.pop()
            if p.play_freq > random.random():
                match.players.append(p)
        if len(match.players)==4:
            match.setresult()

def printstats(round, players):
    counts = collections.Counter([p.rank for p in players])
    if round==0:
        print('Average internal skill rating of players at each rank.                                 | Number of players at each rank')
        print(f'      ', end='')
        for i,r in enumerate(RANK_STRS):
            print(f'{r:>5s}', end='')
        print(f' |', end='')
        for i,r in enumerate(RANK_STRS):
            print(f'{r:>5s}', end='')
        print()
    print(f'{round:6d}', end=' ')
    for i,r in enumerate(RANK_STRS):
        avg_rating = 0
        p_ofthis_r = [p.rating for p in players if p.rank==i]
        if len(p_ofthis_r)>0 :
            avg_rating = statistics.mean([p.rating for p in players if p.rank==i])
        print(f'{avg_rating:4.0f}', end=' ')
    print('| ', end='')
    for i,r in enumerate(RANK_STRS):
        print(f'{counts[i]:4d}', end=' ')
    print()

def graph_stats(round, players):
    counts = collections.Counter([p.rank for p in players])
    avg_ratings = []
    for i in range(len(RANK_STRS)):
        avg_rating = 0
        p_ofthis_r = [p.rating for p in players if p.rank==i]
        if len(p_ofthis_r)>0 :
            avg_rating = statistics.mean([p.rating for p in players if p.rank==i])
        avg_ratings.append(avg_rating)
    counts = [counts[i] for i in range(len(RANK_STRS))]
    plt.figure(figsize=(5,3))
    plt.bar(RANK_STRS, counts, color='b')
    plt.title(f'Number of players at each rank. Round={round:04d}')
    plt.savefig(f'media/num_rank_hist_{round:04d}.png')
    plt.close()
    plt.figure(figsize=(5,3))
    plt.bar(RANK_STRS, avg_ratings)
    plt.title(f'Average skill rating of players at each rank. Round={round:04d}')
    plt.savefig(f'media/avg_rating_hist_{round:04d}.png')
    plt.close()

def signal_handler(sig, frame):
    sys.exit(0)

def main():
    signal.signal(signal.SIGINT, signal_handler)
    #r_tests()
    players = []
    # init players
    samples = np.random.beta(2, 5, size=NUM_PLAYERS)
    samples = [1200+x*1600 for x in samples]
    plt.hist(samples, bins=50, density=True, alpha=0.6, color='b')
    plt.title('Skill rating histogram')
    plt.savefig(f'media/rank_hist.png')
    plt.close()
    for i in samples:
        #players.append(Player(1500+(i-NUM_PLAYERS/2)*2000/NUM_PLAYERS))
        play_freq = random.random()*0.9+0.1   # linear from 10% to 100%
        play_freq = 1
        p = Player(i, play_freq)
        players.append(p)
    for round in range(NUM_ROUNDS):
        for room in range(NUM_ROOMS):
            pool = []
            for p in players:
                if ROOMS[p.rank] == room:
                    pool.append(p)
            matchmake(pool)
        if round % 200 == 0:
            printstats(round, players)
            graph_stats(round, players)

if __name__ == "__main__":
    main()
