FROM golang:1.20
WORKDIR /app
COPY go_service.go .
RUN go build -o go_service_bin go_service.go
CMD ["./go_service_bin"]