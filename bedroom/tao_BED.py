from firebase import firebase
firebase = firebase.FirebaseApplication('https://final-project-mysmarthome-default-rtdb.firebaseio.com', None)
room01 = '/BEDROOM'
humi = '/humi'
light = '/light'
lamp = '/lamp'
air = '/air'
temp = '/temp'

result = firebase.put(room01,humi,'60')
result = firebase.put(room01,light,'1')
result = firebase.put(room01,lamp,'1')
result = firebase.put(room01,air,'1')
result = firebase.put(room01,temp,'30')


result = firebase.get(room01,None)
print(result)
