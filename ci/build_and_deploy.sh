#!/bin/bash
cd frontend
npm install
unset CI
npm run build
export SSHPASS=$PASSWORD
sshpass -p $PASSWORD scp -r build $USER@$HOST:/var/www/nautilus