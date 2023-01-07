from firebase import firebase
firebase = firebase.FirebaseApplication('https://final-project-mysmarthome-default-rtdb.firebaseio.com', None)
room02 = '/LIVINGROOM'
humii = '/humii'
light1='light1'
tempi = '/tempi'
humi = '/humi'
temp = '/temp'

result = firebase.put(room02,humii,'1')
result = firebase.put(room02,light1,'1')
result = firebase.put(room02,tempi,'1')
result = firebase.put(room02,humi,'60')
result = firebase.put(room02,temp,'30')

result = firebase.get(room02,None)
print(result)
