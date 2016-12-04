# Contributing

## Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Running](#running)
* [Viewing](#viewing)
* [Testing](#testing)
* [Style](#style)

## Requirements

1. [Homebrew](http://brew.sh) for managing software packages on OS X
    ```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. [git](https://git-scm.com) for version control
    ```
    brew install git
    ```

3. [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle) for bundling packages with Homebrew
    ```
    brew tap Homebrew/bundle
    ```

## Installation

1. Clone this repo
    ```
    git clone git@github.com:mdzhang/react-redux-example.git
    cd react-redux-example
    ```

2. Install Homebrew packages
    ```
    brew bundle
    ```

3. Configure your shell to enable shims and automatic environment variable loading
    ```
    # ~/.bash_profile

    if which nodenv > /dev/null; then
      eval "$(nodenv init -)";
    fi

    if which direnv > /dev/null; then
      eval "$(direnv hook bash)"
    fi
    ```

4. Restart shell so that changes take effect
    ```
    source ~/.bash_profile
    ```

5. Install Node
    ```
    nodenv install -s $(cat ./.node-version)
    ```

7. Install global Node packages
    ```
    npm install yarn --global
    nodenv rehash
    ```

8. Install local Node packages
    ```
    yarn install
    ```

9. Setup development environment variables
    ```
    cp .envrc.sample .envrc
    direnv allow
    ```

    This is critical for adding _local_ npm packages onto your `$PATH`!

### Optional Steps

* Install git hooks
    ```
    pre-commit install
    ```

    *NB*: These hooks will fail if `.envrc` is not up to date

## Running

#### On host

```
make build
make run
```

#### Using docker container

```
make docker-build
make docker-run
```

## Viewing

#### On host

```
make open
```

#### Using docker container

```
make docker-open
```

## Testing

TODO

## Style

See [Airbnb's JS style guide](https://github.com/airbnb/javascript)

