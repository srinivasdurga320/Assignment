# from .serializers import UserSerializer
import logging
from .models import YourModel
from rest_framework.status import (HTTP_200_OK,HTTP_205_RESET_CONTENT, HTTP_201_CREATED,HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST,HTTP_404_NOT_FOUND)
from rest_framework.response import Response
log = logging.getLogger(__name__)
from rest_framework.views import APIView
import json


class TaskView(APIView):
    def post(self, request):
        store=YourModel()
        store.json_data=request.data
        store.save()
        # print(request.data)
        return Response(True, HTTP_201_CREATED)
    def get(self, request):
        latest_data = YourModel.objects.last()
        if latest_data:
            data = [latest_data.json_data][0]
            data_string = data.replace("'", "\"")
            data_objects = json.loads(data_string)
            return Response(data_objects, status=HTTP_200_OK)