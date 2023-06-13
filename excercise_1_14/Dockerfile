# Dockerfile for EXERCISE 1.13: HELLO, BACKEND!
# edited: works with: EXERCISE 1.14: ENVIRONMENT 

FROM golang:1.16

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

# edit
ENV REQUEST_ORIGIN=http://localhost:5000
# edit end

RUN go build

CMD ["./server"]

# docker build . -t example-backend
# docker run -p 8080:8080 example-backend