const DeepstreamServer = require('deepstream.io')
const C = DeepstreamServer.constants
/*
The server can take
1) a configuration file path
2) null to explicitly use defaults to be overriden by server.set()
3) left empty to load the base configuration from the config file located within the conf directory.
4) pass some options, missing options will be merged with the base configuration
*/
/*
= Schema =
chats/id/name -> String
        /users -> List users
        /new-message-chat -> Event
users/id/name -> String
        /last_time -> Moment()
        /chats -> List chats
*/
const server = new DeepstreamServer({
  host: 'localhost',
  port: 6020,
  tcpPort: 6021
})

// start the server
server.start()
