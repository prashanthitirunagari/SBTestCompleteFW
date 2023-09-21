let browser;
//USEUNIT ProjectUtils
//USEUNIT LoginPage


Given("user clicks on login button from home page", function (){
  clickLogin();
});

When("user choose product as {arg}", function (productName){
      chooseProductInLoginPage(productName);
});

When("user provides login details username {arg} and pwd {arg}", function (username, password){
  enterLoginDetails(username,password);  
});

Then("user should be able to login successfully", function (){
  Log.Message("then");
});



Then("user should be not able to login successfully", function (){
  verifyLoginUnSuccessful();

});
