#! /bin/bash
if [[ "$#" -lt 1 ]]
then
	echo "No arguments supplied"
else
	for var in "$@"
	do
	    echo "$var"
	done
fi
