
Ext.define('MPT.view.charts.NSNStatePie', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.nsnStatePie',
	theme: 'Base:gradients',
	animate: false,
	shadow: false,
	store: 'NSNStateBreakdown',
	insetPadding: 40,
	legend: {
		position: 'bottom',
		labelFont: '8px Helvetica, sans-serif'
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
					var store = Ext.getStore('NSNStateBreakdown');
					store.each(function(rec) {
						total += rec.get('TOTAL_NO');
					});
					//this.setTitle( storeItem.get('TOTAL_NO') + ": " + Math.round(storeItem.get('TOTAL_NO') / total * 100) + '%' );
					this.setTitle( storeItem.get('STATE') + " : " + Math.round(storeItem.get('TOTAL_NO') / total * 100) + '%' );
					//this.setTitle( String(item.value[0]) );

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
				font: '12px Helvetica, sans-serif' ,
				renderer: function(val) {
					var store = Ext.getStore('NSNStateBreakdown');
					var record = store.findRecord('STATE',val);
					return record.get('STATE') + " : " +record.get('TOTAL_NO');
				}
			}
			}]

});