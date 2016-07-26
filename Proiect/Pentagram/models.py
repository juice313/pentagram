from django.contrib.auth.models import User
from django.db import models
import uuid
from django.db.models.signals import post_save
from django.dispatch.dispatcher import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

def photos_directory(instance, filename):
    return 'photos/user_{0}/{1}_{2}'.format(instance.user.username, uuid.uuid1(), filename)

class Photo(models.Model):
    user = models.ForeignKey(User)
    counter_like = models.IntegerField(default = 0)
    photo = models.ImageField(upload_to=photos_directory, null=True)

class Comment(models.Model):
    user = models.ForeignKey(User)
    photo_id = models.ForeignKey(Photo)
    comment = models.CharField(max_length=50)

class Likes(models.Model):
    user = models.ForeignKey(User)
    photo = models.ForeignKey(Photo)
# class Like(models.Model):
#     user = models.ForeignKey(User)
#     photo_id = models.ForeignKey(Photo)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
