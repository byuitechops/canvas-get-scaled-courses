# canvas-get-scaled-courses
A snippet of code to get the scaled courses for pathway and online

Setup
Inside of main() in index.js, set the `subAccount` to get by changing the index of `subAccounts` to 0 for pathway courses and 1 for online courses.
```
async function main() {
    try {
        
        var subAccount = subAccounts[0]; // 0 for pathway, 1 for online
```

To run
```
npm start
```
