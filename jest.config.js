const rendererRoot = '<rootDir>/src/renderer'

module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
    transform: {
        '^.+\\.[jt]sx?': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^@(actions.*)$': `${rendererRoot}/$1`,
        '^@(stores.*)$': `${rendererRoot}/$1`,
        '^@(reducers.*)$': `${rendererRoot}/$1`,
        '^@(containers.*)$': `${rendererRoot}/$1`,
        '^@(components.*)$': `${rendererRoot}/$1`,
    },
}