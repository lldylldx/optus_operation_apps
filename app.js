Ext.Loader.setConfig({ enabled: true });
//Ext.Loader.setPath('Ext.ux', '../../extjs41/examples/ux');

/*Ext.onReady(function() {
  setTimeout(function(){
    Ext.get('loading').remove();
    Ext.get('loading-mask').fadeOut({remove:true});
  }, 1500);
});*/

Ext.application({

	name: 'MPT',
	appFolder: 'app',
	controllers: ['Main','GridUpdate'],
	enableQuickTips : true,
	autoCreateViewport: true
});
