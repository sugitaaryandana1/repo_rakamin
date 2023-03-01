Feature: Unauthenticated user checkout program

    As Guest

  Scenario: Unauthenticated user checkout program
  Given User navigates to the VIX detail page
  When User click “Daftar Sekarang”
  Then User redirected to login page
  When User fill login credential and submit
  Then The system redirects user to VIX detail page
  And User continue to checkout following Scenario#1
  Given User navigates to the VIX detail page
  And User fill form application
  Then The system showing modal confirmation
  When User confirmed to continue
  Then The system redirect the user to checkout page
  And User choose  VIP Access
  Then The system redirect to payment page