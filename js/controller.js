function controller(){
	var that = this;
	that._place = "content";
	that.getPlace = function(){
		return that._place;
	};
	that.showMenu = function(){
		this.setShowPane(!this.getShowPane());
	};
};