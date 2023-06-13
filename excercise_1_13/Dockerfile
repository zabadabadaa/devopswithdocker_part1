# Dockerfile for EXERCISE 1.13: HELLO, BACKEND!

FROM golang:1.16

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

RUN go build

CMD ["./server"]

# docker build . -t example-backend
# docker run -p 8080:8080 example-backend