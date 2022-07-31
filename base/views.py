from django.shortcuts import render
from rest_framework import status
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response

from base.models import FightRecord
from base.serializers import FightRecordSerializer, MilitaryTermSerializer


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
    queryset = FightRecord.objects.all()
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