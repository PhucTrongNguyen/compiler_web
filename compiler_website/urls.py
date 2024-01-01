from django.urls import path, include
from compiler_website.views import index

app_name = "compiler_website"

urlpatterns = [
    path('', index, name='index')
]
