# Documentation

## About

Time Doctor App for booking appointments with doctor online without physically wasting time standing in a queue

Technologies used:

1. Ionic 3 Framework

2. Node.js

3. MySql DB

Features of the App:

1. Booking appointment with doctor online

2. Push notification feature for reminding user with the appointment

3. JWT Token for enabling Security

4. Storing records of the past appointments with doctor

5. Health Related articles page

6. Common Diseases and their home remedies page

## Installation

###### 1.  Setting Up the Ionic 3 Framework [Front-End]
  - Download Node.js (verion below 11) from the browser.
  
  - After instatlling node.js open Command Prompt.
     - To make sure if node.js installed correctly, open command prompt and type:
    ``` node --version```
    
  - Install ionic v3 and cordova by typing the following commands
  ```
  npm i ionic@3.20 cordova
  ```
  - To check if Ionic Framework Installed Properly. Type in cmd:
  ``` ionic --version```
  
  - Open cmd in the project directory. To install all the dependencies of the project, type the command: ```npm i```
  
###### 2. Setting Up the Backend
   - Download XAMP from the browser
   
   - Open XAMP and start the following services
     - Apache
     - MySql
     
   - Now go to the following Url: http://localhost/phpmyadmin
   
   - Go to import tab and import database
   
   - Now Upload the database by going to the Project folder > Backend > hospital-app-october.sql
   
   - You will be able to see the database containing many tables.
   
   - Now open cmd in the Backend directory and type the command:```npm i```. It will install all the necessary modules required to run the code.
   
   - Replace the Database Credentials with yours in the server.js file.
   
   - Run the code by typing the command in the cmd:```node server.js```
   
   - The Backend server is now running.
   
###### 3. Running the App
  - Open cmd in the project directory and type: ```ionic cordova run browser```
  
  - It will build the project and open it in browser view.
  
  - To view the app in the mobile view on browser. Press F12 and then press Ctrl+Shift+m
  
  - There you go the Project is fully working now.
