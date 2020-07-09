API HELP DOC:

URL:
http://localhost:3000/person

METHOD:

GET http://localhost:3000/person

This would give all the users in the system



POST http://localhost:3000/person

Header of the API 
Content-Type : application/json

Sample Body:
{
    "id": 3,
    "universe": "Xandar",
    "family_id": 1,
    "power": "200",
    "name": "Rieg Davan "
}
Here id and universe are the primary key, execpt name, all fields are manditory