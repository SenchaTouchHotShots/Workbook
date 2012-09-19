Ext.define('Workbook.controller.Book', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['Book'],
        stores: ['BookStore'],
        refs: {
            bookList: '#bookList',
            addButton: '#addButton',
            main: '#mainView'
        },

        control: {
            addButton: {
                tap: 'onAddButtonTap'
            },
            bookList: {
                select: 'onBookSelect'
            }
        }
    },
    onAddButtonTap: function(button, event, options) {
        console.log('Tapped that!');
        console.log(button, event, options);
        var bookForm = Ext.create('Workbook.view.bookEdit');
        this.getMain().push(bookForm);
    },
    onBookSelect: function(dataview, record, options) {
        console.log('Book Selected!');
        console.log(dataview, record, options);
    }
});