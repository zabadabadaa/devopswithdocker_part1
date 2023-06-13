#This Dockerfile is for exercice 1.7: IMAGE FOR SCRIPT

# Start from the ubuntu:20.04 image
FROM ubuntu:20.04

# Use /usr/src/app as our workdir. The following instructions will be executed in this location.
WORKDIR /usr/src/app

# install curl
RUN apt-get update
RUN apt-get -y install curl

# Copy the new_file.sh file from this location to /usr/src/app/ creating /usr/src/app/new_file.sh
COPY new_file.sh .

# When running docker run the command will be ./new_file.sh
CMD ./new_file.sh

# to create image (tagged 'curler'), run in this folder:
# docker build . -t curler

# to run container:
# winpty docker run -it curler