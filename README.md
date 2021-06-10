# serverless-monorepo-template

#### Feel free to open PR's with any improvements

This is template for monorepo AWS services using Serverless Framework
together with Yarn workspaces and Lerna.

It covers:
- stack management [stacks](stacks)
- common code sharing between stacks [stacks/common](stacks/common)
- common config sharing between stacks [stacks/config](stacks/config)
- managing dependencies in monorepo using Yarn Workspaces to reduce duplicate deps
- using Esbuild for speeding up the development
- using Sucrase for quick tests transpilation
- using Jest for testing lambdas
- much other lambda good practices:
    - logging objects using JSON
    - source maps using native Node feature
    - the least privilege access by using Serverless plugin
    - using modern ES2020 constructs
- using Lerna dependency tree for deployment in the right order

[...]

### [ci](ci) directory

It shows an example how to specify buildspec files, in case you are using AWS CodeBuild for CI/CD.

The definition of CI/CD stuff is not covered here.
