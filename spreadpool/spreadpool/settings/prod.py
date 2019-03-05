# /spreadpool/spreadpool/settings/prod.py
# This is the settings.py file to use when running on Heroku

from .base import *

#SECRET_KEY will pull from environment variable which is set locally in:
# ~./virtualenv/(project)/scripts/activate.ps1 file
SECRET_KEY = os.environ('SECRET_KEY')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

ALLOWED_HOSTS = ['spreadpool.herokuapp.com']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# STATIC_ROOT declaration
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

# Update database for Heroku, psycopg2 required to read from environment variable
import psycopg2
DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require')

# This will parse the values of the DATABASE_URL environment variable 
# and convert them to something Django can understand.
import dj_database_url
DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)


INSTALLED_APPS += ("gunicorn",)


# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# import django_heroku
# django_heroku.settings(locals())