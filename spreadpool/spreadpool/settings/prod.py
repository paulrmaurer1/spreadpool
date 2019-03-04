# settings/local.py
from .base import *
import django_heroku

#SECRET_KEY will pull from environment variable which is set locally in:
# ~./virtualenv/(project)/scripts/activate.ps1 file
SECRET_KEY = os.environ('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Local Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'mydatabase',
    }
}

INSTALLED_APPS += ("gunicorn",)

django_heroku.settings(locals())