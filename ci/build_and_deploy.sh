#!/bin/bash
cd frontend
npm install
unset CI
npm run build
cd ../backend
mvn install
sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm -r /var/www/nautilus/*'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  build/* $USER@$HOST:/var/www/nautilus
sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm /var/lib/tomcat8/webapps/nautilus.war'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  target/nautilus.war $USER@$HOST:/var/lib/tomcat8/webapps/
sshpass -p "$PASSWORD" ssh $USER@$HOST 'service tomcat8 restart'