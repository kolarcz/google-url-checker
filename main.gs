function main() {
  var urlChecker = new UrlChecker();
  urlChecker.check('http://watched.url.address', 'your@email.address');
  urlChecker.check('http://watched.url.address2', 'your@email.address', 'cookie1=value1');
}
