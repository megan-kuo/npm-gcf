# npm-gcf
Example npm files for pushing a dependency using GCB and storing it in AR and then creating a GCF functions using the stored dependency.

## Pushing a package to Artifact Registry using GCB
### index.js
The package to be pushed is in the `index.js` file. It contains a simple greeting.

### package.json
The package.json file outlines the necessary information for the package to be built so that it can be published. 

### .npmrc
This file contains the necessary repo url and auth config. 
  - the scope is `@npm-gcb-gcf` which will direct npm to upload the package to this specified repo. 

### cloudbuild.yaml
This file outlines the steps that cloudbuild will run. 
1. The first step is to run the auth command
2. Then we will publish the package using the information that is in the `package.json` file.

The command to run cloudbuild is `gcloud builds submit --config cloudbuild.yaml`.

## Configure the function to use the package as a dependency
### npm-sample-function
The npm-sample-function folder contains the function that will be deployed to cloud functions. 

### index.js
This is the file that defines your function. In this example we are going to be using the package that we uploaded and use it as an import. Our function should return the greeting that we had uploaded to AR. 

### package.json
The `dependencies` tells GCF to install the dependency from the specified scope/repository.

### .npmrc
Specifies the auth config and specified scope/repository.

The command to deploy the function is: 
`gcloud functions deploy helloWorld --runtime nodejs16 --trigger-http --allow-unauthenticated`. Where helloWorld is the function that was defined in the `index.js`.

The command to test the function is: 
`gcloud functions call hello_team`. Where it should return result `Hello Team`.
