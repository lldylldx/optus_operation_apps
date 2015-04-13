Ext.define('MPT.store.OAMList', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
		{ id:'cluster_tails_update', leaf:true, icon: '../resources/img/cube_green.png', text: 'Cluster Tails Breaking Down' },
		{
                text: 'Real-Time Tail Cells Monitor', icon: '../resources/img/cubes_all.png',
                children: [
                    {
                        text: '3G', icon: '../resources/img/cubes_all.png', expanded: true,
                        children: [
                            { id:'realtime_tails_huawei', leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI' },
                            { id:'realtime_tails_nsn', leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN' }
                        ]
                    }
                ]
            }
        ]
    }
});