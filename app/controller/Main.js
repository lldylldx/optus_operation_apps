Ext.define('MPT.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Examples',
	 'HotLinks',
	 'OAMList',
	 'NSNProbCells14',
	 'HWProbCells14',
	 'BlendedProbCells14',
	 'HUAWEILTETails14D',
	 'NSNLTETails14D',
	 'BlendedLTETails14',
	 'BlendedLTETails',
	 'NSNStateBreakdown',
	 'HWStateBreakdown',
	 'NSNProbCells',
	 'HWProbCells',
	 'NSNLTETails',
	 'HUAWEILTETails',
	 'BlendedProbCells',
	 'BreachingCellsRTs',
	 'QLDProbCells14',
	 'NSWNProbCells14',
	 'NSWSProbCells14',
	 'SAWANTProbCells14',
	 'NSNRNCTails7s',
	 'HWNSWProbCells30',
	 'HWVICProbCells30',
	 'HWRNCTails7',
	 'HW0thersProbCells30',
	 'FaultsStatisticsNSN',
	 'FaultsStatisticsHW',
	 'NSNU9StatePie',
	 'MPT.store.CellAvail.OptusLeadAvail',
	 'MPT.store.CellAvail.OptusLeadAvailWTarg',
	 'MPT.store.CellAvail.OptusLeadAvailWTargNMW',
	 'MPT.store.CellAvail.Tor3GCellAvail',
	 'MPT.store.CellAvail.Tor3GCellAvailNMW',
	 'MPT.store.CellAvail.VHALeadAvail',
	 'MPT.store.CellAvail.VHALeadAvailNMW',
	 'MPT.store.SleepingCells.NSN3GSleepingCells',
	 'MPT.store.RESET.OvernightResetSites',
	 'MPT.store.RESET.OvernightResetAnalysis',
	 'MPT.store.CellAvail.VHACellsOutage',
	 'MPT.store.CellAvail.VHACellsOutageCDF',
	 'MPT.store.LTE.NSNLteTailCellsDaily',
	 'MPT.store.LTE.NSNLteTailCellsHourly',
	 'MPT.store.LTE.NSNLteCellHourlyUnavails',
	 'MPT.store.LTE.NSNLteCellDailyUnavails',
	 'MPT.store.LTE.NSNLTETailsReport',
	 'MPT.store.LTE.HUAWEILTETailsReport',
	 'MPT.store.OAM.ClusterTailsQuerybyOwner',
	 'MPT.store.Realtime.RealtimeTails',
	 'MPT.store.CellAvail.NSWBushfireAvail',
	 'MPT.store.CellAvail.NSWBushfireAvail2G'
    ],
    models: ['NSNProbCell',
		'BlendedProbCell',
		'BreachingCellsRT',
		'NSNRNCTails7',
		'FaultsStatistics',
		'Avail3GCell',
		'Avail3GCellWTarg',
		'SleepingCell',
		'MPT.model.LTETailCell',
		'MPT.model.LTECellUnavail',
		'MPT.model.ClusterOwnerQueryInfo',
		'MPT.model.LTECellTail',
		'MPT.model.BlendedLTETail',
		'MPT.model.LTECellReport'		
    ],

    views: [
        'Viewport',
        'Header',
	 'MPT.view.charts.NSN3GChart',
	 'MPT.view.charts.HW3GChart',
	 'MPT.view.charts.Blended3GChart',
	 'MPT.view.charts.NSNLTETails14',
	 'MPT.view.charts.HUAWEILTETails14',
	 'MPT.view.charts.BlendedLTETails14',
	 'MPT.view.charts.BlendedLTETails',
	 'MPT.view.charts.NSNLTETails',
	 'MPT.view.charts.HUAWEILTETails',
	 'MPT.view.grids.BreachingCellsRT',
	 'MPT.view.charts.QLDProbCells14',	  
	 'MPT.view.charts.NSWNProbCells14',
	 'MPT.view.charts.NSWSProbCells14',
	 'MPT.view.charts.SAWANTProbCells14',
	 'MPT.view.charts.NSNRNCTails7',
	 'MPT.view.charts.HWNSW3GTails30Chrt',
	 'MPT.view.charts.HWVIC3GTails30Chrt',
	 'MPT.view.charts.HWRNCTails7',
	 'MPT.view.charts.HWOthes3GTails30Chrt',
	 'MPT.view.CellAvail.Avail3GOverview',
	 'MPT.view.CellAvail.Avail3GOverviewNMW',
	 'MPT.view.SleepingCells.NSN3GSleepingCellsGrid',
	 'MPT.view.RESET.OvernightResetList',
	 'MPT.view.RESET.OvernightResetAnlyChart',
	 'MPT.view.CellAvail.VHACellsOutageGrid',
	 'MPT.view.CellAvail.VHACellsOutageCDFChart',
	 'MPT.view.CellAvail.VHACellsOutagePanel',
	 'MPT.view.LTE.NSNLteTailCellGrid',
	 'MPT.view.LTE.NSNLteTailCellHourlyGrid',
	 'MPT.view.LTE.NSNLteCellUnavailHourlyGrid',
	 'MPT.view.LTE.NSNLteCellUnavailDailyGrid',
	 'MPT.view.LTE.NSNLTETailsReport',
	 'MPT.view.LTE.HUAWEILTETailsReport',
	 'MPT.view.OAM.ClusterTailsUpdForm',
	 'MPT.view.OAM.ClusterTailsQuerybyOwnerForm',
	 'MPT.view.OAM.ClusterTailsPanel',
	 'MPT.view.Realtime.RealtimeTailsGrid',
	 'MPT.view.CellAvail.NSWBushfireAvail',
	 'MPT.view.CellAvail.NSWBushfireOverview'
    ],

    refs: [
	{
            ref: 'examplePanel',
            selector: '#examplePanel'
        },{
            ref: 'exampleList',
            selector: 'exampleList'
        },{
            ref: 'hotLinkList',
            selector: 'hotLinkList'
	},{
            ref: 'oamView',
            selector: 'oamView'

	 },{
	     ref: 'tabContainer',
	     selector: 'tabContainer'
	}
    ],

    init: function() {
	if(window.console)
        {
        	console.log('In Main...!');
        }
        this.control({
            'viewport exampleList': {
                'select': function(me, record, item, index, e) {
                    if (!record.isLeaf()) {
                        return;
                    }
			if(window.console)
        		{
		      console.log(record.get('text'));
			//console.log(record.get('component'));
			console.log(this.classNameFromRecord(record));
			}
			//var tab =  Ext.ComponentQuery.query('tabContainer');
			if(record.get('text') == 'NSN 3G Tail Cells')
			{
				/*var panel = Ext.create('Ext.tab.Panel', {
							title : record.get('text'),
							closable : true,
							//iconCls : 'icon-activity'
							//height: 330,
							padding: 2,
							layout: 'fit',
							tbar: [{
								text: 'Refresh',
								handler: function() {
								var store = Ext.getStore('NSNProbCells');
								store.load();
								}
							}],
							items: [{
								xtype:'nsn3gchart'}]

						});*/
				var tab = this.getTabContainer()
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('NSNProbCells');
						store.load();
						}
					}],
					items: [{
						xtype:'nsn3gchart'}]
				}).show();
				//tab.setActiveTab(panel);
			}
			else if(record.get('text') == 'HUAWEI 3G Tail Cells')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('HWProbCells');
						store.load();
						}
					}],
					items: [{
						xtype:'hw3gchart'}]
				}).show();
			}
			else if(record.get('text') == 'Blended 3G Tail Cells')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('BlendedProbCells');
						store.load();
						}
					}],
					items: [{
						xtype:'blended3gchart'}]
				}).show();
			}
			else if(record.get('text') == 'NSN LTE Tail Cells (new!)')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('NSNLTETails');
						store.load();
						}
					}],
					items: [{
						xtype:'nsnltetails'}]
				}).show();
			}
			else if(record.get('text') == 'HUAWEI LTE Tail Cells (new!)')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('HUAWEILTETails');
						store.load();
						}
					}],
					items: [{
						xtype:'huaweiltetails'}]
				}).show();
			}
			else if(record.get('text') == 'Blended LTE Tail Cells (new!)')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('BlendedLTETails');
						store.load();
						}
					}],
					items: [{
						xtype:'blendedltetails'}]
				}).show();
			}
			else if(record.get('id')=='nsw_n_t14')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'NSW_North NSN 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('NSWNProbCells14');
							store.load();
							}
						},{
							text: 'Query',
							handler: function() {
								/*Ext.widget('window', {
									title: '',
									//closeAction: 'hide',
									width: 400,
									height

								}).show();*/
							}
						}],
						items: [{
						xtype:'nswnprobcells14'}]
					}]
				}).show();
			}
			else if(record.get('id')=='nsw_s_t14')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'NSW_South NSN 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('NSWSProbCells14');
							store.load();
						}
						}],
						items: [{
						xtype:'nswsprobcells14'}]
					}]
				}).show();
			}
			else if(record.get('id')=='qld_t14')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'QLD NSN 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('QLDProbCells14');
							store.load();
						}
						}],
						items: [{
						xtype:'qldprobcells14'}]
					}]
				}).show();
			}
			else if(record.get('id')=='sawant_t14')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',
					items: [{
						xtype: 'panel',
						title: 'SA/WA/NT NSN 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('SAWANTProbCells14');
							store.load();
						}
						}],
						items: [{
						xtype:'sawantprobcells14'}]
					}]

				}).show();
			}
			else if(record.get('id')=='nsn_rnc_7')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('NSNRNCTails7s');
						store.load();
						}
					}],
					items: [{
						xtype:'nsnRncTails7'}]
				}).show();
			}
			else if(record.get('id')=='hw_nsw_t30')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'NSW HUAWEI 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('HWNSWProbCells30');
							store.load();
						}
						}],
						items: [{
						xtype:'hwNSW3gTails30Chrt'}]
					}]
				}).show();
			}
			else if(record.get('id')=='hw_vic_t30')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'VIC HUAWEI 3G 30 days Tail Cells :',
						height: 600,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('HWVICProbCells30');
							store.load();
						}
						}],
						items: [{
						xtype:'hwVIC3gTails30Chrt'}]
					}]
				}).show();
			}
			else if(record.get('id')=='hw_sawatasm_t30')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'column',					
					items: [{
						xtype: 'panel',
						title: 'QLD/WA/SA/TASM HUAWEI 3G 30 days Tail Cells :',
						height: 330,
						columnWidth: 0.95,
						padding: 10,
						layout: 'fit',
						tbar: [{
							text: 'Refresh',
							handler: function() {
							var store = Ext.getStore('HW0thersProbCells30');
							store.load();
						}
						}],
						items: [{
						xtype:'hwOthers3gTails30Chrt'}]
					}]
				}).show();
			}
			else if(record.get('id')=='hw_rnc_7')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('HWRNCTails7');
						store.load();
						}
					}],
					items: [{
						xtype:'hwRncTails7'}]
				}).show();
			}
			else if(record.get('id')=='avail_overview')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					/*tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('MPT.store.CellAvail.OptusLeadAvail');
						store.load();
						}
					}],*/
					items: [{
						xtype:'avail3GOverview'}]
				}).show();
	
			}
			else if(record.get('id')=='avail_overview_nmw')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{
						xtype:'avail3GOverviewNMW'}]
				}).show();
	
			}
			else if(record.get('id')=='3g_avail_hw_tor')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();	
			}
			else if(record.get('id')=='3g_avail_nsn_tor')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();
			}
			else if(record.get('id')=='2g_avail_hw_tor')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();
			}
			else if(record.get('id')=='2g_avail_nsn_tor')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();
			}
			else if(record.get('id')=='avail_bushfire')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{
						xtype:'nswBushfireOverview'}]
				}).show();
			}
			else if(record.get('id')=='nsn_3g_sleeping_list')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('MPT.store.SleepingCells.NSN3GSleepingCells');
						store.load();
						}
					}],
					items: [{ 						
						xtype:'nsn3GSleepingCellsGrid'			
					}]					
				}).show();			
			}
			else if(record.get('id')=='hw_3g_sleeping_list')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();
			}
			/*else if(record.get('id')=='hw_3g_sleeping_list')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						html:'Under developement! Coming soon~'						
					}]					
				}).show();
			}*/
			else if(record.get('id')=='nsn3g_overnight_reset')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					/*tbar: [{
						text: 'Refresh',
						handler: function() {
						var store = Ext.getStore('MPT.store.RESET.OvernightResetSites');
						store.load();
						}
					}],*/
					items: [{ 						
						xtype:'overnightResetList'			
					}]						
				}).show();
			}
			else if(record.get('id')=='nsn3g_overnight_reset_anly')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'ovghtResetChart'				
					}]						
				}).show();
			}
			else if(record.get('id')=='vha_outage_list')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'vhaCellsOutagePanel'				
					}]						
				}).show();
			}
			else if(record.get('id')=='vha_outage_list_cdf')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'vhaCellsOutageCDFChart'				
					}]						
				}).show();
			}
			else if(record.get('id')=='nsn_lte_tails_d')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'nsnLteTailsReport'			
					}]						
				}).show();
			}
			else if(record.get('id')=='huawei_lte_tails_d')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'huaweiLteTailsReport'			
					}]						
				}).show();
			}
			/*else if(record.get('id')=='nsn_lte_tails_h')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'nsnLteTailCellHourlyGrid'			
					}]						
				}).show();
			}*/
			else if(record.get('id')=='nsn_lte_unavails_h')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'nsnLteCellUnavailHourlyGrid'			
					}]						
				}).show();
			}
			else if(record.get('id')=='nsn_lte_unavails_d')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 						
						xtype:'nsnLteCellUnavailDailyGrid'			
					}]						
				}).show();
			}
			else if(record.get('id')=='MPT_IFMS_TICKETS_GEOINFO')
			{
				window.open("http://goo.gl/maps/1l3RC", "_blank");
			}			

                    //this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                }  
               /* afterrender: function(){
                    var me = this,
                        className, exampleList, name, record;

                    setTimeout(function(){
                        className = location.hash.substring(1);
                        exampleList = me.getExampleList();

                        if (className) {
                            name = className.replace('-', ' ');
                            record = exampleList.view.store.find('text', name);     
                        } else {
					record = exampleList.view.store.find('text', 'grouped header grid');
				}

                        exampleList.view.select(record);
                    }, 0);
                }*/
            },
            'viewport hotLinkList': {
                'select': function(me, record, item, index, e) {
                    if (!record.isLeaf()) {
                        return;
                    }
			if(window.console)
        		{
		      console.log(record.get('text'));
			//console.log(record.get('component'));
			console.log(this.classNameFromRecord(record));
			}
			//var tab =  Ext.ComponentQuery.query('tabContainer');
			if(record.get('text') == 'S&P')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://slagnpappl001.optus.com.au/snp/root/Check3g.cgi"></iframe>'
						//html:'Stop the link based on RAE request....! :)'
					}]					
				}).show();
				//window.open("http://ramsvm.optus.com.au");
			}
			else if(record.get('id') == 'snpRnc')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://slagnpappl001.optus.com.au/rnc/index.cgi"></iframe>'
						//html:'TBD....! :)'
					}]					
				}).show();
				//window.Open();
			}
			else if(record.get('id')=='netops') {
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://netops32/default.html"></iframe>'
					}]					
				}).show();				
			}
			else if(record.get('id')=='cacti') {
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://mobilet2cactisrv/cacti/"></iframe>'
						//html:'To be developed!'						
					}]					
				}).show();						
			}
			else if(record.get('id')=='mnis') {
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://mnis.optus.com.au/mnis_prd/smm.startup"></iframe>'				
					}]					
				}).show();					
			}	
			else if(record.get('id')=='huawei_oam') {
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					items: [{ 
						html: '<iframe width="100%" height="100%" frameborder="0" src="http://172.22.74.66/Citrix/AccessPlatform/auth/login.aspx?NFuse_FromLoggedoutPage=1"></iframe>'				
					}]					
				}).show();					
			}		
		}},
            'viewport oamView': {
                'select': function(me, record, item, index, e) {
			if (!record.isLeaf()) {
				return;
			}
			if(window.console)
        		{
				console.log(record.get('text'));
				console.log(this.classNameFromRecord(record));
			}
			//var tab =  Ext.ComponentQuery.query('tabContainer');
			if(record.get('id') == 'cluster_tails_update')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					height: 500,
					//layout: 'vbox',
					items: [{ 
						//html: '<iframe width="100%" height="100%" frameborder="0" src="http://ramsvm.optus.com.au/snp/Check3g.cgi"></iframe>'
					//	xtype: 'cluterTailsUpdForm'
					//},{
						xtype: 'clusterTailsPanel'
					}]					
				}).show();
			}
			else if(record.get('id') == 'realtime_tails_nsn')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					autoScroll: true,
					items: [{ 
						//html: 'To Be Developed soon!'
						xtype: 'realtimeTailsGrid'
						//xtype: 'nsnLteTailCellHourlyGrid'
					}]
				}).show();
			}
			else if(record.get('id') == 'realtime_tails_huawei')
			{
				var tab = this.getTabContainer();
				tab.add({
					closable: true,
					title : record.get('text'),
					padding: 2,
					layout: 'fit',
					html: 'To Be Developed~'					
				}).show();
			}		
		}}
        });
    },
    setActiveExample: function(className, title) {
        var examplePanel = this.getExamplePanel(),
            path, example, className;
        
        if (!title) {
            title = className.split('.').reverse()[0];
        }
        
        //update the title on the panel
        examplePanel.setTitle(title);
        
        //remember the className so we can load up this example next time
        location.hash = title.toLowerCase().replace(' ', '-');

        //set the browser window title
        document.title = document.title.split(' - ')[0] + ' - ' + title;
        
        //create the example
        example = Ext.create(className);
        
        //remove all items from the example panel and add new example
        examplePanel.removeAll();
        examplePanel.add(example);
    },
    
    // Will be used for source file code
    // loadExample: function(path) {
    //     Ext.Ajax.request({
    //         url: path,
    //         success: function() {
    //             console.log(Ext.htmlEncode(response.responseText));
    //         }
    //     });
    // },

    filePathFromRecord: function(record) {
        var parentNode = record.parentNode,
            path = record.get('text');
        
        while (parentNode && parentNode.get('text') != "Root") {
            path = parentNode.get('text') + '/' + Ext.String.capitalize(path);

            parentNode = parentNode.parentNode;
        }

        return this.formatPath(path);
    },

    classNameFromRecord: function(record) {
        var path = this.filePathFromRecord(record);

        path = 'MPT.view.examples.' + path.replace('/', '.');

        return path;
    },

    formatPath: function(string) {
        var result = string.split(' ')[0].charAt(0).toLowerCase() + string.split(' ')[0].substr(1),
            paths = string.split(' '),
            ln = paths.length,
            i;

        for (i = 1; i < ln; i++) {
            result = result + Ext.String.capitalize(paths[i]);
        }

        return result;
    }
});
