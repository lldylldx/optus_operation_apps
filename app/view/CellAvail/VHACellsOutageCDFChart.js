Ext.define('MPT.view.CellAvail.VHACellsOutageCDFChart', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.vhaCellsOutageCDFChart',
	requires:'MPT.store.CellAvail.VHACellsOutageCDF',
	theme: 'Fancy02',
	animate: false,
	shadow: false,
	store: 'MPT.store.CellAvail.VHACellsOutageCDF',
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
			fields: ['CELL_COUNT'],
			title: 'No. of Cells',
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
			fields: ['PCT_DIST'],
			title: 'PCT_DIST',
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
			fields: ['HOUR_DIVISION'],
			title: 'HOUR_DIVISION'+' (' + Ext.util.Format.date(new Date(),'d/m/Y') +')',
			label: {
				font: '10px Arial',
				//renderer: Ext.util.Format.dateRenderer('d/m/Y'),
				rotate: { degrees: 270 }

			}
		}],
	series: [{
			type: 'column',
			axis: 'left',
			xField: 'HOUR_DIVISION',
			yField: ['CELL_COUNT'],
			//stacked: true,
			tips: {
				trackMouse: true,
				width: 50,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(String(item.value[1]));
				}
			}
		},{
			type: 'line',
			axis: 'right',
			smooth: true,
			//fill: true,
			//fillOpacity: 0.5,
			xField: 'HOUR_DIVISION',
			yField: 'PCT_DIST',
			tips: {
				trackMouse: true,
				width: 50,
				height: 25,
				renderer: function(storeItem, item) {
					this.setTitle(String(item.value[1]));
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
		}],
	initComponent: function() {
		Ext.getStore('MPT.store.CellAvail.VHACellsOutageCDF').load();		
		this.callParent(arguments);
	}

});