# syntax=docker/dockerfile:1
FROM ubuntu:latest
RUN apt-get update
# WORKDIR /
COPY . .
CMD ["bash", ""]
# EXPOSE 3000
