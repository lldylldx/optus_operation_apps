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

var store_STATE = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: 'myState',
		reader: 'array'
	}
});

Ext.onReady( function() {

	Ext.QuickTips.init();

	var encode = false;
	var local = true;

	Ext.ux.ajax.SimManager.init({
		delay: 300,
		defaultSimlet: null
	}).register({		
		'myState': {
			data: [ ['NSW', 'NSW'],['VIC','VIC'],['QLD','QLD'],['SANT','SANT'],['WA','WA'] ],
			stype: 'json'
		}
	});
	
});
Ext.define('MPT.view.LTE.NSNLteCellUnavailDailyGrid', {
	extend: 'Ext.grid.Panel',
	//extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.nsnLteCellUnavailDailyGrid',
	title: 'NSN LTE Daily Cell Unavailable list',
	layout: 'fit',	
	loadMask: true,
	store: 'MPT.store.LTE.NSNLteCellDailyUnavails',
	dockedItems: [{
		dock: 'top',
		xtype: 'toolbar',
		items: [{
			text: 'Refresh',
			handler: function(){
				Ext.getStore('MPT.store.LTE.NSNLteCellDailyUnavails').load();
			}			
		}]
	}],
	viewConfig: {
		stripeRows: true,
		enableTextSelection: true
	},
	features: [filters],
	autoShow : true,
	columns: [
		Ext.create('Ext.grid.RowNumberer',{width:28}),
		{ header: 'TIME', dataIndex: 'RECORD_TIME', flex:1 , filter:{}, renderer: Ext.util.Format.dateRenderer('m/d/Y') },		
		{ header: 'CELL_NAME', dataIndex: 'CELL_NAME' , flex:1, filter: {} },
		{ header: 'UNAVAIL_HOURS', dataIndex: 'UNAVAIL_SECONDS' , flex:1, filter: {}, 
				renderer: function(value) {
					return Ext.util.Format.round(value/3600, 2);
				}
		},
		{ header: 'STATE', dataIndex: 'STATE', flex:1 , filter:{type:'list', store: store_STATE} }
	],
	emptyText: 'No Matching Records',
	
	initComponent: function() {
		Ext.getStore('MPT.store.LTE.NSNLteCellDailyUnavails').load();		
		this.callParent(arguments);
	}	
});