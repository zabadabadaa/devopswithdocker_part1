# Telnet excercise

* Build Docker image from Dockerfile: ```docker build -t telnet-test .```
* Run container: ```docker run --rm -it --name test-container telnet-test bash```

* Start socket server: ```node socket-server.js```

Socket server listens port 8000 and answers when you contact it from another terminal:

* Connect to container from another terminal: ```winpty docker exec -it test-container bash```
* telnet connection to port 8000: ```telnet localhost 8000```

and answer is "Terve kaveri!"