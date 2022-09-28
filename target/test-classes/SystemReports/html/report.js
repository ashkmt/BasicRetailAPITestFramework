$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PA_API_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Forecast Service testing",
  "description": "",
  "id": "forecast-service-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Searching Forecast.",
  "description": "",
  "id": "forecast-service-testing;searching-forecast.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Search with parameters \"\u003cDate\u003e\" \"\u003cDuration\u003e\" \"\u003cItem\u003e\" \"\u003clocation\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"getFcstAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call get success with \"Status\" 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"Forecast\" Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 9
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 10
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 11
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 12
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 13
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "forecast-service-testing;searching-forecast.;",
  "rows": [
    {
      "cells": [
        "Date",
        "Duration",
        "Item",
        "Location"
      ],
      "line": 18,
      "id": "forecast-service-testing;searching-forecast.;;1"
    },
    {
      "cells": [
        "261720000",
        "10800",
        "I1",
        "L1"
      ],
      "line": 19,
      "id": "forecast-service-testing;searching-forecast.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Searching Forecast.",
  "description": "",
  "id": "forecast-service-testing;searching-forecast.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Search with parameters \"261720000\" \"10800\" \"I1\" \"\u003clocation\u003e\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"getFcstAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call get success with \"Status\" 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"Forecast\" Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 9
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 10
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 11
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 12
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 13
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Searching Supply",
  "description": "",
  "id": "forecast-service-testing;searching-supply",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Search with \"\u003cDate\u003e\" \"\u003cDuration\u003e\" \"\u003cItem\u003e\" \"\u003cLocation\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user calls \"GetSupplyAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the API call get success with StatusCode 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the \"Supply\" Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 26
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 27
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 28
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 29
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "forecast-service-testing;searching-supply;",
  "rows": [
    {
      "cells": [
        "Date",
        "Duration",
        "Item",
        "Location"
      ],
      "line": 34,
      "id": "forecast-service-testing;searching-supply;;1"
    },
    {
      "cells": [
        "261720000",
        "10800",
        "I1",
        "L1"
      ],
      "line": 35,
      "id": "forecast-service-testing;searching-supply;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Searching Supply",
  "description": "",
  "id": "forecast-service-testing;searching-supply;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "Search with \"261720000\" \"10800\" \"I1\" \"L1\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user calls \"GetSupplyAPI\" with \"Post\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the API call get success with StatusCode 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the \"Supply\" Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 26
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 27
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 28
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 29
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 30
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});