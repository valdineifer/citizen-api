# Citizen API
URL: https://vf-citizen-api.herokuapp.com/

## GET `api/citizen`
Response: 
```json
{
  "docs": [
    {
      "_id": "",
      "name": "",
      "lastName": "",
      "cpf": "",
      "email": "",
      "phone": "",
      "cep": "",
      "address": "",
      "neighborhood": "",
      "city": "",
      "uf": "",
      "__v": 0
    }
  ],
  "total": 1,
  "limit": 10,
  "page": 1,
  "pages": 1
}
```

## GET `api/citizen/:cpf`
Response: 
```json
{
  "_id": "",
  "name": "",
  "lastName": "",
  "cpf": "",
  "email": "",
  "phone": "",
  "cep": "",
  "address": "",
  "neighborhood": "",
  "city": "",
  "uf": "",
  "__v": 0
}
```

## POST `/api/citizen`
| Params       | Type   | Description                       |
|--------------|--------|-----------------------------------|
| name         | String | -------                           |
| lastName     | String | -------                           |
| cpf          | String | 11 digits, without symbols        |
| email        | String |                                   |
| phone        | String | min: 10, max: 11; without symbols |
| cep          | String | only numbers, 8 digits            |

## PUT `api/citizen/:cpf`
| Params       | Type   | Description                       |
|--------------|--------|-----------------------------------|
| name         | String | -------                           |
| lastName     | String | -------                           |
| cpf          | String | 11 digits, without symbols        |
| email        | String |                                   |
| phone        | String | min: 10, max: 11; without symbols |
| cep          | String | only numbers, 8 digits            |

## DELETE `api/citizen/:cpf`
Response: `204 - No Content`