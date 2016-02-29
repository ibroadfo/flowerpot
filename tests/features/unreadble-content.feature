Feature: Unreadable Content
  In order to reduce my stress levels
  As a person who is scared of rodents
  i want to never be forced to read content containing mice

  Scenario: cats chasing mice
    Given someone has written a post about their cat
    When i load that post
    Then i should be unable to read anything about mice

  Scenario: talking about my fears
    Given i am scared of mice
    And i want to talk about my fears
    When i write a post about my preteen rodent trauma
    Then it should be encoded so other people have a chance to avoid it

  Scenario: a fear i don't have
    Given someone has written a post about spiders
    And i am fine with spiders
    When i load that post
    And choose to see the decoded content
    Then i should be able to read the spidery post
