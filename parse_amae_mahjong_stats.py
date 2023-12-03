#!/usr/bin/env python3

#Rank distribution
#1st
#2nd
#3rd
#4th
#
#Jad
#Gld
#LVL
#RK
#PLAYER
#DATE AND TIME
#Jad
#１
#[Ms1] HALK [29200]
#[Ms2] idiotory [33500]
#[Ms1] KillerDucky [39000]
#[Ms1] Millea [-1700]
#2023/12/2 21:51
#Jad
#２
#[Ms1] どらぶる [-5600]
#[Ms1] KillerDucky [37400]
#[Ms3] 独钓此山中 [37800]
#[Ms2] yauty_dog [30400]
#2023/12/2 21:15
#Jad
#４

file_path = 'stats.txt'
with open(file_path, 'r', encoding='utf-8') as file:
    lines = file.readlines()

while lines:
    line = lines.pop(0).strip()
    #print("a", line)
    if line != "DATE AND TIME": continue
    break
   
while lines:
    line = lines.pop(0).strip()
    #print("b", line)
    if line != "Jad": continue
    room = line
    place = lines.pop(0).strip()
    p1 = lines.pop(0).strip()
    p2 = lines.pop(0).strip()
    p3 = lines.pop(0).strip()
    p4 = lines.pop(0).strip()
    date = lines.pop(0).strip()
    print(room, place, p1, p2, p3, p4)
