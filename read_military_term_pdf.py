# import PyPDF2
# from pdfminer.high_level import extract_pages, extract_text
#
# with open(r"C:\Users\dhdgn\Desktop\대학수업\2022국방데이터경진대회\국방과학기술용어사전(2011).pdf", 'rb') as fr:
#     # pdf_read = PyPDF2.PdfFileReader(fr, strict=False)
#     pdf_read = extract_text(fr, page_numbers=[12, 13, 14])
#     print(pdf_read)
#     pdf_read = pdf_read.strip().split("\n\n")
#     # for s in pdf_read:
#     #     content = ""
#     #     if ")  [" in s or ") [" in s:
#     #         term = s.split("[")[0].strip()
#     #         print(term)

import requests

dic = {}
with open(r"C:\Users\dhdgn\Desktop\대학수업\2022국방데이터경진대회\군사용어.txt", 'r', encoding="UTF-8") as fr:
    text = fr.read().split("\n")

term = ""
explain = ""
for tt in text:
    t = tt.split(':')
    if len(t) == 1:
        dic[term] += t[0]
    else:
        term = t[0]
        dic[term] = ' '.join(t[1:])


for key, value in dic.items():
    data = {}
    data["title"] = key
    data["content"] = value

    print(data)
    r = requests.post('http://localhost:8000/base/militaryTerm/', data=data)



