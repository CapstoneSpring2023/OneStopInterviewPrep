FROM ubuntu:22.04
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt upgrade -y
RUN yes | apt install git
RUN yes | apt install curl --fix-missing

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
RUN wget https://go.microsoft.com/fwlink/?LinkID=760868 \
    apt install ./code_1.75.1-1675893397_amd64.deb

RUN git clone https://github.com/CapstoneSpring2023/OneStopInterviewPrep.git ~/repos/OneStopInterviewPrep

WORKDIR "/root/repos/OneStopInterviewPrep/"

# nvm environment variables
ENV NVM_DIR /root/.nvm
ENV NODE_VERSION 18.14.0

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN npm install

EXPOSE 3000

