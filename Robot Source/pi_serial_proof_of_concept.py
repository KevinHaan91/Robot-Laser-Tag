import serial
from time import sleep

uno = serial.Serial('/dev/ttyACM0', 9600)

def move(duration):
	uno.write(b'w')
	sleep(duration)
	uno.write(b'X')
	
move(0.1)
