from rest_framework import serializers
from backend_api.models import Feed, Item
from django.contrib.auth.admin import User

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = '__all__'
        

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
 
        extra_kwargs = {'password': {
            'write_only':True,
            'required':True
        }}
        
