var _appl = {};

window.onbeforeunload = function(oEvent){
	for(var e in _appl){
		delete _appl[e];
	};
	delete _appl;
};

$().ready(function(){
	_appl.mainController = new controller();
	_appl.mainView = new view().createContent(_appl.mainController);
});