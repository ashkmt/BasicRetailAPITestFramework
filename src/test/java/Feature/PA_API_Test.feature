Feature: Forecast Service testing

Scenario Outline: Searching Forecast.

Given Search with parameters "<Date>" "<Duration>" "<Item>" "<location>"
When user calls "GETFCSTAPI"
Then the API call get success with "Status" 200
And Forecast Data returned 
|item|loc  |date	 	 |quantity|
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |

 
Examples:
|Date     |Duration|Item|Location|
|261720000|10800   |I1  |L1      |

Scenario Outline: Searching Supply
Given Search with "<Date>" "<Duration>" "<Item>" "<Location>"
When user calls "GETSUPPLYAPI"
Then the API call get success with "Status" 200
And Supply Data returned
|item|loc  |date	 |quantity|
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |

Examples:
|Date     |Duration|Item|Location|
|261720000|10800   |I1  |L1      |