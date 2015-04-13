Ext.define('MPT.view.charts.NSN3GChart', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.nsn3gchart',
	theme: 'Base',
	width: 1000,
	height: 600,
	insetPadding: 40,

	animate: false,
	shadow: false,
	store: 'NSNProbCells',
	legend: {
		position: 'bottom',
		labelFont: '8px Helvetica, sans-serif'
	},
		axes: [{
			type: 'Numeric',
			position: 'left',
			fields: ['RRC', 'RAB', 'DCR', 'HS'],
			title: 'Number of Cells',
			grid: true,
			label: {
				renderer: function(v) {
					return String(v);
				}
			},
			roundToDecimal: false
		},
		{
			type: 'Numeric',
			position: 'right',
			fields: ['TOTAL'],
			title: 'Total Cells',
			label: {
				labelColor: '#0000ff',
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
					this.setTitle(Ext.util.Format.date(storeItem.get('RECORD_TIME'),'Y-m-d') + " TOTAL: " + String(item.value[1]));
				}
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#0000ff'
			},
			style: {
				stroke: '#0000ff',
				'stroke-width': 3
			}
		}
		]
});
