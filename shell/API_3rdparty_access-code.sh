#!/bin/bash

JWT_HEADER=`./tryauth.sh | python -m json.tool | grep jwt | cut -f"2" -d":" | cut -f"1" -d"," | sed "s/\"//g"`
echo
echo $JWT_HEADER
echo
echo "Requesting auth code"
CODE=`curl -v -H "X-WM-JWT: $JWT_HEADER" "http://localhost:8081/oauth/auth?response_type=code&client_id=vFfczYkNXCvICxQ9HGIYaux2&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Foauthcb" | grep "onClick" | cut -f4 -d"=" | cut -f1 -d"'"`
echo "Requesting auth token"
curl -v -H "X-WM-JWT: $JWT_HEADER" "http://localhost:8081/oauth/auth_ok?ok_token=$CODE"

