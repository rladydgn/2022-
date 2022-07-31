from django.contrib import admin

# Register your models here.
from base.models import FightRecord, MilitaryTerm

admin.site.register(FightRecord)
admin.site.register(MilitaryTerm)