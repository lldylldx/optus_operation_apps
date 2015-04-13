Ext.define('MPT.view.charts.NSNLTETails', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.nsnltetails',
	theme: 'Base',
	width: 1000,
	height: 600,

	animate: false,
	shadow: false,
	store: 'NSNLTETails',

	insetPadding: 40,

	legend: {
		position: 'bottom',
		labelFont: '16px Helvetica, sans-serif'
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