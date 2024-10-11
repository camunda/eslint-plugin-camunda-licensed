# eslint-plugin-camunda-licensed

[![CI](https://github.com/camunda/eslint-plugin-camunda-licensed/actions/workflows/CI.yml/badge.svg)](https://github.com/camunda/eslint-plugin-camunda-licensed/actions/workflows/CI.yml)

Common lint rules Camunda licensed OSS projects.


## Use

Extend from our [available configurations] in your ESLint config:

```javascript
import camundaLicensedPlugin from 'eslint-plugin-camunda-licensed';

export default [
  ...camundaLicensedPlugin.configs.mit
]
```


## Available Configurations

We ship with a few blue prints:

* `mit`: ensures that all source files start with the [MIT license header](./resources/MIT-license-header.js)
* `commercial`: ensures that all source files start with the [Camunda commercial license header](./resources/commercial-license-header.js)
* `apache`: ensures that all source files start with the [Apache Version 2.0 license header](./resources/apache-license-header.js)


## Maintain Licenses

Changes to licenses will be released as [semantic version bumps](https://semver.org/).

To automatically add/update configured license headers, run ESLint in [auto-fix mode](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems):

```sh
eslint --fix
```

To validate that users add the license headers as required, ensure `eslint` is being run as part of your CI pipeline.


## License

MIT
