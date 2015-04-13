Ext.define('MPT.view.CellAvail.NSWBushfireAvail2G', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.nswBushfireAvail2G',
	requires:'MPT.store.CellAvail.NSWBushfireAvail2G',
	theme: 'Fancy02',
	animate: false,
	shadow: false,
	store: 'MPT.store.CellAvail.NSWBushfireAvail2G',
	insetPadding: 5,
	legend: {
		position: 'bottom',
		labelFont: '10px Helvetica, sans-serif'
	},
	axes: [{
			type: 'Numeric',
			position: 'left',
			minimum: 0,
             		//maximum: 400,
			fields: ['OUTAGE'],
			title: 'Total Cell Outage(hour)',
			grid: true,
			label: {
				font: '10px Arial',
				renderer: function(v) {					
					//return String(v);
					return Ext.util.Format.number(v,'0.00');
				}
			}
			//roundToDecimal: false
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
				width: 150,
				height: 30,
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
			style: {
				stroke: '#FF0000',
				'stroke-width': 5,
				'stroke-dasharray': 10, 
				fill: '#FF0000'
			}
		}]

});