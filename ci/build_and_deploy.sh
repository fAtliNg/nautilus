#!/bin/bash
cd frontend
npm install
unset CI
npm run build
echo 333
ls build
export SSHPASS=$PASSWORD
tar -czf package.tgz build
sshpass -e scp package.tgz $USER@$HOST:/var/www/nautilus