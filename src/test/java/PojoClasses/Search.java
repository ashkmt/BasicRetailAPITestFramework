package PojoClasses;

public class Search {


	private long fromDate = 60l;
	private long duration = 0l;
	private String item;
	private String loc;
	
	public Search(long date,long duration, String item, String loc) {
		this.fromDate=date;
		this.duration=duration;
		this.item=item;
		this.loc=loc;
	}
	
	public long getFromDate() {
		return fromDate;
	}
	public void setFromDate(long fromDate) {
		this.fromDate = fromDate;
	}
	public long getDuration() {
		return duration;
	}
	public void setDuration(long duration) {
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

}
