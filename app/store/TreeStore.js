Ext.define('MPT.store.TreeStore', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: false,
        children: [
            {
                text: 'Tail Cells', icon: '../resources/img/cube_all.png',
                children: [
                    { leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN 3G Tail Cells' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'HW 3G Tail Cells' },
		      { leaf:true, icon: '../resources/img/cube_green.png', text: 'Blended 3G Tail Cells' }
                ]
            },
            {
                text: 'Real-Time Tail Cells Monitor', icon: '../resources/img/cube_all.png',
                children: [
                    {
                        text: '3G', icon: '../resources/img/cube_all.png',
                        children: [
                            { leaf:true, icon: '../resources/img/cube_green.png', text: 'HUAWEI' },
                            { leaf:true, icon: '../resources/img/cube_green.png', text: 'NSN' }
                        ]
                    }
                ]
            },
            { leaf:true, text: 'S&P' }
        ]
    }
});
