Ext.define('Workbook.view.noteList', {
    extend: 'Ext.dataview.List',
    config: {
        id: 'NoteList',
        itemId: 'noteList',
        itemTpl: [
            '<div class="noteTitle">{title}<div class="noteMeta">{dateModified:date("M j, Y, g:i a")}</div>'
        ],
        store: 'NoteStore',
        onItemDisclosure: false,
        emptyText: 'You don\'t have any Notes in this Workbook. Click the Add button at the top of your screen to add a new Note to the Workbook',
        preventSelectionOnDisclose: false,
        title: 'Notes For'
    }
});