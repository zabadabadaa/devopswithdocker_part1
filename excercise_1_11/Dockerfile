FROM openjdk:8

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

# Some problem with line endings (possibly related to Windosw(10)???). Olen hämmentynyt
# https://stackoverflow.com/questions/61226664/build-docker-error-bin-sh-1-mvnw-not-found
RUN apt-get update && apt-get install dos2unix
RUN dos2unix mvnw
# problem solved above

RUN ./mvnw package

CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]

