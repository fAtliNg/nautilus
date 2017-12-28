#!/bin/bash
cd frontend
npm install
unset CI
npm run build
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  build/* $USER@$HOST:/var/www/nautilus