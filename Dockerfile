FROM node:7.2.1
MAINTAINER Michelle D. Zhang <zhang.michelle.d@gmail.com>

RUN npm install -g yarn && \
    mkdir -p /opt/react-redux-example

WORKDIR /opt/react-redux-example

COPY package.json /opt/react-redux-example
COPY yarn.lock /opt/react-redux-example
RUN yarn

COPY . /opt/react-redux-example

ARG GIT_COMMIT
ENV GIT_COMMIT $GIT_COMMIT
ENV PATH=/opt/react-redux-example/node_modules/.bin:${PATH}
ENV NODE_ENV $NODE_ENV

EXPOSE 8080
RUN make build
CMD ["make", "run"]
