from django.conf.urls import url, patterns, include
from django.views.generic import TemplateView


urlpatterns = patterns('',
                       url(r'^$', TemplateView.as_view(template_name='index.html')),
                       url(r'^core/', include('core.urls')),
                       )
