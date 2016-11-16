clean:
	rm -rf dist

install:
	npm install

build:
	webpack -cdv

run:
	webpack-dev-server --progress --colors
