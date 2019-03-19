module.exports = {
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": 0,
      "react/button-has-type": 0,
      "react/prop-types": [1, {ignore: ['className', 'prefixCls', 'size']}]
    },
    "globals": {
    },
    "env": {
      "jest": true,
      "browser": true
    }
};

