#!/bin/bash
source .env
export $(cut -d= -f1 .env)

if [ $NODE_ENV = "development" ]
then
npm run dev
else
npm start
fi
