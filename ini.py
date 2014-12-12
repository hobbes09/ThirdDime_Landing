from core.models import Dali
dali = Dali.objects.create()
dali.one = 1
dali.save()
dali = Dali.objects.create()
dali.one = 1
dali.save()