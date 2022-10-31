# CS-361 - Partners Microservice

## Summary
Microservice for my partner's project

## How to run
- Connect to MongoDB
- npm install
- npm start

## How to request fortune history:
- navigate to test-requests.http
- add this to file if not already present:
-   GET http://localhost:3000/fortuneHistory HTTP/1.1
-   then click on 'Send Request' icon
  
## How to post new fortune history
- navigate to test-requests.http
- add this to file and include data:
  POST http://localhost:3000/fortuneHistory HTTP/1.1
content-type: application/json

{
    "userId": "<enter userId here>",
    "fortuneId": "<enter fortuneId here>",
    "fortuneText": "<enter fortuneText here>"
}

## UML Diagram
