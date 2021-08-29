module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
      tsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true,
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    'dot-notation': 0,
    'no-useless-constructor': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    eqeqeq: 0,
    'lines-between-class-members': 0,
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        rangeStart: 0,
        parser: 'babel-ts',
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
      },
    ],
  },
}
