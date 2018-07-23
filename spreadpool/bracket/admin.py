from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from .models import User
from .models import Team, Game, Tbracket, Matchup, Entry

admin.site.register(User, UserAdmin)
admin.site.register(Team)
admin.site.register(Game)
admin.site.register(Tbracket)
admin.site.register(Matchup)
admin.site.register(Entry)