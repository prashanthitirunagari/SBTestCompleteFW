//USEUNIT ProjectUtils

let browser=Aliases.browser;

function chooseProductInLoginPage(productName){
  if(productName == "CrossBrowserTesting")
    browser.HomePage.textnodeCrossbrowsertesting.Click();
}

function enterLoginDetails(username, password){
  browser.LoginPage.textboxEmailAddress.SetText(username);
  browser.LoginPage.passwordboxPassword.SetText(password);
  browser.LoginPage.buttonLoginBtn.Click();
}

function verifyLoginUnSuccessful(){
   browser.LoginPage.Wait();
   aqObject.CheckProperty(browser.LoginPage.panelInvalidUsernameAndPassword, "contentText", cmpContains, "Invalid username and password combination");
}