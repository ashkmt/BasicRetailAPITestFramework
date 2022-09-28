package PojoClasses;

public class Supply {

	private String item;
	private String loc;
	private long date;
	private long duration;
	
	public Supply(String item, String loc, long date, long duration) {

		this.item = item;
		this.loc = loc;
		this.date = date;
		this.duration = duration;
	
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getLoc() {
		return loc;
	}

	public void setLoc(String loc) {
		this.loc = loc;
	}

	public long getDate() {
		return date;
	}

	public void setDate(long date) {
		this.date = date;
	}

	public long getDuration() {
		return duration;
	}

	public void setDuration(long duration) {
		this.duration = duration;
	}
}
