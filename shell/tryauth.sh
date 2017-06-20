curl \
    -H  'X-WM-REQUESTID: onetuhoent' \
    -H  'X-WM-USERID: requestUser'  \
    -H  'X-WM-ORIGIN: migration' \
    -H  'X-WM-ORIGINIP: 127.0.0.1' \
    -H  'Content-type: application/json' \
    -d '{
  "username": "jwald@workmarket.com",
  "password": "w0rkmarket12",
  "mode": "USER_PASS",
  "jsessionid":"foo"
    }' \
    http://localhost:8082/validate_user_pass_ip
