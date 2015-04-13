Ext.define('MPT.view.Container', {
	extend: 'Ext.tab.Panel',
	xtype : 'tabContainer',
	requires: ['MPT.view.charts.NSNProbCells14',
			'MPT.view.charts.HWProbCells14',
			'MPT.view.charts.BlendedProbCells14',
			'MPT.view.charts.NSNStatePie'],
	activeTab : 0,
	enableTabScroll : true,
	animScroll : true,
	border : false,
	//autoScroll : true,
	items: [{
		closable: 1
		,title: 'Starting Page'
		,xtype: 'panel'
		,autoScroll : true
		,layout: 'column'
		,items: [{
			xtype: 'panel',
			title: 'NSN 3G 14 days Tail Cells :',
			height: 300,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			items: [{
				xtype:'nsnprobcells14'}]
			},{
			xtype: 'panel',
			title: 'HUAWEI 3G 14 days Tail Cells :',
			height: 300,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			items: [{
				//xtype:'hwprobcells14'}]
				xtype:'nsnprobcells14'}]
			},{
			xtype: 'panel',
			title: ' 3G Blended 14 days Tail Cells :',
			height: 300,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			items: [{
				//xtype:'blendedprobcells14'}]	
				xtype:'nsnprobcells14'}]
			},{
			xtype:'panel',
			title: 'NSN 3G State Level Tail Cells:',
			height:300,
			columnWidth: 0.33,
			padding: 2,
			items: [{
				//xtype:'nsnStatePie'
				xtype:'nsnprobcells14'}]
		}]
	}]
	
});
