Ext.define('MPT.store.Examples', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            {
                text: 'Tail Cells', expanded: true, icon: '../resources/img/cubes_all.png',
                children: [
                    { leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN 3G Tail Cells' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI 3G Tail Cells' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'Blended 3G Tail Cells' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN LTE Tail Cells (new!)' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI LTE Tail Cells (new!)' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'Blended LTE Tail Cells (new!)' },			
			{ icon: '../resources/img/cubes_all.png', expanded: true, text: 'NSN 3G Tail Cells Drill Down',
			children: [
			{ id:'nsw_n_t14', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSW_N' },
			{ id:'nsw_s_t14', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSW_S' },
			{ id:'qld_t14', leaf:true, icon: '../resources/img/cube_green.png', text: 'QLD' },
			{ id:'sawant_t14', leaf:true, icon: '../resources/img/cube_green.png', text: 'WA/SA/NT' },
			{ id:'nsn_rnc_7', leaf:true, icon: '../resources/img/cube_green.png', text: 'RNC level 7 days' }
			]
			},
			{ icon: '../resources/img/cubes_all.png', expanded: true, text: 'HUAWEI 3G Tail Cells Drill Down',
			children: [
			{ id:'hw_nsw_t30', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSW' },
			{ id:'hw_vic_t30', leaf:true, icon: '../resources/img/cube_green.png', text: 'VIC' },
			{ id:'hw_sawatasm_t30', leaf:true, icon: '../resources/img/cube_green.png', text: 'QLD/WA/SA/TAS' },
			{ id:'hw_rnc_7', leaf:true, icon: '../resources/img/cube_green.png', text: 'RNC level 7 days' }
			]
			}
                ]
            },
	     {
                text: 'Sleeping Cells', expanded: false, icon: '../resources/img/cubes_all.png',
                children: [{ 
					icon: '../resources/img/cubes_all.png', expanded: true, text: 'NSN Sleeping Cells',
					children: [{ 
						id:'nsn_3g_sleeping_list', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN 3G Sleeping Cells' 
						}]
				},{ 
					icon: '../resources/img/cubes_all.png', expanded: false, text: 'HUAWEI Sleeping Cells',
					children: [{ 
						id:'hw_3g_sleeping_list', leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI 3G Sleeping Cells' 
						}]

				}]
            },	     
            /*{
                text: 'Network Availability', icon: '../resources/img/cubes_all.png',
                children: [
			 { id:'avail_overview', leaf:true, icon: '../resources/img/cube_green.png', text: '3G JV Availability Overview' },
			 { id:'avail_overview_nmw', leaf:true, icon: '../resources/img/cube_green.png', text: '3G JV Availability Overview (None Maintenance Window)' },
			 { id:'vha_outage_list', leaf:true, icon: '../resources/img/cube_green.png', text: '3G VHA Cells Outage List' },
			 { id:'vha_outage_list_cdf', leaf:true, icon: '../resources/img/cube_green.png', text: '3G VHA Cells Outage CDF Chart' },
                      { id:'3g_avail_hw_tor', leaf:true, icon: '../resources/img/cube_green.png', text: 'Torrent 3G HUAWEI Availability' },
                      { id:'3g_avail_nsn_tor', leaf:true, icon: '../resources/img/cube_green.png', text: 'Torrent 3G NSN Availability' },
			 { id:'2g_avail_hw_tor', leaf:true, icon: '../resources/img/cube_green.png', text: 'Torrent 2G HUAWEI Availability' },
			 { id:'2g_avail_nsn_tor', leaf:true, icon: '../resources/img/cube_green.png', text: 'Torrent 2G NSN Availability' },
			 { id:'avail_bushfire', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSW Bushfire Cells Availability(Daily)' }

                ]
            },*/
            /*{
                text: 'Auto Reset', expanded: false, icon: '../resources/img/cubes_all.png',
                children: [
			 { id:'nsn3g_overnight_reset', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN 3G Overnight Reset List' },
			 { id:'nsn3g_overnight_reset_anly', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN 3G Overnight Reset Analysis' }
                ]
            },*/
            {
                text: 'LTE', expanded: true, icon: '../resources/img/cubes_all.png',
                children: [
			 { id:'nsn_lte_tails_d', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN LTE Daily Tail Cells Report (new!)' },
			 { id:'huawei_lte_tails_d', leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI LTE Daily Tail Cells Report (new!)' },
			 { id:'nsn_lte_unavails_d', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN LTE Hourly Tail Cells Report' },
			 { id:'nsn_lte_unavails_h', leaf:true, icon: '../resources/img/cube_green.png', text: 'HAUWEI LTE Hourly Tail Cells Report' }
                ]
            }
	     /*{
		id:'MPT_IFMS_TICKETS_GEOINFO', leaf:true, icon: '../resources/img/cubes_all.png', text: 'MPT IFMS TICKETS GEOINFO'
	     }
            { id:'snp', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'S&P' },
	     { id: 'snpRnc', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'S&P RNC level' },
	     { id: 'netops', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'NetOps' },
	     { id: 'gnoc', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'GNOC Reset' }*/
        ]
    }
});
