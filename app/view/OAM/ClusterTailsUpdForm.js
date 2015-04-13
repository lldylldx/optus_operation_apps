Ext.define('MPT.view.OAM.ClusterTailsUpdForm', {
	extend: 'Ext.form.Panel',
	xtype: 'cluterTailsUpdForm',
	title: 'Cluster Owner Daily Update:',
	//autoHeight: true, 
	//height: 500,
	bodyPadding: 10,
	layout: 'anchor',
	defaults: {
		anchor: '100%',
		labelWidth: 100
	},
	items: [{
		xtype: 'combo',
		forceSelection: true,
		editable: false,
		anchor: '20%',
		fieldLabel: 'Cluster Name',
		name:           'clusterName',
		displayField:   'name',
		valueField:     'value',
		store:          Ext.create('Ext.data.Store', {
                                    fields : ['name', 'value'],
                                    data   : [
						{name : 'NSW_N', value: 'NSW_N'},
						{name : 'NSW_S', value: 'NSW_S'},
						{name : 'NSW_METRO', value: 'NSW_METRO'},
						{name : 'NSW_MAMMOTH', value: 'NSW_MAMMOTH'},							
						{name : 'VIC', value: 'VIC'},
						{name : 'VIC_METRO', value: 'VIC_METRO'},
						{name : 'VIC_MAMMOTH', value: 'VIC_MAMMOTH'},
						{name : 'QLD', value: 'QLD'},
						{name : 'SANT', value: 'SANT'},
						{name : 'WA', value: 'WA'},
						{name : 'TAS', value: 'TAS'}                                     
                                    ]
                                })		
	},{
		xtype: 'combo',
		forceSelection: true,
		editable: false,
		anchor: '20%',
		fieldLabel: 'Cluster Owner',
		name:           'clusterOwner',
		displayField:   'name',
		valueField:     'value',
		store:          Ext.create('Ext.data.Store', {
                                    fields : ['name', 'value'],
                                    data   : [
						//{name : 'Select your name', value: ''},
						{name : 'ADRIAN RAGASAJO', value: 'ADRIAN RAGASAJO'},
						{name : 'ALEKSANDRA DOMINGUEZ', value: 'ALEKSANDRA DOMINGUEZ'},
						{name : 'GREGORY MARSHALL', value: 'GREGORY MARSHALL'},
						//{name : 'BAHER MIKHAIEL', value: 'BAHER MIKHAIEL'},
						{name : 'ERIC CHANG', value: 'ERIC CHANG'},
						//{name : 'MAGED ISKANDER', value: 'MAGED ISKANDER'},
						{name : 'SANDY PRASAD', value: 'SANDY PRASAD'},
						{name : 'STEPHEN LAM', value: 'STEPHEN LAM'},
						{name : 'PETER TAN',   value: 'PETER TAN'},
						{name : 'MICHEAL ZHU',  value: 'MICHEAL ZHU'}                                       
                                    ]
                                })
	},{
		xtype: 'fieldcontainer',
		fieldLabel: 'Vendor',
		anchor: '25%',
		defaultType: 'radiofield',
		defaults: {
			flex: 1
		},
		layout: 'hbox',
		items: [{
	  		boxLabel: 'HUAWEI',			
			name: 'vendor',
			inputValue: 'HUAWEI'
		},{
	  		boxLabel: 'NSN',
			checked: true,
			name: 'vendor',
			inputValue: 'NSN'
		}]			
	},{
		xtype: 'datefield',
		name: 'updDate',
		anchor: '20%',
		fieldLabel: 'Update Date',
		//margin: '',
		allowBlank: false
	},{
		xtype: 'fieldset',
		title: 'Cluter Tails Break Down',
		collapsile: true,
		defaults: {
			labelWidth: 100,
			anchor: '100%',
			layout: {
				type: 'hbox',
				defaultMargins: { top: 0, right: 10, bottom: 0, left: 0 }
			}
		},
		items: [{
			xtype: 'fieldcontainer',
			fieldLabel: 'Routine Issues',
			combineErrors: false,
			defaults: {
				hideLabel: true
			},
			items: [{
				xtype: 'displayfield',
				width:          120,
				value: 'Congestion:'
			},{
				name: 'congestion',
				xtype: 'numberfield',
				width:          60,
				//flex: 1,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Faults:'
			},{
				name: 'faults',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			},{					
				xtype: 'displayfield',
				width:          120,
				value: 'SW Issue:'
			},{
				name: 'softwareIssue',
				xtype: 'numberfield',
				width:          60,
				//flex: 1,
				allowBlank: true	
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Special Events:'
			},{
				name: 'specialEvents',
				xtype: 'numberfield',
				width:          60,
				//flex: 1,
				allowBlank: true
			}]
		},{
			xtype: 'fieldcontainer',
			fieldLabel: 'Other Issues',
			//anchor: '60%',
			combineErrors: false,
			defaults: {
				hideLabel: true
			},
			items: [{
				xtype: 'displayfield',
				width:          120,
				value: 'DCR in Train stations:'
			},{
				name: 'dcrTrainStation',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'RRC due to MS Fails:'
			},{
				name: 'rrcMsFails',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Under Investigation:'
			},{
				name: 'underInvestigation',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Rural Area:'

			},{
				name: 'ruralArea',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Planed Actions:'

			},{
				name: 'planedActions',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			}]
		},{
			xtype: 'fieldcontainer',
			fieldLabel: 'Newly Defined Issue',
			combinErrors: false,
			defaults: {
				hideLabel: true
			},
			items: [{
				xtype: 'displayfield',
				width:          80,
				value: 'Issue Name:'
			},{
				name: 'newIssueName',
				xtype: 'textfield',
				//flex: 1,
				width:          100,
				allowBlank: true
			},{
				xtype: 'displayfield',
				width:          120,
				value: 'Issue Count:'
			},{
				name: 'newIssueVal',
				xtype: 'numberfield',
				//flex: 1,
				width:          60,
				allowBlank: true
			}]		
		}]
	}],
	buttons: [{
		text: 'Submit',
		formBind: true,
		disabled: true,
		handler: function(form, action){
			//Ext.Msg.alert('Success', action.result.msg);
			var form = this.up('form').getForm();
			if(form.isValid()) {
				form.submit({
					waitMsg: 'Please wait...',
					url: 'php/OAM/cluster_daily_breakdown_update.php',
					method: 'post',
					success: function(form, action) {
						var responseJSON = Ext.JSON.decode(action.response.responseText);
						if( responseJSON.success )
						{							
							Ext.Msg.alert('Success','Successfully update your data into Database!');							
						}
						else
						{
							Ext.Msg.alert('Fail', responseJSON.reason);
						}
						//Ext.Msg.alert('Success', responseJSON.success);
						form.reset();
					},
					failure: function(form, action) {
						//Ext.Msg.alert('Failed', 'Fail to update your data into Database, please try it again!');
						Ext.Msg.alert('Success',action.response.responseText);
					}
				});
			}
			else
			{
				Ext.Msg.alert('Failed','Wrong form format! Please have a check of your input!');

			}
		}
	},{
		text: 'Reset',
		handler: function() {
			this.up('form').getForm().reset();
		}	
	}]
});