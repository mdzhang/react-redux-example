# Upgrade Guide

## Upgrading Node Version

- Update [Dockerfile](../Dockerfile)
- Update [.node-version](../.node-version)
- Update node version in [circle.yml](../circle.yml)
- Rerun [setup steps](CONTRIBUTING.md#installation) 5-8
  - Upgrade `brew` and `nodenv` if necessary:

      ```sh
      brew doctor
      brew upgrade
      brew update nodenv
      ```

## Upgrading Node packages

- See outdated packages with `npm outdated`
- Use `npm-check-updates` for bulk updating package versions in `package.json`

    ```sh
    # upgrade all packages
    ncu -a

    # upgrade all packages except eslint-plugin-jsx-a11y
    ncu -a -x eslint-plugin-jsx-a11y
    ```
- After updating `package.json` don't forget to update `yarn.lock` by running `yarn`
