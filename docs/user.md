# User API Spec

## Register User API

Endpoint: POST /api/users

Request Body :

```json
{
  "username": "faikar",
  "email": "faikar@admin",
  "password": "faikar111"
}
```

Respone Body :

```json
{
  "data": {
    "username": "faikar",
    "email": "faikar@admin"
  }
}
```

Respone Body Error :

```json
{
  "errors": "Username/email already exist"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "faikar",
  "password": "faikar111"
}
```

Respone Body Success :

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Respone Body Error:

```json
{
  "errors": "Username/password is wrong!"
}
```

## Update User API

Endpoint : PATCH /api/users/current

Headers :

- Auth : Token

Request Body :

```json
{
  "username": "faikar", //optional
  "password": "faikar111" //optional
}
```

Respone Body Success :

```json
{
  "data": {
    "username": "faikar",
    "password": "faikar111"
  }
}
```

Respone Body Error :

```json
{
  "errors": "Username/password is not ....."
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Auth : Token

Respone Body Success :

```json
{
  "data": {
    "username": "faikar",
    "email": "faikar@admin.com"
  }
}
```

Respone Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Auth : Token

Respone Body Success :

```json
{
  "data": "OK"
}
```

Respone Body Error :

```json
{
  "errors": "Unauthorized"
}
```
