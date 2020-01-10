//let homepage = require('../pages/homepage');
describe('demo calculator tests', function() {
//describe('Protractor Demo App', function() {
  it('addition test', function() {
   // it('should add one and two', function() {
        
      browser.get('https://juliemr.github.io/protractor-demo/');
      //homepage.get('https://juliemr.github.io/protractor-demo/');

      element(by.model('first')).sendKeys(2);
      //homepage.enterFirstNumber('4');

      element(by.model('second')).sendKeys(3);
      //homepage.enterSecondNumber('3');

      element(by.css('[ng-click="doAddition()"]')).click();
      //homepage.clickGo();

     let result = element(by.cssContainingText('.ng-binding','5'))
     expect(result.getText()).toEqual('5');
     //homepage.verifyResult('7');
    
      
      expect(element(by.binding('latest')).getText()).
         toEqual('5'); // This is wrong!


          browser.sleep(2000)
       

    });
  });