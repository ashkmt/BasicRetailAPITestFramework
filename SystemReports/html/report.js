$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/APITestLearn/APITestArch/Feature/ForecastFEAPITest.feature");
formatter.feature({
  "line": 1,
  "name": "Forecast FE operations testing.",
  "description": "",
  "id": "forecast-fe-operations-testing.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify Add operation on ForecastFE page.",
  "description": "",
  "id": "forecast-fe-operations-testing.;verify-add-operation-on-forecastfe-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Forecast data to Add",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 5
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 6
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 7
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
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
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user calls \"AddFcstAPI\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the API call get success with \"Status\" 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Search with parameters \"\u003cDate\u003e\" \"\u003cDuration\u003e\" \"\u003cItem\u003e\" \"\u003clocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user calls \"GetFcstAPI\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Forecast Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 16
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 18
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 19
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 20
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "forecast-fe-operations-testing.;verify-add-operation-on-forecastfe-page.;",
  "rows": [
    {
      "cells": [
        "Date",
        "Duration",
        "Item",
        "Location"
      ],
      "line": 24,
      "id": "forecast-fe-operations-testing.;verify-add-operation-on-forecastfe-page.;;1"
    },
    {
      "cells": [
        "261720000",
        "10800",
        "I1",
        "L1"
      ],
      "line": 25,
      "id": "forecast-fe-operations-testing.;verify-add-operation-on-forecastfe-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Verify Add operation on ForecastFE page.",
  "description": "",
  "id": "forecast-fe-operations-testing.;verify-add-operation-on-forecastfe-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Forecast data to Add",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 5
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 6
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 7
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 8
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
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
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user calls \"AddFcstAPI\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the API call get success with \"Status\" 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Search with parameters \"261720000\" \"10800\" \"I1\" \"\u003clocation\u003e\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user calls \"GetFcstAPI\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Forecast Data returned",
  "rows": [
    {
      "cells": [
        "item",
        "loc",
        "date",
        "quantity"
      ],
      "line": 16
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 17
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 18
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 19
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 20
    },
    {
      "cells": [
        "I1",
        "Loc1",
        "261720000",
        "10"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});