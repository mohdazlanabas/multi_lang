FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app
COPY csharp_service.cs .
RUN dotnet new console -o csharp_service
WORKDIR /app/csharp_service
RUN mv ../csharp_service.cs Program.cs
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/csharp_service/out .
ENTRYPOINT ["./csharp_service"]