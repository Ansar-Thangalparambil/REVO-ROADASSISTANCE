from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ServiceRequest
from .serializers import ServiceRequestSerializer

from .models import Provider
from .serializers import ProviderSerializer

@api_view(['GET', 'POST'])
def service_requests(request):
    if request.method == 'GET':
        requests = ServiceRequest.objects.all()
        serializer = ServiceRequestSerializer(requests, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ServiceRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)



@api_view(['GET', 'POST'])
def providers(request):

    if request.method == 'GET':
        data = Provider.objects.all()
        serializer = ProviderSerializer(data, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ProviderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)