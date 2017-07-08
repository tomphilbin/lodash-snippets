# Lodash Snippets for Visual Studio Code

![Build Status](https://travis-ci.org/tomphilbin/lodash-snippets.svg?branch=master)

## Usage

Lodash Snippets can be installed from inside the VS Code Extensions menu. Once installed, snippets will be available through IntelliSense.

![Demo](https://media.giphy.com/media/3og0IP4e3q96va5vVu/giphy.gif)

## Running the Source

### Prerequisites

- Node.js >= 7.8.0 – required for async/await.
- Yarn – optional.

### Instructions

This package builds the snippets from the Lodash JSDoc annotations. To run the source, clone the GitHub repository:

````bash
git clone https://github.com/tomphilbin/lodash-snippets.git
````

Then install the dependencies and run:

````bash
cd lodash-snippets
yarn # or `npm install`
yarn start # or `npm start`
````

The snippets will then be written to the file specified in `src/config.json`.

### Tests

The unit tests can be executed by running `yarn test` or `npm test`.


## Contributing

[Fork me on GitHub](https://github.com/tomphilbin/lodash-snippets/fork)!