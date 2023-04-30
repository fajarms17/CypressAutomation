Feature: Outgoing Payment

    IBRA AR

    Scenario: Login as a Cashier
    Given I open star website
    When I login with valid email and password
        |email                      |password     |
        |tstcsr01a000@ai.astra.co.id|BatuKali@1102|
    Then Validate username 