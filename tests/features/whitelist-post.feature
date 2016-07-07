Feature: Whitelist a post that's been falsely reported
  In order to reduce reviewer time requirements
  As an abuse reviewer
  I want to be able to whitelist a post
  So that it is no longer listed under the abuse report screen

  Scenario: a post about rabbits
    Given someone has written a post about their rabbit
    And another person has falsely reported that post
    When I mark the post as whitelisted
    Then it should no longer appear on the abuse reports screen
