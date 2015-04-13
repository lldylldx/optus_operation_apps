Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
'MPT.model.Avail3GCellWTarg'
]);

 /*   var data = [
        { 
            "data_type": {
                "attribute1" : "value1",
                "attribute2" : "value2",
                "attribute3" : "value3" 
            }
        },
        { 
            "data_type": {
                "attribute1": "value4",
                "attribute2" : "value5",
                "attribute3" : "value6" 
            }
        }
    ];*/
    
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
        model: 'SomeModel',
        proxy: {
            type: 'ajax',
	     url: 'data/SleepingCells/test1.json',
            reader: {
                type: 'json',
                //record: 'data_type',
		  root: 'data_type'
            }
        }
    });

Ext.define('MPT.view.SleepingCells.GridTest', {
    // create the grid
    extend: 'Ext.grid.Panel',
	alias: 'widget.gridTest',
        store: store,
             columns: [
                  {
                     text: 'column1',
                     dataIndex: 'attribute1'
                  },{
                     text: 'column2',
                     dataIndex: 'attribute2'
                  },{
                     text: 'column3',
                     dataIndex: 'attribute3'
                  }
              ]

    });