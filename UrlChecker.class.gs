function UrlChecker() {
  this.scriptProperties_ = PropertiesService.getScriptProperties();
}

UrlChecker.prototype = {

  getKey_: function (forUrl, forMail) {
    return JSON.stringify([forUrl, forMail]);
  },

  getLastState_: function (forUrl, forMail) {
    var key = this.getKey_(forUrl, forMail);
    return this.scriptProperties_.getProperty(key);
  },

  setLastState_: function (forUrl, forMail, state) {
    var key = this.getKey_(forUrl, forMail);
    return this.scriptProperties_.setProperty(key, state);
  },

  getUrlState_: function (url) {
    try {
      return UrlFetchApp.fetch(url, {
        muteHttpExceptions: true,
        followRedirects: false
      }).getResponseCode();
    }
    catch (e) {
      return 'down';
    }
  },

  check: function (url, mail) {
    var lastState = this.getLastState_(url, mail);
    var actualState = this.getUrlState_(url);

    if (actualState != lastState) {
      MailApp.sendEmail(mail, 'Url: ' + url + ' (' + actualState + ')', '');
      this.setLastState_(url, mail, actualState);
    }

    return true;
  }

};
