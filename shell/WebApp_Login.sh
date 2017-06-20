#!/bin/bash

echo "Login with credentials, obtaining an OAuth token (grant_type=password)"

echo "username:"
read USERNAME
echo "password:"
read PASSWORD

TOKEN=`curl -v -X POST -d "response_type=token" -d "grant_type=password" -d "username=$USERNAME" -d "password=$PASSWORD" "http://localhost:8081/oauth/token"`
TOKEN=`echo $TOKEN | cut -f4 -d"\""`

echo "OAuth: $TOKEN"

echo "Redeeming OAuth token for JWT token"

curl -v -X POST -H 'X-WM-USERID: user' -H 'X-WM-REQUESTID: onetuhoent' -H 'X-WM-ORIGIN: origin' -H 'X-WM-ORIGINIP: 127.0.0.1' -H "Content-type: application/json" -d "{ \"token\": \"$TOKEN\" }" "http://localhost:8081/oauth/redeem_auth_token"



