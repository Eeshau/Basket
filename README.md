# Basket
React chrome extension. One shopping cart for all your shopping. Organize items by store and make your own lists. Add notes and monitor prices for each item. 

No data is stored on a external database. All data is stored locally using chrome.storage.local.
<img width="1226" alt="Extension" src="https://user-images.githubusercontent.com/54783383/147838680-d69bbb21-5aa2-4698-9e63-859b7457392b.png">




<h2>Playing around with it </h2>

npm run build

1. Go to chrome://extensions/ or click on the puzzle icon next to your extensions.

2. Turn on developer mode
<img width="157" alt="Screenshot 2021-12-31 at 3 58 04 PM" src="https://user-images.githubusercontent.com/54783383/147838821-1095355a-9d14-4325-870a-0ad0011ac6cf.png">

3. Load unpacked, then upload the build folder.
<img width="871" alt="Screenshot 2021-12-31 at 3 58 27 PM" src="https://user-images.githubusercontent.com/54783383/147838830-e42ed9c2-5461-4749-8b32-be41bd0ec4fc.png">

4. Click on the basket icon in the tool bar.

<h2>Next steps</h2>
Will be working on adding functionality to update prices from the sites and autofill the image and other data -at the moment the product name, store and url are only autofilled. 
When adding an item the lists section uses a datalist, in a normal non-popup window it works fine but Chrome has a bug for popup windows. Hopefully get's resolved soon or I might just could a seperate component. https://bugs.chromium.org/p/chromium/issues/detail?id=161302 







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
