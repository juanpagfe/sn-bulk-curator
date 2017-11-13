# A Social Network Feed Curator

This tool is for deleting thousands of publications in social networks after they no longer mean anything or simply because we want to clean a bit our feeds.  Is a curator with mass delete option. It is developed with NodeJS.

## Getting started

To run this project follow this steps:

### Step 0: Twitter App
You need to [create a Twitter app](https://apps.twitter.com/app/new) and get the Consumer Key and Secret by clicking "Manage keys and access tokens" link.

### Step 1: Access Token
Create an Access Token and Secret associated with you.  You can get them on the same page.

### Step 2: Clone and Install Dependencies
Clone this repo and install dependencies using `npm install`.

### Step 3: .env
Inside the repository directory create a `.env` file and wrte your Twitter information in it as:

```
CONSUMER_KEY=...
CONSUMER_SECRET=...
ACCESS_TOKEN=...
ACCESS_TOKEN_SECRET=...
TWITTER_USERNAME=...
```

### Step 4: Run
Now you are ready to run `npm start` whenever you like and you'll have a server running on port 2337.  You can change the default port adding a line with `PORT=...` in your `.env` file.

## Contributions
If you want to improve this project, please fork, make the necessary changes, and create a pull request so I can review your changes and merge them into the master repo and branch.

## Authors

**Juan Pablo Garcia** - *Software Engineer* - [juanpagfe](https://github.com/juanpagfe)

## License

This repository is Licensed under [GPLv2](LICENSE).