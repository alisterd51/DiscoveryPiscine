#! /bin/bash
ls | wc -l | sed -e 's/[ \t]*//'
