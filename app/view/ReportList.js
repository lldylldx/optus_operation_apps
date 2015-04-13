Ext.define('MPT.view.ReportList', {
    extend: 'Ext.tree.Panel',
    xtype: 'exampleList',
    
    requires: [
        'MPT.store.Examples'
    ],
    
    title: 'Navigation',
    rootVisible: false,
    //cls: 'examples-list',
    //hideHeaders: true,
    //collapsible: true,
    lines: true,
    useArrows: true,    
    store: 'Examples'
});
