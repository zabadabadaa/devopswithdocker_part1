# Dockerfile for  EXERCISE 1.12: HELLO, FRONTEND!

FROM node:16

EXPOSE 5000

WORKDIR /usr/src/app

COPY . . 

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "-l", "5000", "build"]


# docker build . -t example-frontend
# docker run -p 5000:5000 example-frontend