autoGenerateUser = function() {
	//function for create random User
        var autoGenerateUser = "someUser";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 3; i++)
            autoGenerateUser += possible.charAt(Math.floor(Math.random() * possible.length));
        return  autoGenerateUser;
    };

describe('Testing registration form from github', function() {
	var randUser = autoGenerateUser() 

	var userLogin = element(by.name('user[login]'));           //field login
	var userEmail = element(by.name('user[email]'));           //field email
	var userPassword = element(by.name('user[password]'));     //field pasword
	var button = element(by.className('my-3'));                //submit button


	beforeEach(function(){
		browser.waitForAngularEnabled(false);
    	browser.get('https://github.com/');
	});

  it('Tests form', function() {

    userLogin.sendKeys(randUser);
    userEmail.sendKeys(randUser+'@gmail.com');
    userPassword.sendKeys('Pas'+randUser+'sworD');

    button.click();

	browser.driver.wait(function() {
	       return browser.driver.getCurrentUrl().then(function(url){
	           return (/join/).test(url);
	       });
	     });

	   expect(browser.getCurrentUrl()).toContain('https://github.com/join');
	});
});