import requests
import csv

f = open(r'C:\Users\dhdgn\Desktop\대학수업\2022국방데이터경진대회\군사 용어 정보.csv', 'r')
rcsv2 = csv.reader(f)

for idx, l in enumerate(rcsv2):
    print(l)
    types = ["menu", "museum_code", "title", "content", "register", "standard", "outline"]

    data = {}

    for i, t in enumerate(types):
        data[t] = l[i]
    print(data)
    r = requests.post('http://localhost:8000/base/militaryTerm/', data=data)