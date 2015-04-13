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

Ext.define('MPT.view.charts.HUAWEILTETails14', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.hwltetails14',
	theme: 'Fancy',
	//width: 500,
	//height: 300,

	animate: false,
	shadow: false,
	store: 'HUAWEILTETails14D',

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
			fields: ['RRC', 'ERAB_SSR', 'ERAB_DCR'],
			title: 'Number of Cells',
			grid: true,
			label: {
				font: '10px Arial',
				renderer: function(v) {
					return String(v);
				}
			},
			roundToDecimal: false
		},
		{
			type: 'Numeric',
			position: 'right',
			minimum: 0,
                	//maximum: 150,

			fields: ['TOTAL'],
			title: 'Total Cells',
			label: {
				font: '10px Arial',
				labelColor: '#000000',
				renderer: function(v) {
					return String(v);
				}
			}
		}, 
		{
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
			yField: ['RRC', 'ERAB_SSR', 'ERAB_DCR'],
			stacked: true,
			tips: {
				trackMouse: true,
				width: 100,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('DATE_TIME'),'Y-m-d') + ": " + String(item.value[1]));
				}
			}
		},
		{
			type: 'line',
			/*highlight: {
				size: 5,
				radius: 5
			},*/
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'DATE_TIME',
			yField: 'TOTAL',
			tips: {
				trackMouse: true,
				width: 120,
				height: 28,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('DATE_TIME'),'Y-m-d') + " TOTAL: " + String(item.value[1]));
				}
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#38B8BF'
			},
			style: {
				stroke: '#38B8BF',
				'stroke-width': 3,
				fill: '#38B8BF'
			}
		}
	]

});