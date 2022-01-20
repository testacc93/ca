from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('services', views.services, name='services'),
    path('blogs', views.blogs, name='blogs'),
    path('contact-us', views.contact, name='contact-us'),
    path('', views.contact, name='contact-us'),
    path('allservices', views.all_services_func, name='allservices'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
