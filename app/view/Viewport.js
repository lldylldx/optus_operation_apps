Ext.define('MPT.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'MPT.view.ReportList',
	 'MPT.view.HotLinkList',
	 'MPT.view.OAMView',
	 //'MPT.view.StartingCharts',
	 'MPT.view.Container',
	 'Ext.chart.*'
    ],
    
    layout: {
	type: 'border',
	padding: 2
    },
    
    items: [
        /*{
            region: 'north',
            xtype : 'pageHeader'
        },*/
	{
	     region: 'west',
	     /*layout: {
                type : 'accordion',
                align: 'stretch',
		  pack: 'start'
            },*/
	     layout:{
		type: 'accordion',
		animate: true
	     },
	     collapsible: true,	     
	     title: 'MPT Portal',
	     split: true,
	     width: '12%',	
	     items: [{
			title:'MPT Reports',
			autoScroll: true,
			border: false,
                     xtype: 'exampleList'
		},{
			title: 'MPT O&M',
			xtype:'oamView',
			//html:'To Be Dev',			
			border: false,
			autoScroll: true
		},{
			title: 'Hot Links',
			xtype:'hotLinkList',
			//html:'To Be Dev',			
			border: false,
			autoScroll: true		
            }]
        },
        {
            region: 'center',
            title: '',	                        
            xtype: 'tabContainer'
        }
    ]
});
