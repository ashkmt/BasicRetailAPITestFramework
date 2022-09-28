# BasicRetailAPITestFramework
An API test automation framework using Cucumber- RestAssured.
1. Separate the API layer from steps i.e. all the interaction with Endpoints were seggregated in a ep.class.
2. A generic interface having methods for evaluating response, every response will be wrapped into this type and returned to StepDefination methods. 
3. A TestContext class is created and every StepDefination file is intialised with it using Pico-Container.
4. Enum holds all the resource endpoints, which will be called in Endpoint class for hitting the resource endpoints.
5. Putting BaseURL and requestSpec in constructor saves these field to initialise in every method for API calls.
