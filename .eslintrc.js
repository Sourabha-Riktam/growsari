module.exports = {
  "parser": "@babel/eslint-parser",
  // "presets": ["module:metro-react-native-babel-preset"],
  "extends": [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:react-hooks/recommended",
    "@react-native-community",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "jest": true,
    "node": true,
    "es6": true
  },
  "settings": {
    "import/ignore": ["react-native"],
    "react": { "version": "detect" },
    "import/resolver": {
      "node": {
        "paths": [".", "src"],
        "extensions": [".js", ".jsx", ".tsx", ".ts"],
        "caseSensitive": false
      },
      "alias": {
        "map": [["@config", "./config"]],
        "extensions": [".js"]
      }
    }
  },
  "plugins": ["react", "react-native", "prettier", "react-hooks", "import"],
  "rules": {
    "array-bracket-spacing": 2,
    "no-unsafe-optional-chaining": 0,
    "arrow-spacing": 2,
    "eol-last": 2,
    "newline-before-return": 2,
    "no-param-reassign": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": 2,
    "object-curly-spacing": [2, "always"],
    "semi": 0,
    "spaced-comment": [2, "always"],
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-native/no-unused-styles": 2,
    "react/no-array-index-key": 2,
    "react/display-name": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-equals-spacing": 2,
    "react/prop-types": 0,
    "react/destructuring-assignment": [0, "always"],
    "react/no-multi-comp": [2, { "ignoreStateless": false }],
    "react/no-unstable-nested-components": [1, { "allowAsProps": false }],
    "react/jsx-handler-names": [
      1,
      {
        "eventHandlerPrefix": "(handle|on|get|set|fetch)",
        "eventHandlerPropPrefix": "(handle|on|get|set|fetch)",
        "checkLocalVariables": true,
        "checkInlineFunction": true
      }
    ],
    "react/jsx-no-constructed-context-values": 2,
    "react/jsx-props-no-multi-spaces": 1,
    "import/exports-last": 2,
    "import/order": [
      2,
      {
        "groups": [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
          "unknown"
        ],
        "pathGroups": [
          {
            "pattern": "react+(|-native)",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "*.+(png|jpg|jpeg|ico|json|gif)",
            "group": "index",
            "patternOptions": { "matchBase": true },
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "ignore",
          "caseInsensitive": false
        }
      }
    ],
    "import/newline-after-import": [2, { "count": 1 }],
    "import/no-named-default": 2,
    "import/prefer-default-export": 2,
    "import/no-anonymous-default-export": 2,
    "import/group-exports": 2
  }
};
