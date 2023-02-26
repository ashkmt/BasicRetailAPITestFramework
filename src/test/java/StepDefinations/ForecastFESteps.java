package StepDefinations;
/**
 * Typical example of stepdefination class.
 * 2 points can be noted in its implementation.
 * 	a. Use of global variables for holding response, so that it will be available in all the methods.
 * 	b. Use of TestContext to avail the Endpoints instance in the test class, these classes were intialised
 * 		with TestContext using PicoContainer plugin.
 */
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import PojoClasses.CustomDeserialiser;
import PojoClasses.Fcst;
import PojoClasses.Search;
import Utilities.EndPoints;
import Utilities.IRestResponse;
import Utilities.TestContext;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class ForecastFESteps {

	private EndPoints ep;
	private IRestResponse response;
	private List<Fcst> fcstlist;
	
	public ForecastFESteps(TestContext testContext) {
			ep = testContext.getEndPoint();
			
			//comment in BRAFT0226
	}

	@Given("^Forecast data to Add$")
public void forecast_data_to_Add(DataTable forecastData) {
    // Write code here that turns the phrase above into concrete actions
    // For automatic transformation, change DataTable to one of
    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		fcstlist = new ArrayList<>();
	List<Map<Object, Object>> listOfFcstRec = forecastData.asMaps(Object.class, Object.class);
	for(Map<Object,Object> fcstRec:listOfFcstRec) {
		fcstlist.add(new Fcst(String.valueOf(fcstRec.get("item")), String.valueOf(fcstRec.get("loc")),
				Long.valueOf((String)fcstRec.get("date")), Long.valueOf((String)fcstRec.get("item"))));
	}
}





}
