function UrlChecker() {
  this.scriptProperties_ = PropertiesService.getScriptProperties();
}

UrlChecker.prototype = {

  getKey_: function (forUrl, forMail, forCookies) {
    return JSON.stringify([forUrl, forMail, forCookies]);
  },

  getLastState_: function (forUrl, forMail, forCookies) {
    var key = this.getKey_(forUrl, forMail, forCookies);
    return this.scriptProperties_.getProperty(key);
  },

  setLastState_: function (forUrl, forMail, forCookies, state) {
    var key = this.getKey_(forUrl, forMail, forCookies);
    return this.scriptProperties_.setProperty(key, state);
  },

  getUrlState_: function (url, cookies) {
    try {
      return UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        followRedirects: false,
        headers: {
          Cookie: cookies || ''
        }
      }).getResponseCode();
    }
    catch (e) {
      return 'down';
    }
  },

  check: function (url, mail, cookies) {
    var lastState = this.getLastState_(url, mail, cookies);
    var actualState = this.getUrlState_(url, cookies);

    if (actualState != lastState) {
      MailApp.sendEmail(mail, 'Url: ' + url + ' (' + actualState + ')', '');
      this.setLastState_(url, mail, cookies, actualState);
    }

    return true;
  }

};
