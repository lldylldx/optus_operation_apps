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

var store_KPI = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: 'myKPIs',
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
			data: [ ['NSW', 'NSW'],['VIC','VIC'],['QLD','QLD'],['SA','SA'],['WA','WA'],['NT','NT'],['TAS','TAS'] ],
			stype: 'json'
		},		
		'myKPIs' : {
			data: [['RRC','RRC'],['ERAB','ERAB'],['ERAB_DROP','ERAB_DROP']],
			stype: 'json'
		}
	});
	
});
Ext.define('MPT.view.LTE.HUAWEILTETailsReport', {
	//extend: 'Ext.grid.Panel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.huaweiLteTailsReport',
	//require: '',
	title: 'HUAWEI LTE Daily Tail Cells Report',
	//uses: [],
	layout: 'fit',	
	loadMask: true,
	store: 'MPT.store.LTE.HUAWEILTETailsReport',
	dockedItems: [{
		dock: 'top',
		xtype: 'toolbar',
		items: [{
			text: 'Refresh',
			handler: function(){
				Ext.getStore('MPT.store.LTE.HUAWEILTETailsReport').load();
			}
			},{
			text: 'Download',
			handler: function(){
				window.open("http://slagnpappl001.optus.com.au/datawarehouse/huawei_lte_tails_d", "_blank");	
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
		{ header: 'SITE_NAME', dataIndex: 'SITE_NAME' , flex:3, filter: {} },
		{ header: 'CELL_NAME', dataIndex: 'CELL_NAME', flex:3,  filter: {} },
		{ header: 'TRIG_TYPE', dataIndex: 'TRIG_TYPE', flex:1 , filter:{} },
		{ header: 'OCCUR In 30 days', dataIndex: 'OCCUR30' , flex:1, filter: {} },
		{ header: 'OCCUR In 7 days', dataIndex: 'OCCUR7' , flex:1, filter: {} },
		{ header: 'STATE', dataIndex: 'STATE', flex:1 , filter:{type:'list', store: store_STATE} }
	],
	emptyText: 'No Matching Records',
	
	initComponent: function() {
		Ext.getStore('MPT.store.LTE.HUAWEILTETailsReport').load();		
		this.callParent(arguments);
	}	
});