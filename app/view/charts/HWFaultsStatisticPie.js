Ext.define('MPT.view.charts.HWFaultsStatisticPie', {
	extend: 'Ext.chart.Chart',
	alias: 'widget.hwFaultsStatisticPie',
	theme: 'Base:gradients',
	animate: false,
	shadow: false,
	store: 'FaultsStatisticsHW',
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
					var store = Ext.getStore('FaultsStatisticsHW');
					store.each(function(rec) {
						total += rec.get('TOTAL_NO');
					});
					//this.setTitle( storeItem.get('TOTAL_NO') + ": " + Math.round(storeItem.get('TOTAL_NO') / total * 100) + '%' );
					this.setTitle( storeItem.get('FAULT_TYPE') + " : " + Math.round(storeItem.get('TOTAL_NO') / total * 100) + '%' );
					//this.setTitle( String(item.value[0]) );

				}				
			},
			highlight: {
				segment: {
					margin: 10
				}
			},
			label: {
				field: 'FAULT_TYPE',
				display: 'rotate',
				contrast: true,
				font: '12px Helvetica, sans-serif' ,
				renderer: function(val) {
					var store = Ext.getStore('FaultsStatisticsHW');
					var record = store.findRecord('FAULT_TYPE',val);
					return record.get('FAULT_TYPE') + " : " +record.get('TOTAL_NO');
				}
			}
			}]

});