#!/bin/bash
cd frontend
npm install
unset CI
npm run build
echo $HOST