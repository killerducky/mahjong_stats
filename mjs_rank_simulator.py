import statistics
import random

N=16
ROOMS = 3
ROUNDS = 1000
PROMO_POINTS = 500
PLACE_POINTS = [-45, 0, 15, 30]

class Player:
    def __init__(self, rating):
        self.rating = rating
        self.room = 0
        self.rank = PROMO_POINTS/2
        self.wanttoplay = 0
    def __str__(self):
        return f'P({self.rating} {self.room} {self.rank})'

class Match:
    def __init__(self):
        self.players = []
        self.order = []
    def setresult(self):
        assert(len(self.players)==4)
        avg_r = statistics.mean([p.rating for p in self.players])
        last_rates = [min(0.70, max(0.10, 0.25-((p.rating-avg_r)/16/100))) for p in self.players]
        last_rates = [w / sum(last_rates) for w in last_rates]  # Normalize probabilities
        other_rates = [(1-p)/3 for p in last_rates]
        tmp_players = self.players.copy()
        p = random.choices(range(len(tmp_players)), last_rates)[0]
        self.order.append(p)
        tmp_players.pop(p)
        other_rates.pop(p)
        for i in range(3):
            p = random.choices(range(len(tmp_players)), other_rates)[0]
            self.order.append(p)
            tmp_players.pop(p)
            other_rates.pop(p)
        self.order.reverse # Now the list order points to 1st, 2nd, 3rd, 4th
        for place in range(len(self.order)):
            p = self.players[place]
            p.rank += PLACE_POINTS[place]
            if p.rank < 0:
                p.room = max(p.room-1, 0)
                p.rank = PROMO_POINTS/2
            if p.rank > PROMO_POINTS:
                p.room = min(p.room+1, ROOMS-1)
                p.rank = PROMO_POINTS/2
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
    while (len(pool) >= 4):
        match = Match()
        match.players.append(pool.pop())
        match.players.append(pool.pop())
        match.players.append(pool.pop())
        match.players.append(pool.pop())
        match.setresult()

def main():
    #r_tests()
    players = []
    # init players
    for i in range(N):
        players.append(Player(1500+(i-N/2)*40))
        #print(players[i].rating)
    for round in range(ROUNDS):
        for room in range(ROOMS):
            pool = []
            for p in players:
                if p.room == room:
                    p.wanttoplay = 1
                    pool.append(p)
            matchmake(pool)
        print([str(p) for p in players])


if __name__ == "__main__":
    main()
