from resource import prlimit
from django.db import models
from django.http.response import JsonResponse
from django.shortcuts import render
from .models import Service, Subservice
from . import models
import json
import datetime
def home(request):
    date = (datetime.datetime.now())
    
    print("sdas",date)
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def blogs(request):
    return render(request, 'blog.html')

def services(request):
    print("here ")
    demo = Service.objects.get(name='service 1')
    print("demo", demo)
    all_services = Service.objects.all()
    all_subservices = models.Subservice.objects.all()
    # breakpoint()
    all_services_dict = {}
    sub_service_list = []
    for service in all_services:
        all_services_dict[str(service)] = []
        for subservice in all_subservices:
            if str(service) == str(subservice.parent_service):
                all_services_dict[str(service)].append(str(subservice))

    context = {
        'all_services_dict':all_services_dict,
    }
    # breakpoint()
    return render(request, 'services.html', context)

def all_services_func(request):
    # service_name = request.GET.get('service')
    # all_subservices = models.Subservice.objects.all()
    # all_subservices_dict = {}
    # # breakpoint()
    # services_dict = {}
    # for subservice in all_subservices:
    #     if str(subservice.parent_service) == str(service_name):
    #         all_subservices_dict[subservice.name] = subservice.overview
    #         services_dict[service_name] = all_subservices_dict
    # return JsonResponse(services_dict) 
    pass

{
    'service 1' : ['subservice1', 'subservice2', 'subservice3']
}