# /spreadpool/spreadpool/settings/local.py
# This is the file that's used locally on PC to run app

from .base import *

#SECRET_KEY will pull from environment variable which is set locally in:
# ~./virtualenv/(project)/scripts/activate.ps1 file
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Local Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

#MySQL Settings
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'spreadpool_db',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        }
    }
}

#PostgreSQL Settings - Default
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         #'NAME': 'spreadpool_db_psql', # Local Test Database
#         'NAME': 'spreadpool_prod', # Local Prod Copy
#         'USER': 'postgres',
#         'PASSWORD': 'Cubbies1182!',
#         'HOST': 'localhost',   
#         'PORT': '5432'
#     }
# }



# Email settings: emails are created as filed and put in the below directory
EMAIL_BACKEND = "django.core.mail.backends.filebased.EmailBackend"
EMAIL_FILE_PATH = os.path.join(BASE_DIR, "sent_emails")