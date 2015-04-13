Ext.define('MPT.view.CellAvail.Avail3GOverviewNMW', {
	extend: 'Ext.panel.Panel',
	xtype : 'avail3GOverviewNMW',
	requires: ['MPT.view.CellAvail.VHALeadAvailNMW',
		'MPT.view.CellAvail.OptusLeadAvailWTargNMW',
		'MPT.view.CellAvail.TorAvailWTargNMW'
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
			title: '3G JV SPINOZA CELLS AVAILABILITY-OPUTS LEAD CELLS (7-23):',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.OptusLeadAvailWTargNMW');
					store.load();
				}
			}],
			items: [{
				xtype:'optusLeadAvailWTargNMW'}]
		},{
			xtype: 'panel',
			title: '3G JV SPINOZA CELLS AVAILABILITY-VHA LEAD CELLS (7-23):',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.VHALeadAvailNMW');
					store.load();
				}
			}],
			items: [{
				xtype:'vhaLeadAvailNMW'}]
		},{
			xtype: 'panel',
			title: '3G CELLS AVAILABILITY-VHA ROAMING CELLS (7-23):',
			height: 380,
			//weight: 500,
			columnWidth: 1,
			padding: 10,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('MPT.store.CellAvail.Tor3GCellAvailNMW');
					store.load();
				}
			}],
			items: [{
				xtype:'torAvailWTargNMW'}]
		}]
	}]
});