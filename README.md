# eslint-plugin-camunda-licensed

[![Build Status](https://travis-ci.com/camunda/eslint-plugin-camunda-licensed.svg?branch=master)](https://travis-ci.com/camunda/eslint-plugin-camunda-licensed)

Common lint rules Camunda licensed OSS projects.


## Use

Extend `camunda-licensed/*` in your base eslint configuration:

```json
{
  "extends": "plugin:camunda-licensed/mit"
}
```


## Available Recommended Configurations

We ship with a few blue prints:

* `camunda-licensed/mit`: ensures that all source files start with the [MIT license header](./resources/MIT-license-header.js)
* `camunda-licensed/commercial`: ensures that all source files start with the [Camunda commercial license header](./resources/commercial-license-header.js)
* `camunda-licensed/apache`: ensures that all source files start with the [Apache Version 2.0 license header](./resources/apache-license-header.js)


## Maintain Licenses

Changes to licenses will be released as [semantic version bumps](https://semver.org/).

To automatically add/update configured license headers, run ESLint in [auto-fix mode](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems):

```sh
eslint --fix
```

To validate that users add the license headers as required, ensure `eslint` is being run as part of your CI pipeline.


## License

MIT
