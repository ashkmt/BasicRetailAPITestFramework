package Utilities;

import javax.management.RuntimeErrorException;

import io.restassured.response.Response;

public class RestResponse<T> implements IRestResponse<T>{

	private Response resp;
	private T data;
	private Exception e;
	
	public RestResponse(Class<T> t, Response resp) {
		this.resp = resp;
		try {
		this.data = t.getDeclaredConstructor().newInstance();
		}catch (Exception e) {
			throw new RuntimeException("There should be default"
					+ "constructor in response pojo");
		}
	}
	@Override
	public T getBody() {
		// TODO Auto-generated method stub
		return (T) resp.getBody().as(data.getClass());
		
	}

	@Override
	public int getStatusCode() {
		// TODO Auto-generated method stub
		return 0;
	}

}
