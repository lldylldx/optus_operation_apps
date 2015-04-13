Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
'MPT.model.SleepingCell'
]);

    
    Ext.define('SomeModel', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'attribute1'},
            {name: 'attribute2'},
            {name: 'attribute3'}
        ]
    });
    
	
    var store = Ext.create('Ext.data.Store', {
        autoLoad: true,
       // data : data,
        model: 'MPT.model.SleepingCell',
        proxy: {
            type: 'ajax',
	     url: 'data/SleepingCells/nsn_3g_sleeping_cells.json',
            reader: {
                type: 'json',
                //record: 'data_type',
		  root: 'rows'
            }
        }
    });

Ext.define('MPT.view.SleepingCells.GridTest', {
    // create the grid
    extend: 'Ext.grid.Panel',
	alias: 'widget.gridTest01',
        store: store,

	columns: [
		{ header: 'RC', dataIndex: 'RC' },
		{ header: 'RNC_NAME', dataIndex: 'RNC_NAME' },
		{ header: 'WBTS_NUMBER', dataIndex: 'WBTS_NUMBER' },
		{ header: 'CELL_ID', dataIndex: 'CELL_ID' },
		{ header: 'WCEL_NAME', dataIndex: 'WCEL_NAME' },
		{ header: 'NE_TYPE', dataIndex: 'NE_TYPE' },
		{ header: 'U9', dataIndex: 'U9' },
		{ header: 'TRIG_REASON', dataIndex: 'TRIG_REASON' },
		{ header: 'STATE', dataIndex: 'STATE' },
		{ header: 'IP_ADDRESS', dataIndex: 'IP_ADDRESS' }
	],
	

    });