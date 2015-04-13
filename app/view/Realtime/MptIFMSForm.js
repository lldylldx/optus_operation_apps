Ext.define('MPT.view.Realtime.MptIFMSForm',{
	extend: 'Ext.form.Panel',
	xtype: 'mptIFMSForm',
	//title: 'Update Operation Record',
	header: false,
	bodyPadding: 10,
	//layout: 'anchor',
	defaults: {
		anchor: '100%'
		//labelWidth: 100,
		
	},
	defaultType: 'textfield',
	items: [{
		fieldLabel: 'CELL NAME',
		name: 'cell_name'		
	},{
		fieldLabel: 'CELL ID',
		//id: 'cell_id',
		name: 'cell_id'		
	},{
		fieldLabel: 'WBTS NUMBER',
		name: 'wbts_number'	
	},{
		xtype: 'numberfield',
		fieldLabel: 'IFMS Ticket',
		name: 'ifms',
		maxLength: 8,
		allowBlank: false
	},{
		fieldLabel: 'Case No',
		name: 'case_no',
		allowBlank: false
	},{
		xtype: 'combo',
		forceSelection: true,
		editable: false,
		//anchor: '20%',
		allowBlank: false,
		fieldLabel: 'Owner',
		name:           'owner',
		displayField:   'name',
		valueField:     'value',
		store:          Ext.create('Ext.data.Store', {
                                    fields : ['name', 'value'],
                                    data   : [
						{name : 'Aleksandra Dominguez', value: 'AD'},
						{name : 'Adrian Ragasajo', value: 'AR'},
						{name : 'Gregory Marshall', value: 'GM'},
						{name : 'Michael Zhu', value: 'MZ'}, 
						{name : 'Peter Tan', value: 'PT'},
						{name : 'Stephen Lam', value: 'SD'},
						{name : 'Sandy Prasad', value: 'SP'}                                  
                                    ]
                               })	
	}],
	buttons: [{
		text: 'Submit',
		formBind: true,
		disabled: true,
		handler: function(form, action){
			var form= this.up('form').getForm();
			if(form.isValid()) {
				form.submit({
					waitMsg: 'Please wait...',
					url: 'php/realtime/upd_MPT_IFMS.php',
					method: 'post',
					success: function(form, action){
						var responseJSON = Ext.JSON.decode(action.response.responseText);
						//form.updateRecord(form.getRecord());
						if(responseJSON.success)
						{
							ifms_grid = form.findField("ifms").getValue();
							caseNo_grid = form.findField("case_no").getValue();
							owner_grid = form.findField("owner").getValue();
							win_ifms.close();
							Ext.Msg.alert('Success', 'Bingo! Update your input into DB');
							//this.close();
						}
						else
						{
							Ext.Msg.alert('Fail', responseJSON.reason);
						}						
						
					},
					failure: function(form, action) {
						Ext.Msg.alert('Success', action.response.responseText);
					}
				});
			}
		 }
		},{
		text: 'Reset',
		handler: function(){
			this.up('form').getForm().reset();
		}

	}]
});