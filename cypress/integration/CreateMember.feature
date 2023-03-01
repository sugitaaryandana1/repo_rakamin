Feature: Create New Member Midtrans

    as new member

  Scenario: New Member
  Given I open page midtrans
  When I submit signup button
  Then I Input all field in form registration
  And I submit register