
#include <SimpleDHT.h>
#define pinDHT11 12
SimpleDHT11 dht11;

byte temp=0;
byte hum=0;

#define light 7
#define lamp 6
#define air 5

int count=0;
String income="";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(light, OUTPUT);
  pinMode(lamp, OUTPUT);
  pinMode(air, OUTPUT);
  digitalWrite(light, LOW);
  digitalWrite(lamp, LOW);
  digitalWrite(air, LOW);
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
    income = Serial.readStringUntil('\n');//"011\n"
    if(income[0] == '0')
      digitalWrite(light, LOW);
    else
      digitalWrite(light, HIGH);
    
    if(income[1] == '0')
      digitalWrite(lamp, LOW);
    else
      digitalWrite(lamp, HIGH);

    if(income[2] == '0')
      digitalWrite(air, LOW);
    else
      digitalWrite(air, HIGH);
  }
  delay(500);//ms
}
