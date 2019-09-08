from rest_framework.serializers import ModelSerializer,Serializer


from .models import Game

class GameSerializers(ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'