#FROM - Image to start from.
FROM mysql

#RUN - Runs a command in the container

#CMD - Command that should be executed when running the image as a container.

ENV MYSQL_ROOT_PASSWORD="root"
ENV MYSQL_USER="admin"
ENV MYSQL_PASSWORD="admin"


COPY ./db-creation /docker-entrypoint-initdb.d

# COPY ./table-creation ./opt



# docker build -t mysql-employee-image:latest .
# docker run -d -p 3306:3306 --name mysql-employee mysql-employee-image:latest
