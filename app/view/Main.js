Ext.define("Workbook.view.Main", {
    extend: 'Ext.NavigationView',
    requires: ['Ext.TitleBar'],
    config: {
        id: 'mainView',
        fullscreen: true,
        navigationBar : {
            docked : 'top',
            items : [
                {
                    text : 'Add',
                    align : 'left',
                    id: 'addButton'
                }
            ]
        },
        items: [
            {
                xtype: 'dataview',
                title: 'Workbooks',
                styleHtmlContent: true,
                scrollable: true,
                emptyText: 'You don\'t have any Workbooks. Click the Add button at the top of your screen to add a new Workbook',
                store: 'BookStore',
                id: 'bookList',
                itemTpl: '<img src="/resources/icons/book.png" /><h4>{title}</h4>'
            }
        ]
    }
});