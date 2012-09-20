Ext.define('Workbook.store.BookStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Workbook.model.Book'
    ],

    config: {
        model: 'Workbook.model.Book',
        autoLoad: true,
        storeId: 'BookStore',
        proxy: {
            type: 'localstorage',
            id  : 'books'
        }

    }
});