# OAuthClient
OAuth clients to demonstrate OAuth functionality at Workmarket

Sample Javascript and Shell clients, to demonstrate, WM OAuth functionality.

This project will be updated as the OAuth implementation progresses in Workmarket.

NOTE: the JS client flow is incomplete, given that Linkedin does not allow CORS.


NOTES
-----

 Tested and working:

 * WebApp_Login.sh
 * API_3rdparty_access-code.sh
 * auth_Webapp_sample.html

 Other than these, development on going.


Prerrequisites
--------------

 * Shell (bash, sh, zsh).
 * NodeJS.
 * Curl, Wget or web browser.
 * Access to command line.


Build and run instructions
--------------------------

1) Clone the project from https://github.com/fcarriedos/OAuthClient

2) Open terminal, go to the project's folder.

# Shell

The scripts yield verbose output including the full requests and responses with their headers, enough to transparently the OAuth flow with full detail. Execute:
        
 * `API_3rdparty_access-code.sh`: to see the requests and result needed for 3rd party access to WM resources.
 * `API_3rdparty_access-token.sh` (incomplete): to see the requests and result needed for 3rd party access to WM resources, getting directly a token without the code step in the flow.
 * `WebApp_Login.sh`: to see the requests and result to get logged in the web application.

# Javascript

1) Run:

        $ node server.js

2) Optional, but useful: open broswer's developer console (Firebug or similar)(
   and check network traffic. This will allow you to see the OAuth flow live, which
   is not that evident just watching the browser's screen.

3) Visit http://localhost:1234/
