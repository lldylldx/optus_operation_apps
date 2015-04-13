Ext.define('MPT.controller.GridUpdate', {
	extend: 'Ext.app.Controller',
	stores: ['MPT.store.Realtime.RealtimeTails'],
	//models: [],
	views: ['MPT.view.Realtime.RealtimeTailsGrid',
		'MPT.view.Realtime.MptIFMSForm'	
	],
	refs: [{
		ref: 'realtimeTailsGrid',
		selector: 'realtimeTailsGrid'
		},{
		ref: 'mptIFMSForm',
		selector: 'mptIFMSForm'
		},{
		ref: 'realtimeTails',
		selector: 'realtimeTails'
	}],
	init: function() {
		//clean the vars
		ifms_grid = 0;
		caseNo_grid = '';
		owner_grid = '';
		tailMask = 0;
		//end
		if(window.console)
		{
			console.log('I am GridUpdate!!');
		}
		this.control({
			'realtimeTailsGrid': {
				'render': function(grid){
					tailMask = grid.setLoading(true)
					tailMask.show();
					Ext.getStore('MPT.store.Realtime.RealtimeTails').load();
				},
				'viewready': function(grid){
					//alert('viewready is called!!');
					//grid.setLoading(false);
				},
				'show': function(grid) {
					
					//grid.setLoading(false);
					alert('show is called!!');
				},
				'itemdblclick': function(me, record, htmlItem, index){
					win_ifms = Ext.widget('window', {
						title: 'Update Operation Record',
						//closeAction: 'hide',
						width: 400,
						height: 400,
						layout: 'fit',
						resizable: false,
						modal: true,
						items: [{xtype:'mptIFMSForm'}]
					});
					record_idx = index;
					this.updIfmsForm(record);
					win_ifms.show();
				}
			},
			'mptIFMSForm': {
				'removed': function() {
					//alert(ifms_grid);					
					this.getRealtimeTailsGrid().getStore().getAt(record_idx).set("IFMS", ifms_grid);
					this.getRealtimeTailsGrid().getStore().getAt(record_idx).set("CASE_NO", caseNo_grid);
					this.getRealtimeTailsGrid().getStore().getAt(record_idx).set("OWNER", owner_grid);
					this.getRealtimeTailsGrid().getStore().commitChanges();					
				}
			},
			'realtimeTails': {
				'load': function() {
					//this.getRealtimeTailsGrid().setLoading(true).show();
					alert('load is called!!');
				},
				'datachanged': function() {
					alert('datachanged is called!!');					
				}
			}
		})
	},
	updIfmsForm: function(record){
		ifms_grid = record.data.IFMS;
		caseNo_grid = record.data.CASE_NO;
		owner_grid = record.data.OWNER;
		this.getMptIFMSForm().getForm().findField("cell_id").setValue(record.data.CELL_ID);
		this.getMptIFMSForm().getForm().findField("cell_name").setValue(record.data.WCEL_NAME);
		this.getMptIFMSForm().getForm().findField("wbts_number").setValue(record.data.WBTS_NUMBER);
		this.getMptIFMSForm().getForm().findField("ifms").setValue(record.data.IFMS);
		this.getMptIFMSForm().getForm().findField("case_no").setValue(record.data.CASE_NO);
		this.getMptIFMSForm().getForm().findField("owner").setValue(record.data.OWNER);
	}
});