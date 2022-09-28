package Utilities;
/**
 * 
 * @author ashish
 * This is the generic interface for wrapping different types of responses.
 * @param <T>
 */
public interface IRestResponse<T> {

	public T getBody();
	public int getStatusCode();
}
