import random

from django.shortcuts import render
from rest_framework import status
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from base.models import FightRecord, MilitaryTerm
from base.serializers import FightRecordSerializer, MilitaryTermSerializer
from base.utils import get_random_number


class FightRecordListCreateAPIView(ListCreateAPIView):
    queryset = FightRecord.objects.all()
    serializer_class = FightRecordSerializer

    # 검색
    # ?search=의정부
    filter_backends = [SearchFilter]
    search_fields = ['title']

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            dataset = serializer.save()

            if dataset:
                print(dataset)
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MilitaryTermListCreateAPIView(ListCreateAPIView):
    queryset = MilitaryTerm.objects.all()
    serializer_class = MilitaryTermSerializer

    # 검색
    # ?search=의정부
    filter_backends = [SearchFilter]
    search_fields = ['title']

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            dataset = serializer.save()

            if dataset:
                print(dataset)
                return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuizAPIView(APIView):
    def get(self, request):
        categories = ["militaryTerm", "fightRecord"]

        category = ""
        # 에러방지 멀티 인덱스?
        if "category" in request.GET:
            category = request.GET["category"]

        # 정해진 카테고리가 아닐 경우
        if category not in categories:
            Response(status=status.HTTP_400_BAD_REQUEST)

        data = []
        answers = []

        while len(data) < 10:
            numbers = []
            if category == "militaryTerm":
                numbers = get_random_number(1, 918, 5)

            question = MilitaryTerm.objects.get(pk=numbers[0]).content
            answer = MilitaryTerm.objects.get(pk=numbers[0]).title

            if answer in answers:
                continue

            answers.append(answer)

            choices = []
            for number in numbers:
                tmp = MilitaryTerm.objects.get(pk=number)
                choices.append(tmp.title)

            random.shuffle(choices)

            d = {
                "first_choice": choices[0],
                "second_choice": choices[1],
                "third_choice": choices[2],
                "fourth_choice": choices[3],
                "fifth_choice": choices[4],
                "answer": answer,
                "question": question
            }

            data.append(d)

        return Response(data=data, status=status.HTTP_200_OK)


