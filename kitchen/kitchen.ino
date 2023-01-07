#include <Ethernet.h>
#include <SimpleDHT.h>
#define pinDHT11 12
SimpleDHT11 dht11;

byte temp=0;
byte hum=0;

#define led01 7


int count=0;
String income="";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(led01, OUTPUT);

  digitalWrite(led01, LOW);
 
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
      digitalWrite(led01, LOW);
    else
      digitalWrite(led01, HIGH);
    
  }
  delay(500);//ms
}
