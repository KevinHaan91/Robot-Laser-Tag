#!/bin/bash
RET=$(curl 'http://proj-309-rb-b-2.cs.iastate.edu:3000/spectator' --compressed --silent | w3m -T text/html -dump)

if [[ $RET == *"< >"* ]];
then
	echo "Assigned to spectator. Passed."
else
	echo "Spectator failed. Failed."
fi