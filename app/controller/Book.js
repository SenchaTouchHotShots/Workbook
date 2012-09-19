Ext.define('Workbook.controller.Book', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['BookStore', 'NoteStore'],
        refs: {
            bookList: '#bookList',
            addBookButton: '#addBookButton',
            addNoteButton: '#addNoteButton',
            main: '#mainView'
        },

        control: {
            addBookButton: {
                tap: 'onAddButtonTap'
            },
            bookList: {
                select: 'onBookSelect'
            },
            main: {
                back: 'onBackClicked'
            }
        }
    },
    onAddButtonTap: function(button, event, options) {
        var bookForm = Ext.create('Workbook.view.bookEdit');
        this.getMain().push(bookForm);
    },
    onBookSelect: function(dataview, record, options) {
        var noteList = Ext.create('Workbook.view.noteList');
        console.log(noteList.getStore());
        this.getMain().push(noteList);
        this.getAddNoteButton().show();
        this.getAddBookButton().hide();
        noteList.getStore().load();
    },
    onBackClicked: function(button, options) {
        console.log(button, options);
        var activeItem = this.getMain().getActiveItem();
        if(activeItem.id == 'bookList') {
            this.getAddNoteButton().hide();
            this.getAddBookButton().show();
            this.getBookList().deselectAll();
        }
    }
});