Feature: Login Midtrans

    Forgot Password

  Scenario: Forgot Password
  Given I open page midtrans
  When I reset password
  Then I input email address
  And I submit Send Link