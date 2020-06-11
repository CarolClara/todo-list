from django.db import models
from django.utils import timezone


class Task(models.Model):
    description = models.CharField(max_length=100, verbose_name='Descrição da tarefa')
    creation_date = models.DateTimeField(default=timezone.now, verbose_name='Data da criação')
    conclusion_date = models.DateTimeField(default=None, blank=True, null=True, verbose_name='Data da conclusão')
    was_completed = models.BooleanField(default=False, verbose_name='Foi completada')
