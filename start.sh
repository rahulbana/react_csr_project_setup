#!/bin/bash
export PROTOCOL=http
export DOMAIN=localhost
export NODE_ENV=development
export PORT=2018

if [ $NODE_ENV = "development" ]
then
npm run dev
else
npm start
fi
