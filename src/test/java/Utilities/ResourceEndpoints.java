package Utilities;
/**
 * 
 * @author ashish
 * The Enum holds all the Resources Endpoints.
 */
public enum ResourceEndpoints {
	ADDFCSTAPI("addFcstAPI"),
	GETFCSTAPI("/getFcstAPI"),
	GETSUPPLYAPI("/getSupplyAPI");
	
	private String res;
	
	ResourceEndpoints(String res) {
		this.res = res;
	}
	
	public String getRes() {
		return res;
	}
	
}
