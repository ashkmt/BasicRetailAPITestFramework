package Utilities;

public class TestContext {

	private EndPoints ep;
	private final String BASEURL = "http://localhost:8080";
	
	public TestContext(EndPoints ep) {
		this.ep = new EndPoints(BASEURL);
	}
	
	public EndPoints getEndPoint() {
		return this.ep;
	}
}
