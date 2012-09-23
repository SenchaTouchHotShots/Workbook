Ext.define('Workbook.view.noteDetails', {
    extend: 'Ext.Container',
    alias: 'widget.notedetails',
    config: {
        layout: 'fit',
        scrollable: {direction: 'vertical', directionLock: true},
        tpl: '<h1>{title}</h1><img src="http://placekitten.com/200/300" /><h5>{date}</h5><div class="notes">{notes}</div>'
    }
});