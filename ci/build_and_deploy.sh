#!/bin/bash
cd frontend
npm install
unset CI
rm src/config/config.jsx
echo "ls src/config"
ls src/config
sshpass -p "$PASSWORD" rsync --progress -avz -e ssh $USER@$HOST:/etc/nautilus/config.jsx src/config/
echo "cat src/config/config.jsx"
cat src/config/config.jsx
npm run build
cd ../backend
mvn install
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'rm -r /var/www/nautilus/*'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  ../frontend/build/* $USER@$HOST:/var/www/nautilus
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'rm /var/lib/tomcat8/webapps/nautilus.war'
sshpass -p "$PASSWORD" rsync -rvz -e 'ssh -o StrictHostKeyChecking=no -p 22' --progress  target/nautilus.war $USER@$HOST:/var/lib/tomcat8/webapps/
sshpass -p "$PASSWORD" ssh -o StrictHostKeychecking=no $USER@$HOST 'service tomcat8 restart'