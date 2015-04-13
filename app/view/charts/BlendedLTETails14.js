/*var colors = ['#555',
              '#666',
              '#777',
              '#888',
              '#999'];

var baseColor = '#eee';*/

Ext.define('Ext.chart.theme.Fancy', {
    extend: 'Ext.chart.theme.Base',

    constructor: function(config) {
        this.callParent([Ext.apply({
            axisTitleLeft: {
		  font: '12px Helvetica, sans-serif'
            },
            axisTitleBottom: {
		  font: '12px Helvetica, sans-serif'
            },
	     axisTitleRight: {
		  font: '12px Helvetica, sans-serif'
            }
        }, config)]);
    }
});

Ext.define('MPT.view.charts.BlendedLTETails14', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.blendedltetails14',
	theme: 'Fancy',
	animate: false,
	shadow: false,
	store: 'BlendedLTETails14',
	insetPadding: 15,
	legend: {
		position: 'bottom',
		labelFont: '8px Helvetica, sans-serif'
	},
	axes: [{
			type: 'Numeric',
			position: 'left',
			minimum: 0,
                	//maximum: 200,
			fields: ['NSN', 'HUAWEI'],
			title: 'Number of Cells',
			grid: true,
			label: {
				font: '10px Arial',
				renderer: function(v) {
					return String(v);
				}
			},
			roundToDecimal: false
			},{
			type: 'Category',
			position: 'bottom',
			fields: ['DATE_TIME'],
			title: 'Time',
			label: {
				font: '10px Arial',
				renderer: Ext.util.Format.dateRenderer('d/m/Y'),
				rotate: { degrees: 270 }

			}
	}],
	series: [{
			type: 'column',
			axis: 'left',
			xField: 'DATE_TIME',
			yField: ['NSN', 'HUAWEI'],
			stacked: true,
			tips: {
				trackMouse: true,
				width: 100,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('DATE_TIME'),'Y-m-d') + ": " + String(item.value[1]));
				}
			}
	}]

});