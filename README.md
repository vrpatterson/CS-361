# CS-361 - Partners Microservice

## Summary
Microservice for my partner's project

## How to run
- Connect to MongoDB
- npm install
- npm start

## How to request fortune history:
- navigate to test-requests.http
- add this to file if not already present:<br />
-   GET http://localhost:3000/fortuneHistory HTTP/1.1<br />
-   then click on 'Send Request' icon<br />
  
## How to post new fortune history
- navigate to test-requests.http
- add this to file and include data:<br />
  POST http://localhost:3000/fortuneHistory HTTP/1.1<br />
content-type: application/json<br />
<br />
{<br />
    "userId": "<enter userId here>",<br />
    "fortuneId": "<enter fortuneId here>",<br />
    "fortuneText": "<enter fortuneText here>"<br />
}<br />

## UML Diagram
