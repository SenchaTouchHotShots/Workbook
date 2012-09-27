Ext.define('Workbook.view.bookList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.booklist',
    config: {
        title: 'Workbooks',
        styleHtmlContent: true,
        scrollable: {
        direction: 'vertical',
            directionLock: true
        },
        itemCls: 'bookItem',
        emptyText: 'You don\'t have any Workbooks. Click the Add button at the top of your screen to add a new Workbook',
        store: 'BookStore',
        id: 'bookList',
        itemTpl: '<img src="resources/icons/book.png" /><h4>{title}</h4>'
    }
});