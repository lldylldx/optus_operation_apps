Ext.define('MPT.store.FaultsStatisticsNSN',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.FaultsStatistics',    
    model: 'MPT.model.FaultsStatistics',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	 url: 'data/nsnFaultsAnaly.json',
        //url: 'php/hw_prob_stat.php',
        reader: {
                type: 'json',
                root: 'rows'
        }
    }
});