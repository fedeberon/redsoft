FROM openjdk:8-jdk-alpine

VOLUME /tmp

EXPOSE 8887

COPY target/*.jar RPSistemas-2.3.1.RELEASE.jar

ENTRYPOINT ["java","-jar","/RPSistemas-2.3.1.RELEASE.jar"]
