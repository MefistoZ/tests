exports.config = {

  framework: 'jasmine',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['e2e/form_spec.js'],

  multiCapabilities: [
    {browserName: 'firefox'},
    {browserName: 'chrome'}]

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}
