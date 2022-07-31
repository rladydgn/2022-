from rest_framework import serializers

from base.models import FightRecord, MilitaryTerm


class FightRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FightRecord
        fields = '__all__'


class MilitaryTermSerializer(serializers.ModelSerializer):
    class Meta:
        model = MilitaryTerm
        fields = '__all__'
