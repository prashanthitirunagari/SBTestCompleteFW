Feature: LoginFeature

  Background:
    Given user clicks on login button from home page

  @Smoke  
  Scenario Outline: user should not be able to Login to the application with wrong credentials
    When user choose product as "<product>"
    When user provides login details username "<username>" and pwd "<password>"
    Then user should be not able to login successfully
    
    Examples:
    |username     |password|product            |
    |abc@gmail.com|   xyz  |CrossBrowserTesting|
    
    @Regression1
    Scenario Outline: Login to the application random check
    When user choose product as "<product>"
    When user provides login details username "<username>" and pwd "<password>"
    Then user should be able to login successfully
    
    Examples:
    |username     |password|product            |
    |abc@gmail.com|   xyz  |CrossBrowserTesting|
    
    
      @Regression
    Scenario: Random check
    When user choose product as "<product>"
