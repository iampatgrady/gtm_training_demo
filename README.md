# GTM Training Demo
by Pat Grady for Adswerve  
![Node.js CI](https://github.com/iampatgrady/gtm_training_demo/workflows/Node.js%20CI/badge.svg?branch=master)

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
Edit line 1 of the `app.js` to include your GTM container ID:  
```JavaScript
const gtm_container_id = "GTM-REPLACE"
// becomes
const gtm_container_id = "GTM-XYZ123"
```

## DEMO
Open a browser to: http://localhost:8080  
Run demo
