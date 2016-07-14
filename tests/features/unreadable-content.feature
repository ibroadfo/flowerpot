Feature: Unreadable Content
  In order to reduce my stress levels
  As a person who suffers from a phobia
  i want to never be forced to read content containing that phobia

  Scenario: a rare phobia
    Given someone has written a post about their pets
    When i load that post
    Then i should be unable to read anything about my phobia

  Scenario: talking about my fears
    Given i suffer from a specific phobia
    And i want to talk about my fears
    When i write a post about the origins of my fears
    Then it should be encoded so other people have a chance to avoid it

  Scenario: a fear i don't have
    Given someone has written a post about their rare phobia
    And i do not suffer from the same phobia
    When i load that post
    And choose to see the decoded content
    Then i should be able to read the full post
