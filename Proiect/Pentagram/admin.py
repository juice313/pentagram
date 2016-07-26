from django.contrib import admin

# Register your models here.
from Pentagram.models import Photo , Comment , Likes

admin.site.register(Photo)
admin.site.register(Comment)
admin.site.register(Likes)