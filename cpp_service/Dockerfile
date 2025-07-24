FROM gcc:latest
WORKDIR /app
COPY cpp_service.cpp .
RUN g++ -o cpp_service_bin cpp_service.cpp
CMD ["./cpp_service_bin"]