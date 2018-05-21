# Mock Device Cloud

Sample implementation of authorization service implementing [OAuth 2.0](https://tools.ietf.org/html/rfc6749) to be used 
for [account linking](https://developer.amazon.com/docs/custom-skills/link-an-alexa-user-with-a-user-in-your-system.html)
when developing Alexa Skills.

Uses a dedicated instance of [Virgil Auth](https://github.com/VirgilSecurity/virgil-services-auth) service to provide access 
and refresh tokens. See [virgil-auth-client.js](./virgil-auth-client.js).

Currently only supports [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1) protocol. Stores the 
authorization codes in memory. See [db/authorizationcodes.js](./db/authorizationcodes.js)

The client information is hardcoded in [db/clients.js](./db/clients.js). Make sure to replace them with custom values before 
deploying. In a real implementation the client information and authorization codes must be stored in a database.

## Development
Works with Node.js >=4.
Requires environment variable `VIRGIL_AUTH_URL` to be set to the url of the dedicated Virgil Auth Service instance.

To start the server, run:
```sh
npm start
```
