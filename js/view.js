jQuery.sap.require("sap.ui.core.IconPool");  
function view(){
	var that = this;
	
	that.createContent = function(oController){
		var oShell = new sap.ui.unified.Shell("shell",{
			searchVisible:true,
			icon:"http://www.sberbank-cib.ru/v3/img/logo/cib_logo.gif",
		});
		oShell.setSearch(new sap.m.SearchField({
			placeholder:"Search...",
			
		}));
		oShell.setUser(new sap.ui.unified.ShellHeadUserItem({
			image: sap.ui.core.IconPool.getIconURI("account"),
			username:"Ivanov Ivan Ivanovich",			
		}));
		oShell.addHeadItem(new sap.ui.unified.ShellHeadItem({
			icon:sap.ui.core.IconPool.getIconURI("menu2"),
			press: jQuery.proxy(oController.showMenu,oShell),
		}));		
		
		
		var oTileCont = new sap.m.TileContainer({height:"50%"});
		oTileCont.addTile(new sap.m.StandardTile({title:"Test1"}));
		oTileCont.addTile(new sap.m.StandardTile({title:"Test2"}));
		oTileCont.addTile(new sap.m.StandardTile({title:"Test3"}));
		oTileCont.addTile(new sap.m.StandardTile({title:"Test4"}));

		var oTileCont1 = new sap.m.TileContainer({height:"50%"});
		oTileCont1.addTile(new sap.m.StandardTile({title:"Test1"}));
		oTileCont1.addTile(new sap.m.StandardTile({title:"Test2"}));
		oTileCont1.addTile(new sap.m.StandardTile({title:"Test3"}));
		oTileCont1.addTile(new sap.m.StandardTile({title:"Test4"}));
		
		//oShell.addContent(oTileCont);
		var oPage = new sap.m.Page({
			showHeader:false,
			enableScrolling:false,
			content:[
			new sap.m.Title({text:"My requests", titleStyle:sap.ui.core.TitleLevel.H4}).addStyleClass("blockTitle"),
			oTileCont,
			new sap.m.Title({text:"Others", titleStyle:sap.ui.core.TitleLevel.H4}).addStyleClass("blockTitle"),
			oTileCont1,
			
			]
			});
		oShell.addContent(oPage);
		oShell.placeAt(oController.getPlace());
	}	
}