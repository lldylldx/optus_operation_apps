Ext.define('MPT.store.CellAvail.NSWBushfireAvail',{
	extend:'Ext.data.Store',
	requires:'MPT.model.Avail3GCellWTarg',
	model:'MPT.model.Avail3GCellWTarg',
	autoLoad:true,
	proxy:{
		type:'ajax',
		url: 'php/CellAvail/nsw_Bushfire_cellAvail.php',
		//url:'data/CellAvail/nswBushfireAvailNMW.json',
		reader:{
			type:'json',
			root:'rows'
		}
	}
});