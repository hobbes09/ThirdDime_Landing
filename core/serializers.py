from rest_framework import serializers
from .models import Dali, Thought, Adopter


class DaliSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dali


class ThoughtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Thought


class AdopterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Adopter
