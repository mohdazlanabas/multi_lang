FROM ubuntu:latest
RUN apt-get update && apt-get install -y gcc
WORKDIR /app
COPY c_service.c .
RUN gcc -o c_service_bin c_service.c
CMD ["./c_service_bin"]