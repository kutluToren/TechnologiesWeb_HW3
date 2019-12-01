# TechnologiesWeb_HW3
## Kutlu Toren
### Homework repo for WebDevelopment Class in ECE 2019-2020

# About the Project

In this example we implement leveldb as in the class show all the metrics available from /metrics 

Secondly by typing /metrics/id where id is a key in metrics you can see the metrics elements with id=id
Third option UNSUCCESSFUL


## Usage
Clone the project into your pc and use npm install and then npm start. Open a web browser and connect to http://localhost:8080/ Follow the instructions in the website to navigate 
To test the post property on /metrics/id you can use postman or similar software. Remember the syntax of metrics is as follows:

[{ "timestamp":"1624686660000", "value":"99" }]  If using postman select RAW with JSON in body and application/json as value in header. Once you do the post you should have a message of Status:200 OK and you can check the value by get /metrics

## Disclaimer
This project is for the homework of a class in ECE Paris and created by Kutlu Tören. It has no other purpose than this.


