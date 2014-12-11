#!/bin/bash

echo -e "\n\e[36mWelcome to Zizigo Mobile Web Application\n\n\e[33mDikeyshop Development Team\n"
sleep 5

echo -e "\n\e[36mNeeded packages are being downloaded (apt-get)...\n\e[34m"
sleep 2
sudo apt-get clean
sudo apt-get -f install
sudo apt-get autoremove
sudo dpkg --configure -a
sudo apt-get update
sleep 2

echo -e "\n\e[36mNeeded NodeJS packages are being downloaded...\n\e[34m"
sleep 2
sudo apt-get --purge remove node 
sudo apt-get --purge remove nodejs 
sudo apt-get install nodejs
sleep 2

echo -e "\n\e[36mNeeded packages are being downloaded (npm)...\n\e[34m"
sleep 2
sudo apt-get install npm
sleep 2

echo -e "\n\e[36mNeeded NodeJS packages are being downloaded...\n\e[34m"
sleep 2
sudo npm config set registry https://registry.npmjs.org/
sudo npm install -g
sleep 2

echo -e "\n\e[36mDownload has been completed! Take it easy ;)\n\e[37m"
sleep 2

echo -e "\n\e[36mExpress server instance is being initialized on port 5000... Enter http://localhost:5000/#/test\n\e[34m"
sleep 2

echo -e "\n\e[36mStarting Gulp...\n\e[34m"
sleep 1
npm run gulp