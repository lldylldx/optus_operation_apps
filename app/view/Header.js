Ext.define('MPT.view.Header', {
    extend: 'Ext.Toolbar',
    xtype : 'pageHeader',
    
    ui   : 'sencha',
    height: 40,
    
    items: [
        {
            xtype: 'component',
            cls  : 'x-logo',
            html : 'MPT Portal'
        }
    ]
});
