Ext.define('MPT.store.CellAvail.VHALeadAvailNMW',{
	extend:'Ext.data.Store',
	requires:'MPT.model.Avail3GCellWTarg',
	model:'MPT.model.Avail3GCellWTarg',
	autoLoad:true,
	proxy:{
		type:'ajax',
		//url:'data/CellAvail/optus_lead_cellAvail_WTarg.json',
		url: 'php/CellAvail/vha_lead_cellAvail_nmw.php',
		reader:{
			type:'json',
			root:'rows'
		}
	}
});