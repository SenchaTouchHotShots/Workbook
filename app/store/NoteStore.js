Ext.define('Workbook.store.NoteStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Workbook.model.Note'
    ],

    config: {
        model: 'Workbook.model.Note',
        storeId: 'NoteStore',
        autoLoad: false,
        proxy: {
            type: 'localstorage',
            id  : 'notes'
        }

    }
});