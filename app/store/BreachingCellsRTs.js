Ext.define('MPT.store.BreachingCellsRTs',{
    extend: 'Ext.data.Store',
    requires: 'MPT.model.BreachingCellsRT',
    //storeId: 'blendedProbCells',
    
    model: 'MPT.model.BreachingCellsRT',

    autoLoad:true,
    proxy: {
        type: 'ajax',
	 url: 'data/BreachingCellList_new_2013_01_02_15.json',
        //url: 'php/blended_prob_stat.php',

        reader: {
                type: 'json',
                root: 'mydata'
        }
    }
});