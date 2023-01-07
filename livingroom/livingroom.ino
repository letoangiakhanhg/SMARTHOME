
#include <SimpleDHT.h>
#define pinDHT11 12
SimpleDHT11 dht11;

byte temp=0;
byte hum=0;

#define light1 7
#define humii 6
#define tempi 5 

int count=0;
String income="";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(light1, OUTPUT);
  pinMode(humii, OUTPUT);
  pinMode(tempi, OUTPUT);
  digitalWrite(light1, LOW);
  digitalWrite(humii, LOW);
  digitalWrite(tempi, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:

  if(count==10) {
    dht11.read(pinDHT11, &temp, &hum, NULL);    
    Serial.print("D*"+String(temp)+'*'+String(hum)+'*'+'\n'); //send temperature to clientPython    
    count=0;
  }
  count++;

  if (Serial.available() > 0) {
    income = Serial.readStringUntil('\n');
    if(income[0] == '0')
      digitalWrite(light1, LOW);
    else
      digitalWrite(light1, HIGH);
    
    if(income[1] == '0')
      digitalWrite(humii, LOW);
    else
      digitalWrite(humii, HIGH);

    if(income[2] == '0')
      digitalWrite(tempi, LOW);
    else
      digitalWrite(tempi, HIGH);
  }
  delay(500);
}
