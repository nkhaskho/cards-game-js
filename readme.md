## Environment
**Node** version 14.X.Y

This project contain 4 files
- **readme.md**: contain project description and environment configuration
- **package.json**: contain project details and requirements dependencies
- **main.js**: main game program
- **solution.js**: exported implementation module, to be used in main game
- **solution.spec.js**: test

### Install required dependencies
The only external npm package which is required for this solution is the **jest** library which is used for testing purpose
``` bash
npm install --save
```
By running this command, the Node Package Manager will install all dependency in the **package.json** file.
<br><br>

## Run and test solution

### Run the solution
To run this solution, use the command below 
``` bash
npm start
```
This script command, will run the **solution.js** with node, will invoke the command
``` bash
node solution.js
```

### Run solution tests 
To run tests for this solution using the command
``` bash
npm test
```