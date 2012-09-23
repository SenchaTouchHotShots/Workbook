Ext.define('Workbook.view.noteList', {
    extend: 'Ext.dataview.DataView',
    config: {
        id: 'noteList',
        itemId: 'noteList',
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        itemTpl: '<img src="/resources/icons/note.png" /><h4>{title}</h4><h5>{dateModified:date("m/d/Y, g:i a")}</h5>',
        store: 'NoteStore',
        emptyText: 'You don\'t have any Notes in this Workbook. Click the Add button at the top of your screen to add a new Note to the Workbook',
        title: 'Notes For'
    }
});