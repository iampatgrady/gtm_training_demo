# GTM Training Demo
by Pat Grady for Adswerve  

![Node.js CI](https://github.com/iampatgrady/gtm_training_demo/workflows/Node.js%20CI/badge.svg?event=push)

## INSTALL
Have Node.js installed with the `npm` package manager,  https://nodejs.org/en/download/  

In your terminal, run:  
```bash
git clone https://github.com/iampatgrady/gtm_training_demo.git
cd gtm_training_demo
npm install
npm test
npm start
```

## ADD GTM
1.     Download GTM-CONTAINER.json & Import to GTM Container
2.     Edit `app.js` to include your GTM container ID:
```JavaScript
const CONTAINER_ID = "GTM-REPLACE"
// becomes
const CONTAINER_ID = "GTM-XYZ123"
```

## DEMO
Open a browser to: http://localhost:8080  
Run demo
