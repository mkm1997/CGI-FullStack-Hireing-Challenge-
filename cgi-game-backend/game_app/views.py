from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from django.http import HttpResponse
from .serializers import GameSerializers
from .models import Game

from .helper_function import read_csv_file
if Game.objects.all().count() == 0:
    read_csv_file()

def read(request):
    return HttpResponse("hello")

if Game.objects.all().count() == 0:
    read_csv_file()

class GetAllGAme(generics.ListAPIView):

    serializer_class = GameSerializers
    # filter_backends = (DjangoFilterBackend,)
    # filterset_fields = ('title',)

    def get(self, request, *args, **kwargs):
        get_response = super().get(request, *args, **kwargs)
        return get_response

    def get_queryset(self):
        try:
            query = self.request.query_params.dict()
            print(query)
            queryset = Game.objects.filter(title__icontains = query["title"])
            return queryset
        except:
            queryset = Game.objects.all()
            return queryset


class GetGameTitle(generics.ListAPIView):

    serializer_class = GameSerializers

    def get(self, request, *args, **kwargs):
        get_response = super().get(request, *args, **kwargs)
        return get_response

    def get_queryset(self):

        queryset = Game.objects.values_list('title', flat=True).distinct()
        return queryset