FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8886
ARG JAR_FILE=target/RedSoftWeb-0.0.1-SNAPSHOT.war
ADD ${JAR_FILE} app.war
ENTRYPOINT ["java","-jar","/app.war"]
