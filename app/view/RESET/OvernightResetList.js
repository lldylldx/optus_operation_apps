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

var store_RC = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: 'myRC',
		reader: 'array'
	}
});

var store_STATE = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: 'myState',
		reader: 'array'
	}
});

var store_RNC = Ext.create('Ext.data.Store', {
	fields: ['id', 'text'],
	proxy: {
		type: 'ajax',
		url: 'myRNCs',
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
		'myRC': {
			data: [ ['RC1', 'RC1'],['RC2','RC2'],['RC3','RC3'], ['RC4','RC4'] ],
			stype: 'json'
		},
		'myState': {
			data: [ ['NSW', 'NSW'],['VIC','VIC'],['QLD','QLD'],['SANT','SANT'],['WA','WA'] ],
			stype: 'json'
		},
		'myRNCs' : {
			data: [ ['22BJ_MRNC00','22BJ_MRNC00'],
					['22BJ_ORNC01','22BJ_ORNC01'],
					['22BT_MRNC01','22BT_MRNC01'],
					['22BT_MRNC05','22BT_MRNC05'],
					['22BT_ORNC02','22BT_ORNC02'],
					['22BT_ORNC03','22BT_ORNC03'],
					['22BT_ORNC06','22BT_ORNC06'],
					['22RR_MRNC01','22RR_MRNC01'],
					['22RR_MRNC02','22RR_MRNC02'],
					['22RR_MRNC05','22RR_MRNC05'],
					['22RR_ORNC00','22RR_ORNC00'],
					['22RR_ORNC03','22RR_ORNC03'],
					['22RR_ORNC04','22RR_ORNC04'],
					['33EB_MRNC00','33EB_MRNC00'],
					['33EB_MRNC03','33EB_MRNC03'],
					['33EB_ORNC01','33EB_ORNC01'],
					['33EB_ORNC04','33EB_ORNC04'],
					['33VS_MRNC01','33VS_MRNC01'],
					['33VS_MRNC02','33VS_MRNC02'],
					['33VS_MRNC03','33VS_MRNC03'],
					['33VS_ORNC00','33VS_ORNC00'],
					['33VS_ORNC04','33VS_ORNC04'],
					['33VS_ORNC05','33VS_ORNC05'],
					['44RD_MRNC00','44RD_MRNC00'],
					['44RD_ORNC01','44RD_ORNC01'],
					['O4MO_MRNC00','O4MO_MRNC00'],
					['O4MO_MRNC01','O4MO_MRNC01'],
					['O4MO_MRNC02','O4MO_MRNC02'],
					['O4MO_MRNC03','O4MO_MRNC03'],
					['O5RX_MRNC00','O5RX_MRNC00'],
					['O5RX_MRNC01','O5RX_MRNC01'],
					['O6LX_MRNC00','O6LX_MRNC00'],
					['O6LX_MRNC01','O6LX_MRNC01'],
					['O6LX_MRNC03','O6LX_MRNC03']
				],
			stype: 'json'
		},
		'myKPIs' : {
			data: [['RRC','RRC'],['HSUPA','HSUPA'],['HSDPA','HSDPA']],
			stype: 'json'
		}
	});
	
});
Ext.define('MPT.view.RESET.OvernightResetList', {
	//extend: 'Ext.grid.Panel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.overnightResetList',
	//require: '',
	title: 'NSN 3G Overnight Reset List (' + Ext.util.Format.date(new Date(),'d/m/Y') +')',
	//uses: [],
	layout: 'fit',
	multiSelect: true,	
	store: 'MPT.store.RESET.OvernightResetSites',
	viewConfig: {
		stripeRows: true,
		enableTextSelection: true
	},
	features: [filters],
	//store: store_test,
	autoShow : true,
	columns: [
		Ext.create('Ext.grid.RowNumberer'),
		{ header: 'RNC_NAME', dataIndex: 'RNC_NAME', flex:1, filter:{type:'list', store: store_RNC} },
		{ header: 'WBTS_NUMBER', dataIndex: 'WBTS_NUMBER', flex:1  },
		{ header: 'CELL_ID', dataIndex: 'CELL_ID', flex:1, 
		 renderer: function(val, meta, record){
			return '<a href="http://ramsvm.optus.com.au/snp/Check3g.cgi?wc='+record.data.WCEL_NAME+'&ci='+val+'&day=7&hr=1" target="showframe">'+val+'</a>';},filter: {}},
		{ header: 'WCEL_NAME', dataIndex: 'WCEL_NAME' , flex:3, filter: {} },
		{ header: 'NE_TYPE', dataIndex: 'NE_TYPE', flex:1  },
		{ header: 'TRIG_REASON', dataIndex: 'TRIG_REASON', flex:1  },
		{ header: 'IP_ADDRESS', dataIndex: 'IP_ADDRESS', flex:1, 		 
			renderer: function(IP_ADDRESS){
			return '<a href="http://172.27.3.145/extjs_test/portal/wbts_link/wbts_'+IP_ADDRESS+'.lnk" target="_blank">'+ IP_ADDRESS + '</a>';}  }
	],
	emptyText: 'No Matching Records',
	
	initComponent: function() {
		Ext.getStore('MPT.store.RESET.OvernightResetSites').load();		
		this.callParent(arguments);
	}	
});