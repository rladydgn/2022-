import requests
import csv

f = open(r'C:\Users\dhdgn\Desktop\대학수업\2022국방데이터경진대회\국방부_6·25전쟁 정보_20180417..csv', 'r')
rcsv2 = csv.reader(f)

for idx, l in enumerate(rcsv2):
    print(l)
    types = ["title", "content", "register", "date", "region", "person", "source"]

    data = {}

    for i, t in enumerate(types):
        data[t] = l[i]
    print(data)
    r = requests.post('http://localhost:8000/base/fightRecord/', data=data)