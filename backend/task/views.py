from rest_framework import viewsets, filters

from . import models, serializers


class TaskViewSet(viewsets.ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

    filter_backends = [filters.OrderingFilter]
    ordering = ['was_completed', 'creation_date']
