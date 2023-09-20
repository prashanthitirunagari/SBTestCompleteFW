Feature: Addition

  @smoke @Regression
  Scenario: Entering 2 numbers and adding them
    When user enters digit "7"
    And user clicks on operator "+"
    And user enters digit "3"
    And user clicks on operator "="
    Then validate the result
    
    @Regression
  Scenario: Entering 2 diff numbers and adding them
    When user enters digit "7"
    And user clicks on operator "+"
    And user enters digit "3"
    And user clicks on operator "="
    Then validate the result
    
   @Regression
  Scenario Outline: adding 2 numbers through examples
    When user enters digit "<number1>"
    And user clicks on operator "<operator>"
    And user enters digit "<number2>"
    And user clicks on operator "="
    Then validate the result is as "<expectedOutcome>"
    
    Examples:
    |number1|number2|operator|expectedOutcome|
    |7      |      3|      + |    10          |
    |8      |      3|      + |    11          |
    
    
    
    
    