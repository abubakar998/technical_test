from rest_framework.serializers import ModelSerializer
# from rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # fields = UserDetailsSerializer.Meta.fields + ('is_vendor',)

    # def update(self, instance, validated_data):
    #     profile_data = validated_data.pop('userprofile', {})
    #     is_vendor = profile_data.get('is_vendor')

    #     instance = super(UserSerializer, self).update(instance, validated_data)

    #     # get and update user profile
    #     profile = instance.userprofile
    #     if profile_data and is_vendor:
    #         profile.is_vendor = is_vendor
    #         profile.save()
    #     return instance