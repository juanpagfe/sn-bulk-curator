# A Social Network Feed Curator

This tool is for deleting thousands of publications in social networks after they no longer mean anything or simply because we want to clean a bit our feeds.  Is a curator with mass delete option. It is developed with NodeJS.

#### IMPORTANT: As Facebook only allows apps to delete posts on managed pages, so with this software you CAN'T delete any posts on your own feed.


## Getting started

To run this project follow this steps:

### Step 0: Social Network Apps

Create required social network apps

#### Twitter
You need to [create a Twitter app](https://apps.twitter.com/app/new) and get the Consumer Key and Secret by clicking "Manage keys and access tokens" link. Then create an Access Token and Secret associated with you.  You can get them on the same page.

#### Facebook
You need to [create a Facebook app](https://developers.facebook.com/apps/) and get the Application ID and Secret Key. Then [get an Access Token and Secret](https://developers.facebook.com/tools/explorer/) associated with you and your managed page.

### Step 1: Clone and Install Dependencies
Clone this repo and install dependencies using `npm install`.

### Step 2: .env
Inside the repository directory create a `.env` file and wrte your Twitter information in it as:

```
TW_CONSUMER_KEY=...
TW_CONSUMER_SECRET=...
TW_ACCESS_TOKEN=...
TW_ACCESS_TOKEN_SECRET=...
TW_USERNAME=...

FB_APP_ID=...
FB_APP_SECRET=...
FB_PAGE_ID=...
FB_PAGE_TOKEN=...
FB_ACCESS_TOKEN=...
```

### Step 3: Run
Now you are ready to run `npm start` whenever you like and you'll have a server running on port 2337.  You can change the default port adding a line with `PORT=...` in your `.env` file.

## Contributions
If you want to improve this project, please fork, make the necessary changes, and create a pull request so I can review your changes and merge them into the master repo and branch.

## Authors

**Juan Pablo Garcia** - *Software Engineer* - [juanpagfe](https://github.com/juanpagfe)

## License

This repository is Licensed under [GPLv2](LICENSE).
