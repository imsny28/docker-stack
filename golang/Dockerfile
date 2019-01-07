# https://medium.com/@rrgarciach/bootstrapping-a-go-application-with-docker-47f1d9071a2a
FROM golang:alpine
RUN mkdir  -p /go/src

ADD . /go/src/app
WORKDIR /go/src/app
EXPOSE 3002
ENV PORT=3002
COPY . ./
CMD ["go", "run", "main.go"]
