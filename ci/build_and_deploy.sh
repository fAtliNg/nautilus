#!/bin/bash
echo "cd frontend"
cd frontend
echo "npm install"
npm install
echo "unser CI"
unset CI
echo "npm run build"
npm run build
echo "cd ../backend"
cd ../backend
echo "mvn install"
mvn install
echo "sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm -r /var/www/nautilus/*'"
sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm -r /var/www/nautilus/*'
echo "sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  ../frontend/build/* $USER@$HOST:/var/www/nautilus"
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  ../frontend/build/* $USER@$HOST:/var/www/nautilus
echo "sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm /var/lib/tomcat8/webapps/nautilus.war'"
sshpass -p "$PASSWORD" ssh $USER@$HOST 'rm /var/lib/tomcat8/webapps/nautilus.war'
echo "sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  target/nautilus.war $USER@$HOST:/var/lib/tomcat8/webapps/"
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  target/nautilus.war $USER@$HOST:/var/lib/tomcat8/webapps/
echo "sshpass -p "$PASSWORD" ssh $USER@$HOST 'service tomcat8 restart'"
sshpass -p "$PASSWORD" ssh $USER@$HOST 'service tomcat8 restart'