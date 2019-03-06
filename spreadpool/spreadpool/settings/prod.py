# /spreadpool/spreadpool/settings/prod.py
# This is the settings.py file to use when deploying/running on Heroku

from .base import *
import django_heroku 

#SECRET_KEY will pull from environment variable in heroku which is set in config vars

SECRET_KEY = os.environ['SECRET_KEY']

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

ALLOWED_HOSTS = ['spreadpool.herokuapp.com']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Update database for Heroku, psycopg2 required to read from environment variable
import psycopg2
DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require')

# This will parse the values of the DATABASE_URL environment variable 
# and convert them to something Django can understand.
import dj_database_url
DATABASES = { 'default': dj_database_url.config(conn_max_age=600, ssl_require=True) }
# DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=True)

# Add gunicorn to INSTALLED_APPS
INSTALLED_APPS += ("gunicorn",)


# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

#Django Heroku configuration
django_heroku.settings(locals())
