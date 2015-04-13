Ext.define('MPT.view.charts.BlendedLTETails', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.blendedltetails',
	width: 1000,
	height: 600,
	theme: 'Base',
	animate: false,
	shadow: false,
	store: 'BlendedLTETails',
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
			fields: ['NSN', 'HUAWEI'],
			title: 'Number of Cells',
			grid: true,
			label: {
				//font: '16px Arial',
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
				//font: '16px Arial',
				renderer: Ext.util.Format.dateRenderer('d/m/Y'),
				rotate: { degrees: 315 }

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