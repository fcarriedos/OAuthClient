# OAuthClient
Javascript OAuth client to demonstrate OAuth functionality at Workmarket

Sample Javascript client, to demonstrate, WM OAuth functionality.

Working against Linkedin OAuth service.

This project will be updated as the OAuth implementation progresses in Workmarket.

NOTE: the flow is incomplete, given that Linkedin does not allow CORS.

Prerrequisites
--------------

· NodeJS.
· Curl, Wget or web browser.
· Access to command line.


Build and run instructions
--------------------------

1) Clone the project from https://github.com/fcarriedos/OAuthClient

2) Open terminal, go to the project's folder.

3) Run:

        $ node server.js

4) Optional, but useful: open broswer's developer console (Firebug or similar)(
   and check network traffic. This will allow you to see the OAuth flow live, which
   is not that evident just watching the browser's screen.

5) Visit http://localhost:1234/
