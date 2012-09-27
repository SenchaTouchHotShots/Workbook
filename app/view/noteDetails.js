Ext.define('Workbook.view.noteDetails', {
    extend: 'Ext.Container',
    alias: 'widget.notedetails',
    config: {
        layout: 'fit',
        scrollable: {direction: 'vertical', directionLock: true},
        tpl: '<h1>{title}</h1><img src="data:image/png;base64,{image}" width='+Ext.Viewport.getWindowWidth()+'/><h5>{date}</h5><div class="notes">{notes}</div>'
    }
});