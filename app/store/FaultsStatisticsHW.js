Ext.define('MPT.store.FaultsStatisticsHW',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.FaultsStatistics',    
    model: 'MPT.model.FaultsStatistics',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	 url: 'data/hwFaultsAnaly.json',
        //url: 'php/hw_prob_stat.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});