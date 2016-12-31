# Upgrade Guide

## Upgrading Node Version

- Update [Dockerfile](../Dockerfile)
- Update [.node-version](../.node-version)
- Rerun [setup steps](CONTRIBUTING.md#installation) 5-8
  - Upgrade `brew` and `nodenv` if necessary:

      ```
      brew doctor
      brew upgrade
      brew update nodenv
      ```
- Manually confirm the following commands:
  - `make docker-build`
  - `make docker-run`
  - `make build`
  - `make run`
