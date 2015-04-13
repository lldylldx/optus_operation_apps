Ext.define('MPT.view.charts.HW3GChart', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.hw3gchart',
	//id: 'nsn3gchart',
	//animate: true,
	//shadow: true,
	//store: '',
	theme: 'Base',
	width: 1000,
	height: 600,
	insetPadding: 40,

	animate: false,
	shadow: false,
	store: 'HWProbCells',
	legend: {
		position: 'bottom',
		labelFont: '16px Helvetica, sans-serif'
	},
		axes: [{
			type: 'Numeric',
			position: 'left',
			minimum: 0,
			fields: ['RRC', 'RAB', 'DCR', 'HS'],
			title: 'Number of Cells',
			grid: true,
			label: {
					renderer: function(v) {
					return String(v);
				}
			},
			//maximum: 200,
			roundToDecimal: false
		},
		{
			type: 'Numeric',
			position: 'right',
			fields: ['TOTAL'],
			title: 'Total Cells',
			label: {
				//font: '10px Arial',
				labelColor: '#0000ff',
				renderer: function(v) {
					return String(v);
				}
			}
			//maximum: 200
		}, 
		{
			type: 'Category',
			position: 'bottom',
			fields: ['DATE_TIME'],
			title: 'Time',
			label: {
				//font: '10px Arial',
				renderer: Ext.util.Format.dateRenderer('d/m/Y'),
				rotate: { degrees: 315 }

			}
		}],
		series: [{
			type: 'column',
			axis: 'left',
			xField: 'DATE_TIME',
			yField: ['RRC', 'RAB', 'DCR', 'HS'],
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
			highlight: {
				size: 5,
				radius: 5
			},
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'DATE_TIME',
			yField: 'TOTAL',
			tips: {
				trackMouse: true,
				width: 100,
				height: 30,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('DATE_TIME'),'Y-m-d') + " TOTAL: " + String(item.value[1]));
				}
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#00ff00'
			},
			style: {
				stroke: '#00ff00',
				'stroke-width': 3
			}
		}
		]
});
