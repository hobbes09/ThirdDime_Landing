from django.conf.urls import patterns, url
from . import views

urlpatterns = patterns('',
                       url(r'Dali/(?P<pk>[0-9]+)$', views.DaliDetail.as_view(),
                           name='dali-detail'),
                       url(r'thoughts$',
                           views.ThoughtDetail.as_view(), name='thought-detail'),
                       url(r'adopters$',
                           views.AdopterList.as_view(), name='adopter-list'),
                       )
