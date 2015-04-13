Ext.define('MPT.view.CellAvail.NSWBushfireOverview', {
	extend: 'Ext.panel.Panel',
	xtype : 'nswBushfireOverview',
	requires: ['MPT.view.CellAvail.NSWBushfireAvail',
		'MPT.view.CellAvail.NSWBushfireAvail2G'
	],
	//activeTab : 0,
	//enableTabScroll : true,
	//animScroll : true,
	layout: 'fit',
	autoScroll:true,
	border : false,
	items: [{
		xtype: 'panel'
		,autoScroll : true
		,layout: 'column'
		,items: [{
			xtype: 'panel',
			title: 'NSW Bushfire Cells Daily Availability (3G) :',
			height: 460,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.NSWBushfireAvail');
					store.load();
				}
			}],
			items: [{
				xtype:'nswBushfireAvail'}]
		},{
			xtype: 'panel',
			title: 'NSW Bushfire Cells Daily Availability (2G) :',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.NSWBushfireAvail2G');
					store.load();
				}
			}],
			items: [{
				xtype:'nswBushfireAvail2G'}]
		/*},{
			xtype: 'panel',
			title: '3G CELLS AVAILABILITY-VHA ROAMING CELLS :',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.Tor3GCellAvail');
					store.load();
				}
			}],
			items: [{
				xtype:'torAvailWTarg'}]*/
		}]
	}]
});