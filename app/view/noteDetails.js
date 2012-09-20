Ext.define('Workbook.view.noteDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.notedetails',
    config: {
        tpl: '<h1>{title}</h1><img src="http://placekitten.com/200/300" /><h5>{date}</h5><div class="notes">{notes}</div>'
    }
});