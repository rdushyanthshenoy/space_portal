                                        API HELP DOC
API ENDPOINT:
http://localhost:5000/person

METHODS SUPPORTED:

GET http://localhost:5000/person

    USE: To get all users from the database

    Sample request:
        http://localhost:5000/person

    Sample response:
        [
        {
            "id": 1,
            "universe": "Asgard",
            "family_id": 1,
            "power": "10000",
            "name": "Thor",
            "family": "Asgardian"
        },
        {
            "id": 1,
            "universe": "Earth",
            "family_id": 1,
            "power": "3000",
            "name": "Iron Man",
            "family": "Robot"
        }]


POST http://localhost:5000/person

    USE: To insert a new person in the database system

    Header:
        Content-Type : application/json

    Sample request Body:
        {
            "id": 3,
            "universe": "Xandar",
            "family_id": 1,
            "family": "Supernova",
            "power": "200",
            "name": "Rieg Davan "
        }

    Sample resposne:
        ID 3 added to Marvel Identity Management System


API ENDPOINT:
http://localhost:5000/familyfromuniverse

METHODS SUPPORTED:
    GET http://localhost:5000/familyfromuniverse
    
    USE: To get the families from given universe

    Sample Request:
        http://localhost:5000/familyfromuniverse?universe=Earth
    
    Sample response:
    [
    {
        "family_id": 1,
        "family": "Robot"
    },
    {
        "family_id": 2,
        "family": "Army"
    },
    {
        "family_id": 3,
        "family": "Super Human"
    },
    {
        "family_id": 4,
        "family": "Mutant"
    },
    {
        "family_id": 10,
        "family": "Wakanda"
    }
    ]
API ENDPOINT:
http://localhost:5000/familyfromuniverse

METHODS SUPPORTED:
    GET http://localhost:5000/arewebalanced

    USE: To check if the given family is balanced or not

    Sample request:
    http://localhost:5000/arewebalanced?family=Robot

    Sample response:
    Robot is a unbalanced family


API ENDPOINT:
http://localhost:5000/unbalancedfamily

METHODS SUPPORTED:
    GET http://localhost:5000/unbalancedfamily

    USE: To get all the unbalanced family from all the universe

    Sample request:
    http://localhost:5000/unbalancedfamily

    Sample response:
    [
        {
            "family": "Asgardian",
            "family_id": 1
        },
        {
            "family": "Supernova",
            "family_id": 1
        }
    ]

API ENDPOINT:
http://localhost:5000/balanceme

METHODS SUPPORTED:
    PUT http://localhost:5000/balanceme

    USE: To update power of a given family across universe

    Sample request:
    URL http://localhost:5000/balanceme

    Header: 
    Content-Type : application/json

    Requst body:
        {
            "family_id": 10,
            "family": "Wakanda",
            "power": "20000"
        }

    Sample response:
    Wakanda's power changed to 20000


To start the application, install following npm dependences:
    body-parser
    express
    express-handlebars
    mysql
    nodemon(dev dependency)

Import the Marvel_multiverse.sql file to setup the mysql database. This would import the sample user data.