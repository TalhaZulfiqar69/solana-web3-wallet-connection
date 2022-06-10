# Getting Started with Solana Wallet Connection

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Clone the repository and just run the following commands to run the application:

### `npm install`

After running the npm dependencies successfully just run the following command to start application:

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If you get issues like `stream` and `crypto` etc, just do the following stuff to overcome the issue.

go to the following file in `node_modules`, the path of file is here `node_modules/react-scripts/config/weback.config.js`

Open up the file and just paste the following instructions on line `#305` inside the `resolve` object `fallback: { crypto: false, stream: false },` and restart development server.
