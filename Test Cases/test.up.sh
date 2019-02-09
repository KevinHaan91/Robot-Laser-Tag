#!/bin/bash

ping -c 1 proj-309-rb-b-2.cs.iastate.edu > /dev/null 2>&1

if [ "$?" == "0" ]
then
	echo "Host is up. Passed."
else
	echo "Host is down. Fail."
fi