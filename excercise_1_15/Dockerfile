FROM node:17

ENV TZ "Europe/Helsinki"

WORKDIR /usr/src/app

COPY . .

RUN apt update && apt install -y telnet

CMD ["node", "socket-server.js"]

# docker build -t telnet-test .
# docker run --rm -it  --name test-container telnet-test bash
# winpty docker exec -it test-container bash