from django.core.management.base import BaseCommand
from users.models import User, CustomerProfile
from providers.models import ProviderProfile


class Command(BaseCommand):
    help = 'Create missing profiles for users'

    def handle(self, *args, **kwargs):
        users = User.objects.all()
        fixed = 0
        
        for user in users:
            if user.role == 'CUSTOMER':
                if not hasattr(user, 'customer_profile'):
                    CustomerProfile.objects.create(user=user)
                    self.stdout.write(f"✓ Created Customer profile for {user.phone}")
                    fixed += 1
                    
            elif user.role == 'PROVIDER':
                if not hasattr(user, 'provider_profile'):
                    ProviderProfile.objects.create(user=user)
                    self.stdout.write(f"✓ Created Provider profile for {user.phone}")
                    fixed += 1
        
        if fixed == 0:
            self.stdout.write("All users already have profiles!")
        else:
            self.stdout.write(f"\n✓ Fixed {fixed} user(s)")
