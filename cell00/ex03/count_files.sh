#! /bin/bash
find . -maxdepth 1 -type f -o -maxdepth 1 -type d | wc -l | sed -e 's/[ \t]*//'
