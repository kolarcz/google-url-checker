# google-url-checker
Automated web site monitoring with Google Apps Script

## Instalation
1. go to your [Google Drive](https://drive.google.com/) and create new *Google Apps Script file*
2. open created file and over *"File > New > Script file"* insert scripts **main.gs** and **UrlChecker.class.gs** from this repository
3. in menu click on the *"Actual project starters (clock icon)"* and set: *"Run: main; Event: Driven by time - Minutes counter - Every 10 minutes"*
4. at last, go to your **main.gs** script and modify *url* and *email address*
5. from now will be every *10 minutes* checked the specified *url* and every time when *will not be available* or *change the http status* you'll receive an email

## Methods

### &lt;urlChecker_instance>.check(*watchedUrlAddress*, *notifyEmailAddress*)
Check specified *watchedUrlAddress* and if change availability or http status due to previous state notify you to *notifyEmailAddress*.
