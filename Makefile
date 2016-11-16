clean:
	rm -rf dist

install:
	yarn install

build:
	webpack -cdv

run:
	webpack-dev-server --progress --colors
