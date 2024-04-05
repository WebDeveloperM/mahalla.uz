from django.db import models


class BaseModel(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Region(BaseModel):
    def __str__(self):
        return self.name


class District(BaseModel):
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Neighborhood(BaseModel):
    district = models.ForeignKey(District, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Street(BaseModel):
    neighborhood = models.ForeignKey(Neighborhood, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Person(BaseModel):
    passport_number = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    jshshir = models.BigIntegerField()
    phone_number = models.CharField(max_length=255)
    street = models.ForeignKey(Street, on_delete=models.CASCADE)
    apartmant = models.IntegerField()
    apartmant_type = models.CharField(max_length=255)
    cadastr_number = models.CharField(max_length=255)
    status_of_registration = models.CharField(max_length=255)
    time_registered = models.DateTimeField()
    address_of_passport = models.CharField(max_length=255)
    category_apartmant = models.CharField(max_length=255)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Relative(BaseModel):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=255)
    document_series = models.CharField(max_length=20)
    document_number = models.IntegerField()
    kinship = models.CharField(max_length=255)
    jshshir = models.BigIntegerField()
    phone_number = models.CharField(max_length=255)
    nationality = models.CharField(max_length=255)
    disability = models.CharField(max_length=255)
    war_participant = models.BooleanField(default=False)
    no_breadwinner = models.BooleanField(default=False)
    lonely_old_man = models.BooleanField(default=False)
    difficult_condition = models.BooleanField(default=False)
    behind_war = models.BooleanField(default=False)
    gone_for_along_time = models.BooleanField(default=False)
    participant_of_AES = models.BooleanField(default=False)

    def __str__(self):
        return self.name