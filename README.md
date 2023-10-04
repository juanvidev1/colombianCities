# Colombian Cities Web Service 💛💛💙❤️

![node version](https://img.shields.io/badge/node_version-16.17.1-green) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

Welcome to the UNOFFICIAL Colombian Cities Web Service. This is an open project that wants to give an easy handling to search and find a Colombian city or town using it's name or the department (state) name. You can also colaborate in this project that is just a way to give some tools to other developers to have other forms to find and get cities from Colombia faster.

To make your own services based on this one just fork and clone the repo using

```
git clone https://github.com/juanvidev1/colombianCities.git
```

Then just install the packages using
```
npm install
```

The project will run on port 5000 by default just for avoid conflicts if you're using react or some other front end development technologies that uses port 3000 by default. If you want to change the port you should create a .env file on the root of the project and create a PORT variable to change the port just like this
```
PORT=[number_of_desired_port]
```
## Use of the WS
The first thing you need to use this WS is the endpoint. Accesing to [This link](https://colombian-cities.onrender.com/) you will have the root address with some basic information about the web service.

When you access the endpoint described in the link above you just need to add /api/v1/cities to retrieve the basics of the endpoint; that should be a json like this
```
{
    "message": "You haven't passed any parameter",
    "mensaje": "No has pasado ningún parámetro"
}
```
In this case you are in the root of the api and just need to send the appropiate query params to obtain the data you need.
### For retrieve a city (or a list of cities) using it's name (or part of it)
Retrieving cities is really easy. Just add the cityName query param and you'll get an array with cities matching with your search. Below an example and the response:

```
The endpoint http://localhost:4000/api/v1/cities?cityName=cun

Will have the following response

{
  "data": [
    {
      "province": "Cundinamarca",
      "city": "Cucunubá"
    },
    {
      "province": "Tolima",
      "city": "Cunday"
    }
  ]
}
``` 

This response returns an array with all the cities from Colombia that includes the string "cun" in their names with their respective province (is the same as departamento in Colombia).

### You can also retrieve the cities from a province using it's name
If you want to retrieve all the cities that belongs to a province, you only should change the name of the query param from cityName to provinceName as the example below:

> **Warning: For a correct response using the province query param you must use the full name of the province. This issue will be corrected for future versions of this WS**
```
The endpoint http://localhost:4000/api/v1/cities?provinceName=quindio

Will have the following response:

{
    "data": [
        "Armenia",
        "Buenavista",
        "Calarcá",
        "Circasia",
        "Córdoba",
        "Filandia",
        "Génova",
        "La Tebaida",
        "Montenegro",
        "Pijao",
        "Quimbaya",
        "Salento"
    ]
}
```
> **Warning: For a correct response using the province query param you must use the full name of the province. This issue will be corrected for future versions of this WS**

Try this Web Service and just send me an email to juanvidev1@gmail.com if you want to collaborate to add more countries and cities or if you have some advices to make better this WS.

That's all for now.

Thank you!


<p align=center>
    💙 🦸‍♂️ 💛💛💙❤️
</p>