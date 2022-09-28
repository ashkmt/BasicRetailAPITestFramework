Feature: Forecast FE operations testing.

Scenario Outline: Verify Add operation on ForecastFE page.
Given Forecast data to Add
|item|loc  |date	 	|quantity	|
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
When user calls "AddFcstAPI"
Then the API call get success with "Status" 200
When Search with parameters "<Date>" "<Duration>" "<Item>" "<location>"
And user calls "GetFcstAPI"
Then Forecast Data returned 
|item|loc  |date	 |quantity	|
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |
|I1  |Loc1 |261720000| 10     |

Examples:
|Date     |Duration|Item|Location|
|261720000|10800   |I1  |L1      |


