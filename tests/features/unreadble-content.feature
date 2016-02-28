Feature: Unreadable Content
  In order to reduce my stress levels
  As a person who is scared of rodents
  I want to never be forced to read content containing mice

  Scenario: cats chasing mice
    Given someone has written a post about their cat
    When i load that post
    Then i should be unable to read anything about mice
