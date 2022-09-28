package StepDefinations;
/**
 * Typical example of stepdefination class.
 * 2 points can be noted in its implementation.
 * 	a. Use of global variables for holding response, so that it will be available in all the methods.
 * 	b. Use of TestContext to avail the Endpoints instance in the test class, these classes were intialised
 * 		with TestContext using PicoContainer plugin.
 */
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import PojoClasses.CustomDeserialiser;
import PojoClasses.Fcst;
import PojoClasses.Search;
import Utilities.EndPoints;
import Utilities.IRestResponse;
import Utilities.TestContext;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import junit.framework.Assert;

public class PlanAPITestStepDefinations {

private Search srch;
private IRestResponse res;
private EndPoints ep;
public PlanAPITestStepDefinations(TestContext testContext) {
	ep = testContext.getEndPoint();
}
@Given("^Search with parameters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
public void search_with_parameters(String item, String loc, long date, long duration) throws Throwable {
  
	srch = new Search(date,duration,item,loc);
	
}

@When("^user calls \"([^\"]*)\"$")
public void user_calls_with_http_request(String resource) throws Throwable {
	if(resource=="GETFCSTAPI") {
		res = ep.getFcst(srch);
	}
	else if(resource=="GETSUPPLYAPI") {
		res = ep.getFcst(srch);
	}
}

@Then("^the API call get success with \"([^\"]*)\" (\\d+)$")
public void the_API_call_get_success_with(String arg1, int arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	assertEquals(res.getStatusCode(), 200);
}

@Then ("Forecast Data returned")
public void data_returned(DataTable expectedResponseData) throws Throwable {
	  
	int index = 0;
	List<Fcst> fcstList = new ArrayList<>();
	List<Map<String,String>> expectedData = expectedResponseData.asMaps(String.class, String.class);
	for(Map<String,String> fcstMap:expectedData) {
		fcstList.add(new Fcst(fcstMap.get("item"),fcstMap.get("loc"),Long.valueOf(fcstMap.get("date")),Long.valueOf(fcstMap.get("duration"))));
	}
	
	IRestResponse<CustomDeserialiser> respData = res;
	for(Fcst f:fcstList) {
		assertEquals(f, respData.getBody().getFcstList().get(index++));
		
	}
	

}

@Then("Supply Data returned")
public void the_Data_returned(String kpi, DataTable kpiData) throws Throwable {
  
	int index = 0;
	List<Fcst> fcstList = new ArrayList<>();
	List<Map<String,String>> expectedData = kpiData.asMaps(String.class, String.class);
	for(Map<String,String> fcstMap:expectedData) {
		fcstList.add(new Fcst(fcstMap.get("item"),fcstMap.get("loc"),Long.valueOf(fcstMap.get("date")),Long.valueOf(fcstMap.get("duration"))));
	}
	
	IRestResponse<CustomDeserialiser> respData = res;
	for(Fcst f:fcstList) {
		assertEquals(f, respData.getBody().getFcstList().get(index++));
		
	}
	
}

}
