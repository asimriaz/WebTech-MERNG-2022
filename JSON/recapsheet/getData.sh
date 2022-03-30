#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'Please give database name'
    exit 1
fi

for collection in $(ls *.json | cut -d'.' -f1); do docker exec -i mongo-db sh -c "mongoimport -d ${1} -c ${collection} --jsonArray" < ${collection}.json; done
