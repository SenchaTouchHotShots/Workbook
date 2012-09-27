Ext.define("Workbook.view.Main", {
    extend: 'Ext.NavigationView',
    requires: ['Ext.TitleBar','Ext.dataview.DataView'],
    config: {
        id: 'mainView',
        fullscreen: true,
        navigationBar : {
            docked : 'top',
            items : [
                {
                    text : 'Add Book',
                    align : 'right',
                    id: 'addBookButton'
                },
                {
                    text : 'Add Note',
                    align : 'right',
                    id: 'addNoteButton',
                    hidden: true
                }
            ]
        },
        items: [
            { xtype: 'booklist'}
        ]
    }
});