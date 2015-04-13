Ext.define('MPT.controller.TaskDaisy', {
    extend: 'Ext.app.Controller',
	views: ['StartingCharts'],
	models: ['NSNProbCell'],
	stores: ['NSNProbCells'],
    	init: function() {
	if(window.console)
	{
	console.log('In TaskDaisy...!');
	}
    }

});
