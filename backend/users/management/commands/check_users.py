from django.core.management.base import BaseCommand
from users.models import User, CustomerProfile
from providers.models import ProviderProfile


class Command(BaseCommand):
    help = 'Check all users and their profiles'

    def handle(self, *args, **kwargs):
        users = User.objects.all()
        
        self.stdout.write(f"\nTotal Users: {users.count()}\n")
        
        for user in users:
            self.stdout.write(f"\n{'='*50}")
            self.stdout.write(f"Phone: {user.phone}")
            self.stdout.write(f"Role: {user.role}")
            self.stdout.write(f"Verified: {user.is_verified}")
            
            # Check profiles
            if user.role == 'CUSTOMER':
                has_profile = hasattr(user, 'customer_profile')
                self.stdout.write(f"Customer Profile: {'✓' if has_profile else '✗'}")
            elif user.role == 'PROVIDER':
                has_profile = hasattr(user, 'provider_profile')
                self.stdout.write(f"Provider Profile: {'✓' if has_profile else '✗'}")
            
        self.stdout.write(f"\n{'='*50}\n")
