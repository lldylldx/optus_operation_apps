Ext.define('MPT.store.HotLinks', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
		{ id:'snp', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'S&P' },
		{ id: 'snpRnc', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'Performance -RNC level' },
		{ id: 'netops', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'NetOps' },
		{ id: 'cacti', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'Huawei Cacti' },
		{ id: 'mnis', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'MNIS' },
		{ id: 'huawei_oam', leaf:true, icon: '../resources/img/cube_yellow.png', text: 'HUAWEI CITRIX' }
        ]
    }
});
