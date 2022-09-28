package Utilities;
/**
 * This class held all the interaction with APIs
 * and keep test classes separate.
 * Using Enum for resource endpoints.
 */
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import PojoClasses.CustomDeserialiser;
import PojoClasses.Fcst;
import PojoClasses.Search;
import PojoClasses.Supply;
import cucumber.api.DataTable;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class EndPoints {
	
	//private ResourceEndpoints resEP;
	private static final String BASEURL = "http://localhost:8080";
	private Response res;
	private RequestSpecification reqSpec;
	private ResponseSpecification respSpec;
	
	public EndPoints(String url) {
		RestAssured.baseURI = url;
		reqSpec = new RequestSpecBuilder().setContentType(ContentType.JSON).build();
	}
	public IRestResponse<CustomDeserialiser> getFcst(Search srch) {
		
		res = reqSpec.body(srch).post(ResourceEndpoints.GETFCSTAPI.getRes()).then().assertThat()
				.statusCode(200).extract().response();
		return new RestResponse<>(CustomDeserialiser.class, res);
		
	}
	public IRestResponse<Supply> getSupply(Search srch) {
		
		res = reqSpec.body(srch).post(ResourceEndpoints.GETSUPPLYAPI.getRes()).then().assertThat()
				.statusCode(200).extract().response();
		return new RestResponse<>(Supply.class, res);
		
	}
	public void AddForecast(List<Fcst> fcstlist) {
		
		reqSpec.when().body(fcstlist).post(ResourceEndpoints.valueOf("ADDFCSTAPI").getRes())
				.then().extract().response();
	}
	
}
