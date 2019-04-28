module.exports = {
    "env": {
        "browser": true
    },
    "rules": {
        // semicolons are verbose, omitting as possible is preferred.
        "semi": ["off"],
        "react/jsx-filename-extension": ["off"],
        // build will fail at the next stage anyway, no need to check so strictly.
        "import/no-extraneous-dependencies": ["off"],
        // indent of 2 is too narrow and difficult to understand
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        // Ptops validation is not necessary
        "react/prop-types": ["off"]

    },
    "extends": "airbnb",
    "settings": {
        "import/resolver": "webpack",
    }
}
