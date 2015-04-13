Ext.define('MPT.view.OAM.ClusterTailsQuerybyOwnerForm', {
	extend: 'Ext.form.Panel',
	xtype: 'cluterTailsQuerybyOwnerForm',
	title: 'Cluster Owner Query:',
	frame: true,
	//autoHeight: true, 
	//height: 500,
	bodyPadding: 10,
	//anchor: '90%',
	layout: 'column',
	fieldDefaults: {
		labelAlign: 'left',
		msgTarget: 'side'
	},
	items: [
		Ext.create('Ext.grid.RowNumberer',{width:28}),
		{
		columnWidth: 0.8,
		xtype: 'gridpanel',
		store: 'MPT.store.OAM.ClusterTailsQuerybyOwner',
		height: 300,
		title: 'Cluster Owner Records',
		bodyPadding: 10,
		viewConfig: {
			stripeRows: true,
			enableTextSelection: true
		},
		columns: [{
			//id: '',
			text: 'Record Time',
			flex: 1,
			sortable: true,
			dataIndex: 'RECORD_TIME',
			renderer: Ext.util.Format.dateRenderer('m/d/Y')
		},{
			text: 'Cluster Name',
			flex: 1,
			sortable: true,
			dataIndex: 'CLUSTER_NAME'

		},{
			text: 'Vendor',
			flex: 1,
			sortable: true,
			dataIndex: 'VENDOR'

		},{
			text: 'Congestion',
			flex: 1,
			sortable: true,
			dataIndex: 'CONGESTION'
		},{
			text: 'Faults',
			flex: 1,
			sortable: true,
			dataIndex: 'FAULTS'
		},{
			text: 'SW Issue',
			flex: 1,
			sortable: true,
			dataIndex: 'SW_ISSUE'
		},{
			text: 'Special Events',
			flex: 1,
			sortable: true,
			dataIndex: 'SPECIAL_EVENTS'
		},{
			text: 'DCR TrainStations',
			//flex: 1,
			width: 120,			
			sortable: true,
			dataIndex: 'DCR_TRAINSTATION'
		},{
			text: 'RRC MS Fails',
			flex: 1,
			sortable: true,
			dataIndex: 'RRC_MS_FAIL'
		},{
			text: 'Under Investigation',
			//flex: 1,
			width: 120,
			sortable: true,
			dataIndex: 'UNDER_INVESTIGATION'
		},{
			text: 'Rural Area',
			flex: 1,
			sortable: true,
			dataIndex: 'RURAL_AREA'
		},{
			text: 'Planed Actions',
			flex: 1,
			sortable: true,
			dataIndex: 'PLANED_ACTIONS'
		},{
			text: 'Total No.',
			flex: 1,
			sortable: true,
			dataIndex: 'TOTAL_NO'
		}],
		listeners: {

		
		}
	},{
		columnWidth: 0.20,
		margin: '0 0 0 10',
		xtype: 'fieldset',
		outlet: 'fit',
		title: 'Cluster Owner Query',
		defaults: {
			width: 230,
			labelWidth: 90
		},
		defaultType: 'textfield',
		items: [{
		xtype: 'combo',
		forceSelection: true,
		editable: false,
		//width:          120,
		//anchor: '20%',
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
			xtype: 'datefield',
			name: 'updDate',
			//anchor: '20%',
			fieldLabel: 'Start Date',
			//margin: '',
			allowBlank: false
		},{
			xtype: 'datefield',
			name: 'endDate',
			//anchor: '20%',
			fieldLabel: 'End Date',
			//margin: '',
			allowBlank: true
		},{
			xtype: 'button',
			anchor: '40%',
			text: 'Submit',
			handler: function(form, action){
				var form = this.up('form').getForm();
				if(form.isValid()) {
					form.submit({
						waitMsg: 'Please wait...',
						url: 'php/OAM/cluster_owner_query.php',
						method: 'post',
						success: function(form, action) {
							var responseJSON = Ext.JSON.decode(action.response.responseText);
							Ext.StoreManager.lookup('MPT.store.OAM.ClusterTailsQuerybyOwner').loadData(responseJSON.rows);
							form.reset();
							//Ext.Msg.alert('Success',action.response.responseText);
						},
						failure: function(form, action) {
							Ext.Msg.alert('Fail',action.response.responseText);
						}
					});
				}
				else
				{
					Ext.Msg.alert('Failed','Wrong form format! Please have a check of your input!');

				}
			}
		}]
	}]
});