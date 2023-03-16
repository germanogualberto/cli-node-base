# cli-node-base
A base app to build a cli application using node

### basic usage

- Before run it you need to install the following tools:
  --Docker

- Build the image
  docker build -t cli-node-base .

- Run the container from the image
  docker run -i --rm cli-node-base

### How to test

#### Run tests

This will run all the already existing tests:
docker run --rm cli-node-base test

#### Add new tests

1 - Create a new folder in the "/cases" directory and add a folder with any name contanining one file with the input desired and other file with the expected output with the respective names: "input", "expected"
2 - Rebuild the image
3 - Run again the tests

TODO: add unit tests
TODO: add integration tests

## Technical and architectural decisions

- Using ECMAScripts modules to symplify the exports/imports directives
- Classes that process the incoming data will be added in:
  "src"
- Modules that process the input/output of data are in:
  "src/input_output"
  Unit and integrations tests and also some test_helpers are present in the "**tests**" folder
- Constants the are used across the project are present in the ".env" file

## Used Libs and Frameworks (if used)

- readline is a node builtin module that provides a interface to reading data from a stream (such as stdin )
- vitest is a js testing tool that allows us to test ES modules natively
