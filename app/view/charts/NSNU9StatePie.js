
Ext.define('MPT.view.charts.NSNU9StatePie', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.nsnU9StatePie',
	theme: 'Base:gradients',
	animate: false,
	shadow: false,
	store: 'NSNU9StatePie',
	insetPadding: 40,
	legend: {
		position: 'bottom',
		labelFont: '10px Helvetica, sans-serif'
	},
		series: [{
			type: 'pie',
			angleField: 'TOTAL_NO',
			showInLegend: true,
			tips: {
				trackMouse: true,
				width: 120,
				height: 28,
				renderer: function(storeItem, item) {
					var total = 0;
					var store = Ext.getStore('NSNU9StatePie');
					store.each(function(rec) {
						total += rec.get('TOTAL_NO');
					});
					this.setTitle( storeItem.get('STATE') + " : "  + Math.round(storeItem.get('TOTAL_NO') / total * 100) + '%' );

				}				
			},
			highlight: {
				segment: {
					margin: 10
				}
			},
			label: {
				field: 'STATE',
				display: 'rotate',
				contrast: true,
				font: '12px Helvetica, sans-serif', 
				renderer: function(val) {
					var store = Ext.getStore('NSNU9StatePie');
					var record = store.findRecord('STATE',val);
					return record.get('STATE') + " : " +record.get('TOTAL_NO');
				}
			}
			}]

});