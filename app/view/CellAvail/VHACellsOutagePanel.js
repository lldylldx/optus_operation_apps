Ext.define('MPT.view.CellAvail.VHACellsOutagePanel', {
	extend: 'Ext.panel.Panel',
	xtype : 'vhaCellsOutagePanel',
	requires: ['MPT.view.CellAvail.VHACellsOutageForm',
		'MPT.view.CellAvail.VHACellsOutageGrid'
	],
	layout: 'column',
	autoScroll:true,
	border : false,
	items: [{
		xtype: 'panel',
		height: 80,
		border : false,
		columnWidth: 1,
		padding: 5,
		layout: 'fit',
		items: [{
			xtype: 'vhaCellsOutageForm'
		}]			
	},{
		xtype: 'panel',
		height: 740,
		border : false,
		columnWidth: 1,
		padding: 2,
		layout: 'fit',
		items: [{
			xtype: 'vhaCellsOutageGrid'
		}]
	}]

});