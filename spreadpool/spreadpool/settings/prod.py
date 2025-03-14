# /spreadpool/spreadpool/settings/prod.py
# This is the settings.py file to use when deploying/running on Heroku

from .base import *

#SECRET_KEY will pull from environment variable in heroku which is set in config vars

SECRET_KEY = os.environ['SECRET_KEY']

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

ALLOWED_HOSTS = [
  'spreadpool.herokuapp.com',
  'www.ncaaspreadpool.com',
  'ncaaspreadpool.com',
]

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

# Add gunicorn to INSTALLED_APPS
INSTALLED_APPS += ("gunicorn",)

# For Mailgun SMTP email service on Heroku
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ['MAILGUN_SMTP_SERVER']
EMAIL_PORT = os.environ['MAILGUN_SMTP_PORT']
EMAIL_HOST_USER = os.environ['MAILGUN_SMTP_LOGIN']
EMAIL_HOST_PASSWORD = os.environ['MAILGUN_SMTP_PASSWORD']
DEFAULT_FROM_EMAIL = 'NCAASpreadpool Administrator <admin@ncaaspreadpool.com>'

# (Production) ChatGPT3 settings
OPENAI_API_KEY = os.environ['OPENAI_API_KEY']
OPENAI_ORG_ID = os.environ['OPENAI_ORG_ID']

# (Production) Google reCAPTCHA keys
RECAPTCHA_PUBLIC_KEY = os.environ['RECAPTCHA_PUBLIC_KEY']
RECAPTCHA_PRIVATE_KEY = os.environ['RECAPTCHA_PRIVATE_KEY']