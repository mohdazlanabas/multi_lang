FROM rust:latest
WORKDIR /app
COPY rust_service.rs .
RUN rustc rust_service.rs -o rust_service_bin
CMD ["./rust_service_bin"]