package PojoClasses;

import java.util.ArrayList;
import java.util.List;


public class CustomDeserialiser {

	private List<Fcst> FcstList = new ArrayList<Fcst>();
	private List<Supply> supplyList = new ArrayList();
	

	public List<Fcst> getFcstList() {
		return FcstList;
	}

	public void setFcstList(List<Fcst> fcstList) {
		FcstList = fcstList;
	}

	public List<Supply> getSupplyList() {
		return supplyList;
	}

	public void setSupplyList(List<Supply> supplyList) {
		this.supplyList = supplyList;
	}
	
	
	
}
