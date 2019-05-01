const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const outputPath = path.join(__dirname, 'build')
const rendererPath = path.join(__dirname, 'src', 'renderer')

// Electron main process config
const configMain = {
    mode: 'development',
    target: 'electron-main',
    entry: ['./src/main/index.ts'],
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    module: {
        rules: [
            // TSLint
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: {
                    loader: 'tslint-loader',
                }
            },
            // Babel
            {
                test: /\.(js|ts)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                    }
                },
            },
        ],
    },
}

// Electron renderer process (React-based view) config
const configRenderer = {
    mode: 'development',
    target: 'electron-renderer',
    entry: ['@babel/polyfill', './src/renderer/index.tsx'],
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            // React Redux aliases
            // You must sync these with tsconfig.json.compilerOptions.paths
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
            // TSLint
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: {
                    loader: 'tslint-loader',
                }
            },
            // Babel
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                        ],
                    }
                },
            },
        ],
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
}

module.exports = [configMain, configRenderer]
