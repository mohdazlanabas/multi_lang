FROM openjdk:17-jdk-slim
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN apt-get update && apt-get install -y maven
RUN mvn compile
RUN mvn package
CMD ["java", "-jar", "target/kotlin_service-1.0-SNAPSHOT-jar-with-dependencies.jar"]
