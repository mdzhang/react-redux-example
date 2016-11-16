FROM node:6.3.1
MAINTAINER Michelle D. Zhang <zhang.michelle.d@gmail.com>

RUN mkdir -p /opt/react-redux-example
WORKDIR /opt/react-redux-example

COPY package.json /opt/react-redux-example
COPY yarn.lock /opt/react-redux-example
RUN npm install -g yarn
RUN yarn

COPY . /opt/react-redux-example

ARG GIT_COMMIT
ENV GIT_COMMIT $GIT_COMMIT
ENV PATH="./node_modules/.bin:${PATH}"
ENV NODE_ENV $NODE_ENV

EXPOSE 8080
RUN make build
CMD ["make", "run"]
