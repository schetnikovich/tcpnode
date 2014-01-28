### Start server

Server accepts single argument - port number.

The following command will run server that will listen to port `8899`:

    node server 8899

### Start client

Client accepts two arguments - address and number of connections. 

The following command will open 10 connections to `localhost:8899`:

    node client localhost:8899 10

### View open connections

Either on server or on client machine run the following command:

    lsof -i | grep node



