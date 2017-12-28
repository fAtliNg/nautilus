#!/bin/bash
cd frontend
npm install
unset CI
npm run build
sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm -r /var/www/nautilus/*'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  build/* $USER@$HOST:/var/www/nautilus