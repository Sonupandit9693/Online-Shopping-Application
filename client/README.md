# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



// client .env setup{
 REACT_APP_STRIPE_APP_KEY=1f38c2f4c6152929034cbe904b9d964b3912546563720a9ef50aab7db7d91db4bcedd4d2bf1d53ac5862d100e6879c6d9bcb0571db73572eea6d47f6fa19ed3cfe0572b2c4407e257d0a690f762c206d06668bdafbdf0f90b683f6f5447e0f7c921d95102454d7c66039190c3b63e03ae873d7588fe3a2996357e676f0db91ef

REACT_APP_STRAPI_PUBLISHABLE_KEY=pk_test_51MbJ3hSGvDt3vL1dAPAvLO8TAynZ8ii87mt6STONbOoEOGvnHL1dEbh528DeNbpUMazACzhvNuF83RnLJcG3ZGHL00d0UaQTyU

REACT_APP_DEV_URL=http://localhost:1337
}

// api .env setup{
    HOST=0.0.0.0
PORT=1337
APP_KEYS=0SvpVSfkh2c94v3ErBPlbg==,tF7dw6wVvxTJpvqqwX0B9w==,hPggp8zCzUeUxfzVoW3KyQ==,UN/IfZV6gk4cENObiusZaw==
API_TOKEN_SALT=apXtjK1AA55U2+WAfgMrRw==
ADMIN_JWT_SECRET=SBQlKukhGNRX+Za3IIcgIg==
TRANSFER_TOKEN_SALT=O1tg+03xQ5aqWn5Np6WRAg==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=+FtTES4R4Cm3zXLVfkADMw==

STRIPE_KEY=sk_test_51MbJ3hSGvDt3vL1d17RSTUOvX1XbGPc11xZLKRza1zlfjbsxYSjcThlO2hMCYEjXz2o8niuK7eoLGVZR0kGs8FWU00HjAPGKud

CLIENT_URL=http://localhost:3000
}