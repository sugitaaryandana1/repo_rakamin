Feature: Login Midtrans

    Forgot Password

  Scenario: Resend Confirm Instruction
  Given I open page midtrans
  When I Resend Confirm Intrustruction
  Then I input email address
  And I submit Send Link