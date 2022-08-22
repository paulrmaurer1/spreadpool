from operator import truediv
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    def handle(self, **options):
      # Create data needed for Review & Staging apps for testing purposes

      # Create admin user, i.e. me!
      admin_user = User.objects.create_user('pmaurer', 'paulrmaurer@yahoo.com', 'Quakers1!')
      admin_user.first_name = 'Paul'
      admin_user.last_name = 'Maurer'
      admin_user.is_superuser = True
      admin_user.is_staff = True
      admin_user.save()