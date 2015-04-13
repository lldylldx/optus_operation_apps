Ext.define('Ext.chart.theme.Fancy02', {
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
            },
		colors: [ "#CCFF33","#FF5959",  "#BFCE6C","#FFAC53", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"]
        }, config)]);
    }
});

Ext.define('MPT.view.CellAvail.OptusLeadAvailWTarg', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.optusLeadAvailWTarg',
	requires:'MPT.store.CellAvail.OptusLeadAvailWTarg',
	theme: 'Fancy02',
	animate: false,
	shadow: false,
	store: 'MPT.store.CellAvail.OptusLeadAvailWTarg',
	insetPadding: 5,
	legend: {
		position: 'bottom',
		labelFont: '10px Helvetica, sans-serif'
	},
	axes: [{
			type: 'Numeric',
			position: 'left',
			minimum: 0,
             		//maximum: 200,
			fields: ['OUTAGE'],
			title: 'Outage of Hours',
			grid: true,
			label: {
				font: '10px Arial',
				renderer: function(v) {
					
					return String(v);
				}
			},
			roundToDecimal: false
		},{
			type: 'Numeric',
			position: 'right',
			minimum: 98,
                	maximum: 100,
			fields: ['AVAIL_RATE','TARGET_RATE'],
			title: 'Avail Rate(%)',
			label: {
				font: '10px Arial',
				labelColor: '#000000',
				renderer: function(v) {					
					return Ext.util.Format.number(v,'0.0');
				}
			}
		},{
			type: 'Category',
			position: 'bottom',
			fields: ['RECORD_TIME'],
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
			xField: 'RECORD_TIME',
			yField: ['OUTAGE'],
			//stacked: true,
			tips: {
				trackMouse: true,
				width: 100,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RECORD_TIME'),'Y-m-d') + ": " + String(item.value[1]));
				}
			}
		},{
			type: 'line',
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'RECORD_TIME',
			yField: 'AVAIL_RATE',
			tips: {
				trackMouse: true,
				width: 100,
				height: 50,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RECORD_TIME'),'Y-m-d') + " Avail Rate: " + String(item.value[1]) + "%");
				}
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#0000FF'
			},
			style: {
				stroke: '#0000FF',
				'stroke-width': 3,
				fill: '#0000FF'
			}
			},{
			type: 'line',
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'RECORD_TIME',
			yField: 'TARGET_RATE',
			tips: {
				trackMouse: true,
				width: 100,
				height: 50,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RECORD_TIME'),'Y-m-d') + " Target Rate: " + String(item.value[1]) + "%");
				}
			},
			/*markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#FF0000'
			},*/
			style: {
				stroke: '#FF0000',
				'stroke-width': 5,
				'stroke-dasharray': 10, 
				fill: '#FF0000'
			}
		}]

});