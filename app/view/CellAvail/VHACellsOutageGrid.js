Ext.Loader.setPath('Ext.ux', '../../extjs41/examples/ux');

Ext.require([
    'Ext.grid.RowNumberer',
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.LiveSearchGridPanel',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager'
]);

var filters = {
	ftype: 'filters',
	// encode and local configuration options defined previously for easier reuse
	encode: false, // json encode the filter query
	local: true,   // defaults to false (remote filtering)

	// Filters are most naturally placed in the column definition, but can also be
	// added here.
	filters: [{
		type: 'boolean',
		dataIndex: 'visible'
	}]
};

Ext.define('MPT.view.CellAvail.VHACellsOutageGrid', {
	//extend: 'Ext.grid.Panel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	xtype: 'vhaCellsOutageGrid',
	//require: '',
	//width: 600,
	title: 'VHA Cell Outage List (' + Ext.util.Format.date(new Date(),'d/m/Y') +')',	
	layout: 'fit',	
	loadMask: true,
	store: 'MPT.store.CellAvail.VHACellsOutage',
	viewConfig: {
		stripeRows: true,
		enableTextSelection: true
	},
	features: [filters],
	autoShow : true,
	columns: [
		Ext.create('Ext.grid.RowNumberer',{width:38}),
		{ header: 'RESULT_TIME', dataIndex: 'RESULT_TIME', flex:1 , filter:{},
			renderer: Ext.util.Format.dateRenderer('m/d/Y')},
		{ header: 'VENDOR', dataIndex: 'VENDOR', flex:1, filter:{} },
		{ header: 'WBTS_NUMBER', dataIndex: 'WBTS_NUMBER', flex:1  },
		{ header: 'WCEL_NAME', dataIndex: 'WCEL_NAME' , flex:3, filter: {} },
		{ header: 'OUTAGE_HOUR', dataIndex: 'OUTAGE_HOUR', flex:1  }
	],
	emptyText: 'No Matching Records',	
	initComponent: function() {
		Ext.getStore('MPT.store.CellAvail.VHACellsOutage').load();		
		this.callParent(arguments);
	}	
});