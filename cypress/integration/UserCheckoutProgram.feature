Feature: Authenticated user checkout program (user already logged in)

    as member

  Scenario: Authenticated user checkout program (user already logged in)
  Given User navigates to the VIX detail page
  And User fill form application
  Then The system showing modal confirmation
  When User confirmed to continue
  Then The system redirect the user to checkout page
  And User choose  VIP Access
  Then The system redirect to payment page