# Serverless Freshservice to Freshdesk Ticketing App

## Objective
This serverless app automates the creation of tickets in Freshdesk whenever an incident is created in Freshservice. The integration aims to streamline ticket management across both platforms.

## Project Structure
After creating the app using the Freshdesk CLI (`fdk`), the project structure will look like this:

    .
    ├── README.md                  This file.
    ├── config                     Installation parameter configs.
    │   ├── iparams.json           Installation parameter config in English language.
    │   └── iparam_test_data.json  Installation parameter data for local testing.
    └── manifest.json              Project manifest.
    └── server                     Business logic for remote request and event handlers.
        ├── lib
        │   └── handle-response.js
        ├── server.js
        └── test_data
            ├── onTicketCreate.json
            └── onTicketUpdate.json
## Setup Instructions

### Step 1: Create a New Directory
First, create an empty directory for your app and navigate to it:
```bash
mkdir serverlessApp
cd serverlessApp
```
### Step 2:Create the App Using Freshdesk CLI
    
```bash
    fdk create
    #follow the prompts#

    ? Choose a product: freshservice
    ? Choose a template: your_first_serverless_app
```
### Step 3: Modify `manifest.json`
```
    "events": {
    "onTicketCreate": {
        "handler": "onTicketCreateHandler"
    }
}
```
### Step 4: Add Dependencies
```
    "dependencies": {
    "axios": "0.21.1"
}
```
### Step 5: Write Logic in server.js

### Step 6: Create iparams.json

```
    fdk generate
```
- Select iparams.json and follow the CLI instructions. The iparams.json file should look like this:
```
    {
    "url": {
        "display_name": "url",
        "description": "Please enter your url yourdomain.freshdesk.com",
        "type": "url",
        "required": true
    },
    "auth": {
        "display_name": "api-key",
        "description": "Please enter your api-key",
        "type": "api_key",
        "required": true,
        "type_attributes": {
            "product": "name of the product"
        },
        "secure": true
    }
}
```
alternatively you can create iparam.html for a more flexible installation page (created in the latest commit)
### Step 7: Pack the Application
```
fdk validate
fdk pack
```
This will generate a zip file in the /dist directory.

## Deployment
Refer [Freshworks Developer Docs](https://developers.freshworks.com/docs/app-sdk/v2.3/freshservice/app-submission-process/custom-apps/#upload,-test,-and-publish-a-new-custom-app)




Explore [more of app sample apps](https://community.developers.freshworks.com/t/freshworks-sample-apps/3604) on the Freshworks github respository.
