# Load test module ⚙️ 

## Description 📚
This is a simple script to perform basic load testing on web applications. It uses Axios to perform HTTP requests and the commander library to handle command line options.

## Installation
For the installations you need to first clone the repository.

```
git clone ...
```
You must run the following command in the console
```
npm install
```

## Running the application
To use the script, you can run it with Node.js, providing the destination URL, the number of requests per minute, the HTTP method and, if POST, the message body in JSON format.

```
GET: 

node loadTest.js -u http://miurl.com -n 9000 -m GET



POST:

node load_test.js -u http://miurl.com -n 60 -m POST -b '{"key": "value"}'
```

### 🐞 Did you find some issue or improvment?
Feel free to contribute and do whatever to consider better to this project. 💻 🙏🏼