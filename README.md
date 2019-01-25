# Canvas Get Scaled Courses (Standard Template)

## Description 
A snippet of code to get the scaled courses for pathway and online. After running the code, a csv with the scaled courses will be added to the current working directory.

## How to Install

Standard Install

1. Clone this repository:
    ```bash
    git clone https://github.com/byuitechops/canvas-get-scaled-courses.git
    ```
1. Step into the folder that was just created 
    ```bash
    cd ./canvas-get-scaled-courses
    ```
1. To install dependancies, run:
    ```bash
    npm i
    ```

1. To initialize the program, run:
    ```bash
    npm start
    ```

## Setup
Inside of main() in index.js, set the subAccount to get by changing the index of subAccounts to 0 for pathway courses and 1 for online courses.

```js
async function main() {
    try {
        // 0 for pathway, 1 for online
        var subAccount = subAccounts[0]; 
```

## How to Use
Run the following command:
```bash
node index.js
```

## How to Build
From within the folder where the project resides, run the following:
```bash
npm run build
```

## How to Test
From within the folder where the project resides, run the following:
```bash
npm test
```

# Canvas Get Scaled Courses (Global CLI Template)

## Description 
A snippet of code to get the scaled courses for pathway and online. After running the code, a csv with the scaled courses will be added to the current working directory.

## How to Install

Install as a Global CLI

Run the following command:
```bash
npm install -g git+https://github.com/byuitechops/canvas-get-scaled-courses.git
```

## Setup
Inside of main() in index.js, set the subAccount to get by changing the index of subAccounts to 0 for pathway courses and 1 for online courses.

```js
async function main() {
    try {
        // 0 for pathway, 1 for online
        var subAccount = subAccounts[0]; 
```

## How to Use
Run the following command:
```bash
canvas-get-scaled-courses
```

## How to Build
From within the folder where the project resides, run the following:
```bash
npm run build
```

## How to Test
From within the folder where the project resides, run the following:
```bash
npm test
```

# Canvas Get Scaled Courses (Module Template)

## Description 
A snippet of code to get the scaled courses for pathway and online. After running the code, a csv with the scaled courses will be added to the current working directory.

## How to Install

Install as a Module

Run the following command:
```bash
npm install --save git+https://github.com/byuitechops/canvas-get-scaled-courses.git
```

## Setup
Inside of main() in index.js, set the subAccount to get by changing the index of subAccounts to 0 for pathway courses and 1 for online courses.

```js
async function main() {
    try {
        // 0 for pathway, 1 for online
        var subAccount = subAccounts[0]; 
```

## How to Use
List the correct "require" syntax for your module to use it
```bash
const canvas-get-scaled-courses = require('canvas-get-scaled-courses');
```

## How to Build
From within the folder where the project resides, run the following:
```bash
npm run build
```

## How to Test
From within the folder where the project resides, run the following:
```bash
npm test
```
