#!/bin/bash
cd frontend
unset CI
rm src/config/config.jsx
mv src/config/prod.jsx src/config/config.jsx
echo "ls src/config/"
ls src/config/
npm install
npm run build
cd ../backend
mvn install
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'rm -r /var/www/nautilus/*'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  ../frontend/build/* $USER@$HOST:/var/www/nautilus
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'rm /var/lib/tomcat8/webapps/nautilus.war'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  target/nautilus.war $USER@$HOST:/var/lib/tomcat8/webapps/
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'service tomcat8 restart'