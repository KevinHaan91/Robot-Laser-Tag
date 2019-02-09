import serial
from time import sleep

uno = serial.Serial('/dev/ttyACM0', 9600)

while(True):
	#input must be converted from unicode to bytes
	uno.write(str.encode(input()))

