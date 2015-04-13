var colors = ['#555',
              '#666',
              '#777',
              '#888',
              '#999'];

var baseColor = '#eee';

Ext.define('MPT.view.MyTheme', {
    extend: 'Ext.chart.theme.Base',

    constructor: function(config) {
        this.callParent([Ext.apply({
            axisTitleLeft: {
                fill: baseColor,
		  font: '11px Arial'
            },
            axisTitleBottom: {
                fill: baseColor,
		  font: '11px Arial'
            },
            colors: colors
        }, config)]);
    }
});