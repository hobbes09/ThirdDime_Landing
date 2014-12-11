from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import DaliSerializer, ThoughtSerializer
from .models import Dali, Thought


class DaliDetail(APIView):

    def get(self, request, pk, format=None):
        dali = Dali.objects.get(pk=pk)
        serializer = DaliSerializer(dali)
        return Response(serializer.data)

    def post(self, request, pk, format=None):
        vote = request.DATA['vote']
        if (vote in ['one', 'two', 'three', 'four']):
            dali = Dali.objects.get(pk=pk)
            voted_on = getattr(dali, vote)
            setattr(dali, vote, voted_on + 1)
            dali.save()
            serializer = DaliSerializer(dali)
            return Response(serializer.data, status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


class ThoughtDetail(APIView):

    def get(self, request, format=None):
        thoughts = Thought.objects.all()
        serializer = ThoughtSerializer(thoughts)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ThoughtSerializer(data=request.DATA, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
