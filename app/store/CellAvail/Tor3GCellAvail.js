Ext.define('MPT.store.CellAvail.Tor3GCellAvail',{
	extend:'Ext.data.Store',
	requires:'MPT.model.Avail3GCellWTarg',
	model:'MPT.model.Avail3GCellWTarg',
	autoLoad:true,
	proxy:{
		type:'ajax',
		//url:'data/CellAvail/optus_lead_cellAvail_WTarg.json',
		url: 'php/CellAvail/tor_3G_cellAvail.php',
		reader:{
			type:'json',
			root:'rows'
		}
	}
});