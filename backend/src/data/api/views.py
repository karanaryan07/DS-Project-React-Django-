from rest_framework.generics import ListAPIView , RetrieveAPIView , CreateAPIView
from data.models import Data
from .serializers import DataSerializer

class DataListView(ListAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer


class DataDetailView(RetrieveAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer


class DataCreateView(CreateAPIView):
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    