import licenseHeaderPlugin from 'eslint-plugin-license-header';

import { fileURLToPath } from 'node:url';

const path = fileURLToPath(new URL('../resources/apache-license-header.js', import.meta.url));

export default [
  {
    plugins: {
      'license-header': licenseHeaderPlugin
    },
    rules: {
      'license-header/header': [2, path]
    }
  }
]