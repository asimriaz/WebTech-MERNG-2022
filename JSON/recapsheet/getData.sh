#!/bin/bash

for collection in $(ls *.json | cut -d'.' -f1); do docker exec -i mongo-db sh -c "mongoimport -d recapsheet -c ${collection} --jsonArray" < ${collection}.json; done