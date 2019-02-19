# eslint-plugin-camunda-licensed

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

* `camunda-licensed/mit`: Use for ES5 style projects / node libraries


## Maintain Licenses

This repository will receive updates once license headers change.

To initally apply license headers for all files in your project, execute

```sh
eslint . --fix
```

To validate that users add the license headers as required, ensure `eslint`
is being run as part of your CI pipeline.


## License

MIT
