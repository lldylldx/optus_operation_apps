Ext.define('MPT.view.CellAvail.Avail3GOverview', {
	extend: 'Ext.panel.Panel',
	xtype : 'avail3GOverview',
	requires: ['MPT.view.CellAvail.VHALeadAvail',
		'MPT.view.CellAvail.OptusLeadAvailWTarg',
		'MPT.view.CellAvail.TorAvailWTarg'
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
			title: '3G JV SPINOZA CELLS AVAILABILITY-OPUTS LEAD CELLS :',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.OptusLeadAvailWTarg');
					store.load();
				}
			}],
			items: [{
				xtype:'optusLeadAvailWTarg'}]
		},{
			xtype: 'panel',
			title: '3G JV SPINOZA CELLS AVAILABILITY-VHA LEAD CELLS :',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.VHALeadAvail');
					store.load();
				}
			}],
			items: [{
				xtype:'vhaLeadAvail'}]
		},{
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
				xtype:'torAvailWTarg'}]
		}]
	}]
});