Ext.require([
	'Ext.util.*',
	'MPT.store.CellAvail.VHACellsOutage'
]);

Ext.define('MPT.view.CellAvail.VHACellsOutageForm', {
	extend: 'Ext.form.Panel',
	//requires: ['MPT.store.CellAvail.VHACellsOutage'],
	xtype : 'vhaCellsOutageForm',
	frame: true,
	bodyPadding: 5,
	fieldDefaults: {
		labelAlign: 'left',
		labelWidth: 120,
		anchor: '40%'
	},
	url: 'php/CellAvail/vha_cells_outage_update.php',
	layout: {
		type: 'vbox'
	},
	items: [{
		xtype: 'datefield',
		name: 'startDate',
		fieldLabel: 'Starting Date',
		allowBlank: false
	}],
	buttonAlign: 'left',
	buttons: [{
		text: 'Reset',
		handler: function() {
			this.up('form').getForm().reset();
		}
	},{
		text: 'Submit',
		formBind: true,
		disabled: true,
		handler: function() {
			//this.up('form').getForm().reset();
			//Ext.Msg.alert('Success', action.result.msg);
			var form = this.up('form').getForm();			
			if(form.isValid()) {
				form.submit({
					waitMsg: 'Please wait...',
					url: 'php/CellAvail/vha_cells_outage_update.php',
					method: 'post',
					success: function(form, action) {
						var responseJSON = Ext.JSON.decode(action.response.responseText);

						Ext.StoreManager.lookup('MPT.store.CellAvail.VHACellsOutage').loadData(responseJSON.rows);

						//Ext.StoreManager.getAt(34).loadData(responseJSON.rows);
						//Ext.Msg.alert('Success', Ext.StoreManager.getAt(34).getCount());
						//Ext.Msg.alert('Success', action.response.responseText);
						//Ext.StoreManager.getAt(34).loadData(responseJSON);
						//Ext.Msg.alert('Success', responseJSON.rows);
						//var newStore = responseJSON.rows;
						//Ext.getStore('VHACellsOutage').loadRecords(newStore.getRange(0,newStore.getCount()),{addRecords: false});
						//Ext.StoreManager.lookup('MPT.store.CellAvail.VHACellsOutage').loadRecords(newStore.getRange(0,newStore.getCount()),{addRecords: false});
						//Ext.StoreManager.lookup('MPT.store.CellAvail.VHACellsOutage').self.getName();
						//Ext.Msg.alert('Success',Ext.StoreManager.getAt(34).self.getName());
						//Ext.StoreManager.getAt(34).self.loadRecords(newStore.getRange(0,newStore.getCount()),{addRecords: false});
						//Ext.Msg.alert('Success',Ext.StoreManager.getAt(34).count());
						//Ext.Msg.alert('Success',newStore.count());

						/*var strStore;
						for(var i=0;i<Ext.StoreManager.getCount();i++)
						{
							strStore += Ext.StoreManager.getAt(i).self.getName();
							strStore += ', ';							 
						}
						Ext.Msg.alert('Success', strStore);*/
						//vhaCellsOutageGrid.getStore().loadRecords(newStore.getRange(0,newStore.getCount()),{addRecords: false});
						//Ext.getCmp('vhacellsoutageGrid').getStore().loadRecords(newStore.getRange(0,newStore.getCount()),{addRecords: false});
						//console.log(data);
						form.reset();
					},
					failure: function(form, action) {
						Ext.Msg.alert('Failed', 'Fail!');
					}
				});				
			}			
		}
	}]
});