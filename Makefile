GIT_COMMIT=$(shell git rev-parse --verify HEAD)
PROJECT_NAME=react-redux-example
BUILD_DIR=dist

.PHONY: build
build:
	webpack -cdv

.PHONY: clean
clean:
	rm -rf ${BUILD_DIR}

.PHONY: install
install:
	yarn install

.PHONY: lint
lint:
	eslint . --ext .jsx --ext js

.PHONY: lint-fix
lint-fix:
	eslint . --ext .jsx --ext js --fix

.PHONY: open
open:
	open http://localhost:8080/webpack-dev-server

.PHONY: run
run:
	webpack-dev-server --progress --colors --host=0.0.0.0 \
		--output-public-path=/${BUILD_DIR}/

.PHONY: view
view:
	open http://localhost:8080/webpack-dev-server/

##################################
# Docker container management
##################################

.PHONY: docker-build
docker-build:
	docker build \
    --build-arg GIT_COMMIT=${GIT_COMMIT} \
    -t ${PROJECT_NAME}:latest \
    -t ${PROJECT_NAME}:${GIT_COMMIT} \
    .

.PHONY: docker-run
docker-run:
	docker run  \
		-p 8080:8080 \
		--name ${PROJECT_NAME} \
		-v $$(pwd):/opt/${PROJECT_NAME} \
		-v node_modules:/opt/${PROJECT_NAME}/node_modules \
		${PROJECT_NAME}:latest

.PHONY: docker-down
docker-down:
	docker ps -aqf name=${PROJECT_NAME} | xargs docker rm --force

.PHONY: docker-open
docker-open:
	open http://localhost:8080
	
.PHONY: docker-ssh
docker-ssh:
	docker exec -it $$(docker ps -aqf name=${PROJECT_NAME}) /bin/bash
