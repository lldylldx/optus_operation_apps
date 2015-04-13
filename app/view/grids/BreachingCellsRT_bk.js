Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager',
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.LiveSearchGridPanel',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager'
]);

Ext.define('MPT.view.grids.BreachingCellsRT', {
	extend: 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.breachingCellsRT',
	
	initComponent: function(){
		
	Ext.QuickTips.init();

	var encode = false;
	var local = true;
	var filters = {
        ftype: 'filters',
        // encode and local configuration options defined previously for easier reuse
        encode: encode, // json encode the filter query
        local: local,   // defaults to false (remote filtering)

        // Filters are most naturally placed in the column definition, but can also be
        // added here.
        filters: [{
            type: 'boolean',
            dataIndex: 'visible'
        }]
    };
	
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
		'myFaults': {
			data: [['CONGESTION', 'CONGESTION'],['INVESTIGATE', 'INVESTIGATE'],['RESET', 'RESET']],
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
			data: [['RRC','RRC'],['RAB','RAB'],['DCR','DCR'],['HS','HS']],
			stype: 'json'
		}
	});
	
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
	
	var store_FAULT = Ext.create('Ext.data.Store', {
		fields: ['id', 'text'],
		proxy: {
			type: 'ajax',
			url: 'myFaults',
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
	var sm = Ext.create('Ext.selection.CheckboxModel', {
        listeners: {
            selectionchange: function(sm, selections) {
                grid.down('#resetButton').setDisabled(selections.length == 0);
            }
        }
    });
	
	var createColumns = function (finish, start) {
		var columns = [ 
		Ext.create('Ext.grid.RowNumberer'),
		{header:'RC', width:40, dataIndex: 'RC', filter:{type:'list', store: store_RC} },
		{header:'RNC_NAME', dataIndex: 'RNC_NAME', filter: {}},
		{header:'WBTS_NUMBER', 
		 dataIndex: 'WBTS_NUMBER',		 
		 filter: {}},
		{header:'WBTS_NAME', dataIndex: 'WBTS_NAME', filter: {}},
		{header:'CELL_ID', 
		 dataIndex: 'CELL_ID', 
		 renderer: function(val, meta, record){
			return '<a href="http://ramsvm.optus.com.au/snp/Check3g.cgi?wc='+record.data.WCEL_NAME+'&ci='+val+'&day=7&hr=1" target="showframe">'+val+'</a>';
		 },
		 filter: {}
		},
		{header:'WCEL_NAME', dataIndex: 'WCEL_NAME', filter: {}},
		{header:'NE_TYPE', dataIndex: 'NE_TYPE'},
		{header:'U9', dataIndex: 'U9', filter: {}},
		{header:'STATE', dataIndex: 'STATE', filter:{type:'list', store: store_STATE} },
		{header:'TRIG_REASON', dataIndex: 'TRIG_REASON', filter: {}},
		{header:'PRIME_REASON', dataIndex: 'PRIME_REASON', filter: {}},
		{header:'SECOND_REASON', dataIndex: 'SECOND_REASON', filter: {}},
		{header:'FAULT_TYPE', dataIndex: 'FAULT_TYPE', filter: {type:'list', store: store_FAULT} },
		{header:'IP_ADDRESS',  
		 dataIndex: 'IP_ADDRESS',
		 renderer: function(IP_ADDRESS){
			return '<a href="http://172.27.3.145/extjs_test/portal/wbts_link/wbts_'+IP_ADDRESS+'.lnk" target="_blank">'+ IP_ADDRESS + '</a>';
		 }}
		];
		return columns.slice(start || 0, finish);
	};

	Ext.apply(this, {
		height: 500,
		title: 'NSN 3G Tail Cells Real Time Monitor',
		stripeRows: true,
		columnLines: true,
		columns: createColumns(15),
		store: 'BreachingCellsRTs',
		features: [filters],
	});

	this.callParent(arguments);
	}
});