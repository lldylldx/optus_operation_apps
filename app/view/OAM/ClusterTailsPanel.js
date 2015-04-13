Ext.define('MPT.view.OAM.ClusterTailsPanel', {
	extend: 'Ext.panel.Panel',
	xtype : 'clusterTailsPanel',
	width: 1450,
	height: 800,
	requires: ['MPT.view.OAM.ClusterTailsQuerybyOwnerForm',
		'MPT.view.OAM.ClusterTailsUpdForm'
	],
	//activeTab : 0,
	//enableTabScroll : true,
	//animScroll : true,
	layout: {
		type: 'vbox',
		align: 'stretch',
		padding: 5
	},
	autoScroll:true,
	bodyPadding: 10,
	border : false,
	items: [{
			xtype: 'cluterTailsUpdForm',
			//title: 'Cluster Owner Update:',
			//height:400,
			flex:4
			//padding: 10
		}, {
       		 xtype: 'splitter'
		},{
			xtype: 'cluterTailsQuerybyOwnerForm',
			//title: 'Cluster Owner Query:',
			//layout: 'fit',
			//height:350,
			flex:4
			//bodyPadding: 10		
	}]
});