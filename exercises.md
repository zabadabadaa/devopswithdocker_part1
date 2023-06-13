## EXERCISE 1.1: GETTING STARTED
docker ps -a

CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS                      PORTS     NAMES
4bbab641583b   nginx     "/docker-entrypoint.…"   About a minute ago   Exited (0) 18 seconds ago             condescending_germain
1192913506e1   nginx     "/docker-entrypoint.…"   About a minute ago   Exited (0) 12 seconds ago             brave_saha
72bad9f9e4b0   nginx     "/docker-entrypoint.…"   2 minutes ago        Up 2 minutes                80/tcp    distracted_ardinghelli


## EXERCISE 1.2: CLEANUP
docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE


## EXERCISE 1.3: SECRET MESSAGE
starting container: 
docker run -d --rm -it devopsdockeruh/simple-web-service:ubuntu

enter container: 
winpty docker exec -it brave_franklin bash

Secret message command: 
tail -f ./text.log

Secret message is: 
'You can find the source code here: https://github.com/docker-hy'


## EXERCISE 1.4: MISSING DEPENDENCIES
start container with interactive terminal: 
winpty docker run -it ubuntu

Update the package database:
root@d06b3730f1c6:/# apt-get update

instal curl: 
root@d06b3730f1c6:/# apt-get -y install curl

command:
sh -c 'while true; do echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website; done'helsinki.fi


## EXERCISE 1.5: SIZES OF IMAGES
starting container:
docker run -d --rm -it devopsdockeruh/simple-web-service:alpine

enter container: 
winpty docker exec -it  hungry_zhukovsky sh

Secret message command: 
tail -f ./text.log

Secret message is: 
'You can find the source code here: https://github.com/docker-hy'

Image sizes:
docker images
REPOSITORY                          TAG       IMAGE ID       CREATED       SIZE
devopsdockeruh/simple-web-service   ubuntu    4e3362e907d5   2 years ago   83MB
devopsdockeruh/simple-web-service   alpine    fd312adc88e0   2 years ago   15.7MB


## EXERCISE 1.6: HELLO DOCKER HUB
starting container:
winpty docker run -it devopsdockeruh/pull_exercise

Give me the password: basics
You found the correct password. Secret message is:
"This is the secret message"


## EXERCISE 1.7: IMAGE FOR SCRIPT
Excercise in separate folder


## EXERCISE 1.8: TWO LINE DOCKERFILE
Excercise in separate folder


## EXERCISE 1.9: VOLUMES
preparations: make file text.log beforehand, otherwise Docker makes a DIRECTORY!
note: use "/"     https://stackoverflow.com/questions/50608301/docker-mounted-volume-adds-c-to-end-of-windows-path-when-translating-from-linux
docker run -v /${PWD}/text.log:/usr/src/app/text.log devopsdockeruh/simple-web-service



## EXERCISE 1.10: PORTS OPEN
docker run -p 127.0.0.1:3456:8080 devopsdockeruh/simple-web-service server

in browser: localhost:3456


## EXERCISE 1.11: SPRING
Excercise in separate folder


## EXERCISE 1.12: HELLO, FRONTEND!
Excercise in separate folder


## EXERCISE 1.13: HELLO, BACKEND!
Excercise in separate folder


## EXERCISE 1.14: ENVIRONMENT
Excercise in separate folder


## EXERCISE 1.15: HOMEWORK
Image: 
https://hub.docker.com/r/paavo6000/telnet-test