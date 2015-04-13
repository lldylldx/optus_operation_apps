var today = new Date();
var myDay = Ext.util.Format.date(today,'Y_m_d');
var myHr = Ext.util.Format.date(today,'H');
var myMin = Ext.util.Format.date(today,'i');
var myTitleDate;

if( myHr < 10 )
{
	myTitleDate = Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.DAY, -2),'d/m/Y');
}
else
{
	myTitleDate = Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.DAY, -1),'d/m/Y');

}

Ext.define('MPT.view.Container', {
	extend: 'Ext.tab.Panel',
	xtype : 'tabContainer',
	requires: ['MPT.view.charts.NSNProbCells14',
		 	'MPT.view.charts.HWProbCells14',
			'MPT.view.charts.BlendedProbCells14',
			//'MPT.view.charts.NSNStatePie',
			//'MPT.view.charts.NSNLTETails14',
			//'MPT.view.charts.HUAWEILTETails14',
			'MPT.view.charts.HWStatePie',
			//'MPT.view.charts.NSNFaultsStatisticPie',
			'MPT.view.charts.HWFaultsStatisticPie',
			'MPT.view.charts.NSNU9StatePie',
			'Ext.util.*'],

	activeTab : 0,
	enableTabScroll : true,
	animScroll : true,
	border : false,
	//id: 'tabStarting',
	//autoScroll : true,
	items: [{
		closable: 1
		,title: 'Starting Page'
		//,height:500
		//,header: true
		//,html: '<div><iframe style="width:100%;height:700;" src="http://ramsvm.optus.com.au/">Your device does not support iframes.</iframe></div>'
		//,url: 'http://ramsvm.optus.com.au/'
		//,html: 'TBD'
		,xtype: 'panel'
		,autoScroll : true
		,layout: 'column'
		,items: [{
			xtype: 'panel',
			title: 'NSN 3G 14 days Tail Cells :',
			height: 350,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('NSNProbCells14');
					store.load();
				}
			}],
			items: [{
				xtype:'nsnprobcells14'}]
			},{
			xtype: 'panel',
			title: 'HUAWEI 3G 14 days Tail Cells :',
			height: 350,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('HWProbCells14');
					store.load();
				}
			}],
			items: [{
				xtype:'hwprobcells14'}]
			},{
			xtype: 'panel',
			title: '3G Blended 14 days Tail Cells :',
			height: 350,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('BlendedProbCells14');
					store.load();
				}
			}],
			items: [{
				xtype:'blendedprobcells14'
			}]	
			},{
			xtype: 'panel',
			//title: 'NSN 3G State Level Tail Cells ('+ Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.DAY, -1),'d/m/Y')+') : ',
			title: 'NSN LTE 14 days Tail Cells :',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					//var store = Ext.getStore('NSNStateBreakdown');
					var store = Ext.getStore('NSNLTETails14D');
					store.load();
				}
			}],
			items: [{
				xtype:'nsnltetails14'}]
			},{
			xtype: 'panel',
			//title: 'NSN 3G Tail Cells Analysis('+ myTitleDate +') : ',
			title: 'HUAWEI LTE 14 days Tail Cells :',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					//var store = Ext.getStore('FaultsStatisticsNSN');
					var store = Ext.getStore('HUAWEILTETails14D');
					store.load(function(records, operation, success) {
						//console.log('loaded records');
					});
				}
			}],
			items: [{
				xtype:'hwltetails14'}]
			},{
			xtype: 'panel',
			title: 'LTE Blended 14 days Tail Cells :',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('BlendedLTETails14');
					store.load();
				}
			}],
			items: [{
				xtype:'blendedltetails14'
			}]	
			},{
			xtype: 'panel',
			title: 'HUAWEI 3G State Level Tail Cells ('+ Ext.util.Format.date(Ext.Date.add(new Date(), Ext.Date.DAY, -1),'d/m/Y')+') : ',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('HWStateBreakdown');
					store.load(function(records, operation, success) {
						//console.log('loaded records');
					});
				}
			}],
			items: [{
				xtype:'hwStatePie'}]
			},{
			xtype: 'panel',
			title: 'HUAWEI 3G Tail Cells Analysis('+ myTitleDate +') : ',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('FaultsStatisticsHW');
					store.load(function(records, operation, success) {
						//console.log('loaded records');
					});
				}
			}],
			items: [{
				xtype:'hwFaultsStatisticPie'}]
			/*},{
			xtype: 'panel',
			title: 'NSN 3G U9 State Level Tail Cells('+ myTitleDate +') : ',
			height: 480,
			//weight: 500,
			columnWidth: 0.33,
			padding: 2,
			layout: 'fit',
			tbar: [{
				text: 'Refresh',
				handler: function() {
					var store = Ext.getStore('NSNU9StatePie');
					store.load(function(records, operation, success) {
						//console.log('loaded records');
					});
				}
			}],
			items: [{
				xtype:'nsnU9StatePie'}]*/
		}]
	}]			
});
