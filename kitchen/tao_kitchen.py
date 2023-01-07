from firebase import firebase
firebase = firebase.FirebaseApplication('https://final-project-mysmarthome-default-rtdb.firebaseio.com', None)
room01 = '/KITCHEN'
humi = '/humi'
temp = '/temp'
led01 = '/led01'
result = firebase.put(room01,humi,'60')
result = firebase.put(room01,temp,'30')
result = firebase.put(room01,led01,'0')


result = firebase.get(room01,None)
print(result)
