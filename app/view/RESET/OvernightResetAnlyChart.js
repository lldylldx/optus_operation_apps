Ext.define('MPT.view.RESET.OvernightResetAnlyChart', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.ovghtResetChart',
	requires:'MPT.store.RESET.OvernightResetAnalysis',
	theme: 'Fancy01',
	animate: false,
	shadow: false,
	store: 'MPT.store.RESET.OvernightResetAnalysis',
	insetPadding: 20,
	minorTickSteps :1,
	legend: {
		position: 'bottom',
		labelFont: '10px Helvetica, sans-serif'
	},
	axes: [{
			type: 'Numeric',
			position: 'left',
			//minimum: 0,
             		//maximum: 200,
			fields: ['TOTAL'],
			title: 'No. of Reset Sites',
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
			//minimum: 98,
                	//maximum: 100,
			fields: ['UNRESTORED','RESTORED'],
			title: 'No. of Reset Sites',
			label: {
				font: '10px Arial',
				labelColor: '#000000'
				/*renderer: function(v) {					
					return Ext.util.Format.number(v,'0.0');
				}*/
			}
		},{
			type: 'Category',
			position: 'bottom',
			fields: ['RESET_TIME'],
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
			xField: 'RESET_TIME',
			yField: ['TOTAL'],
			//stacked: true,
			tips: {
				trackMouse: true,
				width: 100,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RESET_TIME'),'Y-m-d') + ": " + String(item.value[1]));
				}
			}
		},{
			type: 'line',
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'RESET_TIME',
			yField: 'RESTORED',
			tips: {
				trackMouse: true,
				width: 100,
				height: 40,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RESET_TIME'),'Y-m-d') + ": " +String(item.value[1]) + "(" + Ext.util.Format.number(100*item.value[1]/storeItem.get('TOTAL'),'0') + "%)");
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
				stroke: '#000FF',
				'stroke-width': 3,
				fill: '#0000FF'
			}
			},{
			type: 'line',
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'RESET_TIME',
			yField: 'UNRESTORED',
			tips: {
				trackMouse: true,
				width: 100,
				height: 40,
				renderer: function(storeItem, item) {
					this.setTitle(Ext.util.Format.date(storeItem.get('RESET_TIME'),'Y-m-d') + ": " + String(item.value[1]) + "(" + Ext.util.Format.number(100*item.value[1]/storeItem.get('TOTAL'),'0') + "%)");
				}
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				'fill': '#FF0000'
			},
			style: {
				stroke: '#FF0000',
				'stroke-width': 4,
				'stroke-dasharray': 2, 
				fill: '#FF0000'
			}
		}],
	initComponent: function() {
		Ext.getStore('MPT.store.RESET.OvernightResetAnalysis').load();		
		this.callParent(arguments);
	}

});