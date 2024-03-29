module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks", "eslint-plugin-import-helpers"],
  rules: {
    quotes: [2, "double", {
      avoidEscape: true,
    }],
    indent: [2, 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": [2, {
      extensions: [".js", ".jsx", ".tsx"],
    }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", {
      argsIgnorePattern: "^_",
    }],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": ["error", {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"],
    }],
    "max-len": ["error", {
      code: 170,
      ignoreComments: true,
    }],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "no-undef": "off",
    "react/no-array-index-key": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        alphabetize: {
          order: "asc",
          ignoreCase: false,
        },
        groups: [
          ["/^react$/", "/^react-dom$/"],
          "module",
          "/^shared\\//",
          "/^entities\\//",
          "/^features\\//",
          "/^widgets\\//",
          "/^pages\\//",
          "/^processes\\//",
          "/^app\\//",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
      "max-len": "off",
    },
  }],
};
