from django.urls import path
from .views import DataListView , DataDetailView , DataCreateView

urlpatterns = [
    path('' , DataListView.as_view()),
    path('create' , DataCreateView.as_view()),
    path('<pk>' , DataDetailView.as_view())
]
