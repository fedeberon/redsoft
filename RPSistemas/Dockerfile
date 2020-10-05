FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8887
ARG JAR_FILE=target/RPSistemas-2.3.1.RELEASE.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
