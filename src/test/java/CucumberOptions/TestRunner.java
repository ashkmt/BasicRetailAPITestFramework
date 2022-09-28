package CucumberOptions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Feature1/ForecastFEAPI.feature",
				 glue = "StepDefinations",
				 dryRun = false,
				 plugin = {"pretty","html:SystemReports/html",
						 "json:SystemReports/json",
						 "junit:SystemReports/junit"})
	public class TestRunner {
	
}
