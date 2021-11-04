# Student based RESTful API

This is a REST API to perform crud operations on Student data. Here you can perform operations like :

- GET
- POST
- PATCH
- DELETE 

## Prerequisites

[x] Make sure node is installed on your system
[x] Make sure mongodb is installed on your system

## Installation

First clone the project on your local system

```bash

    $ git clone TK

```

or simply download the project 

## Setup

Open your CLI in the folder where this project has been downloaded, enter the following commands :

```bash

    npm install

```

This will initiate node_modules folder and also install all the dependencies

then again enter the following command

```bash

    node src/index.js

```

and the server will start running on the localhost:3000 and you are ready to go...


## GET requests

To get all the data request the following url either in your browser or any api testing software

```bash

    localhost:3000/students

```

To get name specific data request the following url either in your browser or any api testing software

```bash

    localhost:3000/students/studentsName

```


## POST requests

To save data into the database, execute post request on the following url

```bash

    localhost:3000/students

```

with the following data in the body in correct order and format (in json format)

```bash

    {
        "name" : "studentsName",
        "email" : "studentsEmail",
        "phone" : studentsPhoneNumber,
        "address" : "studentsAddress"
    }

```

- name field must be a string data type
- email field must be again a string data type and a proper email
- phone field must be a number data type and only contain 10 digits
- address field must be a string data type


## PATCH request

To update data in the database, execute patch request on the following url

```bash

    localhost:3000/students/idOfStudent

```

with the following data in the body in correct order and format (in json format)

```bash

    {
        "fieldYouWantUpdate" : "newValueOfThatField"
    }

```

Field could be any one of the following : name, email, phone, address

Value formats: 

- name field must be a string data type
- email field must be again a string data type and a proper email
- phone field must be a number data type and only contain 10 digits
- address field must be a string data type



## DELETE request

To delete data from the database, execute delete request on the following url

```bash

    localhost:3000/students/idOfStudent

```






