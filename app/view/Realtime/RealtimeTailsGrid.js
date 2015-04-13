Ext.Loader.setPath('Ext.ux', '../../extjs41/examples/ux');

Ext.require([
    'Ext.grid.RowNumberer',
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.LiveSearchGridPanel',
    'Ext.ux.ajax.JsonSimlet',
    'Ext.ux.ajax.SimManager'
]);

var today = new Date(); 
//added for fixing the data during 00-20 mins every hour  -Peter.Tan
var myDay = Ext.util.Format.date(today,'d/m/Y H');
//var myHr = Ext.util.Format.date(today,'H');

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

	/*function colorScheme(reoccur, active) {

		if( (reoccur > 3) && (active == 1) )
		{
			return '<span style="color:red;">' + reoccur + '</span>';
		}
		else if ( (reoccur >= 1 and reoccur < 3) && (active == 1) )
		{
			return '<span style="color:yellow;">' + reoccur + '</span>';

		}
		else
		{
			return '<span style="color:green;">' + reoccur + '</span>';
		}
	}*/
	
});

Ext.define('MPT.view.Realtime.RealtimeTailsGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.realtimeTailsGrid',
	title: 'Realtime Tails Action list (V1.0)',
	layout: 'fit',	
	loadMask: true,
	store: 'MPT.store.Realtime.RealtimeTails',
	dockedItems: [{
		dock: 'top',
		xtype: 'toolbar',
		items: [{
			text: 'Refresh',
			handler: function(){
				Ext.getStore('MPT.store.Realtime.RealtimeTails').load();
				tailMask = this.up('grid').setLoading(true);
				tailMask.show();
				/*if(!Ext.getStore('MPT.store.Realtime.RealtimeTails').isload())
				{
					this.up('grid').setLoading(false);
				}*/
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
		{ header: 'TIME', dataIndex: 'REPORT_TIME', flex:1 , filter:{}, renderer: Ext.util.Format.dateRenderer('m/d/Y H:i') },	
		{ header: 'RNC_NAME', dataIndex: 'RNC_NAME' , flex:1, filter: {} },
		{ header: 'CELL_ID', dataIndex: 'CELL_ID' , flex:1, filter: {} },
		{ header: 'CELL_NAME', dataIndex: 'WCEL_NAME' , flex:2, filter: {} },
		{ header: 'WBTS_NUMBER', dataIndex: 'WBTS_NUMBER' , flex:1, filter: {} },
		{ header: 'START_TIME', dataIndex: 'START_TIME' , flex:1, filter: {} , renderer: Ext.util.Format.dateRenderer('m/d/Y H:i')},
		{ header: 'REOCCUR', dataIndex: 'REOCCUR' , flex:1, filter: {}, renderer: function(val, meta, record){
			if( (val >= 4) && (record.data.ACTIVE_TAIL == 1) )
			//if( record.data.ACTIVE == 1 )
			{
				return '<span style="color:red;">' + val + '</span>';
			}
			else if ( (val < 4) && (record.data.ACTIVE_TAIL == 1) ) 
			{
				return '<span style="color:Fuchsia;">' + val + '</span>';
			}
			else
			{
				return '<span style="color:green;">' + val + '</span>';
				//return val;
			}			
		  }
		},
		{ header: 'ACTIVE', dataIndex: 'ACTIVE_TAIL', flex:1, filter: {}, renderer: function(val,meta,record){
			if( val == 1 ) 
			{
				return '<span style="color:red;">' + val + '</span>';
			}
			else
			{
				return '<span style="color:green;">' + val + '</span>';
			}
		  }
		},
		{ header: 'TRIG_TYPE', dataIndex: 'TRIG_TYPE' , flex:1, filter: {} },
		{ header: 'STATE', dataIndex: 'STATE', flex:1 , filter:{type:'list', store: store_STATE} },
		{ header: 'VENDOR', dataIndex: 'VENDOR' , flex:1, filter: {} },
		{ header: 'IFMS', dataIndex: 'IFMS' , flex:1, 
			renderer: function(val, meta, record){
			if(val > 0){			
				return '<a href="http://ifmsprod.optus.com.au/IFMSWeb1P/PR%20Manage/F012_ProblemDetail.aspx?SD_NO='+val+'" target="showframe">'+val+'</a>';
			}
			else{
				return val;
			}
		 	}, filter: {} },
		{ header: 'CASE_NO', dataIndex: 'CASE_NO' , flex:1, filter: {} },
		{ header: 'OWNER', dataIndex: 'OWNER' , flex:1, filter: {} }
	],
	emptyText: 'No Matching Records'
	
	/*initComponent: function() {
		//Ext.getStore('MPT.store.Realtime.RealtimeTails').load();		
		//this.callParent(arguments);
	}*/
	/*render: function(grid) {
		Ext.getStore('MPT.store.Realtime.RealtimeTails').load();
	}*/	
});