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

Ext.define('MPT.view.charts.HWRNCTails7', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.hwRncTails7',
	theme: 'Fancy',
	animate: false,
	shadow: false,
	store: 'HWRNCTails7',
	insetPadding: 15,

	legend: {
		position: 'bottom',
		labelFont: '8px Helvetica, sans-serif'
	},
		axes: [{
			type: 'Numeric',
			position: 'bottom',
			minimum: 0,
                	//maximum: 200,
			fields: ['TODAY-7', 'TODAY-6', 'TODAY-5', 'TODAY-4', 'TODAY-3', 'TODAY-2', 'TODAY-1'],
			title: 'Number of Tail Cells',
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
			type: 'Category',
			position: 'left',
			fields: ['RNC_NAME'],
			title: 'RNC NAME',
			label: {
				font: '10px Arial'
				//renderer: Ext.util.Format.dateRenderer('d/m/Y'),
				//rotate: { degrees: 270 }

			}
		}],
		series: [{
			type: 'bar',
			axis: 'bottom',
			xField: 'RNC_NAME',
			yField: ['TODAY-7', 'TODAY-6', 'TODAY-5', 'TODAY-4', 'TODAY-3', 'TODAY-2', 'TODAY-1'],
			//stacked: true,
			tips: {
				trackMouse: true,
				width: 50,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(String(item.value[1]));
				}
			}
		}
	]

});