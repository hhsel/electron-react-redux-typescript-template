const path = require('path')

const outputPath = path.join(__dirname, 'build')
const rendererPath = path.join(__dirname, 'src', 'renderer')

// Electron main process config
const configMain = {
    mode: 'development',
    target: 'electron-main',
    entry: ['./src/main/index.js'],
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            },
        }],
    },
}

// Electron renderer process (React-based view) config
const configRenderer = {
    mode: 'development',
    target: 'electron-renderer',
    entry: ['@babel/polyfill', './src/renderer/index.js'],
    resolve: {
        alias: {
            // React Redux aliases
            '@actions': path.join(rendererPath, 'actions'),
            '@stores': path.join(rendererPath, 'stores'),
            '@reducers': path.join(rendererPath, 'reducers'),
            '@containers': path.join(rendererPath, 'containers'),
            '@components': path.join(rendererPath, 'components'),
        },
    },
    output: {
        filename: 'renderer.js',
        path: outputPath,
    },
    module: {
        rules: [
            // Enforce ESLint first
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            // Babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                        ],
                    }
                },
            },
        ],
    },
}

module.exports = [configMain, configRenderer]
