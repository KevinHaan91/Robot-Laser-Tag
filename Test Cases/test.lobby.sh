#!/bin/bash
RET=$(curl 'http://proj-309-rb-b-2.cs.iastate.edu:3000/lobby' --silent | w3m -T text/html -dump)

if [[ $RET == *"Active Robots"* ]];
then 
	echo "Found 'Active Robots'. Passed."
else
	echo "Fail."
fi