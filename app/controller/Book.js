Ext.define('Workbook.controller.Book', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['BookStore', 'NoteStore'],
        models: ['Book', 'Note'],
        views: ['bookEdit', 'noteEdit'],
        refs: {
            bookList: '#bookList',
            noteList: '#noteList',
            addBookButton: '#addBookButton',
            addNoteButton: '#addNoteButton',
            imageSelectButton: '#imageSelectButton',
            main: '#mainView'
        },

        control: {
            addBookButton: {
                tap: 'onAddBookButtonTap'
            },
            addNoteButton: {
                tap: 'onAddNoteButtonTap'
            },
            imageSelectButton: {
                tap: 'onImageSelectButtonTap'
            },
            bookList: {
                select: 'onBookSelect'
            },
            main: {
                back: 'onBackClicked'
            }
        }
    },
    onAddBookButtonTap: function(button, event, options) {
        var bookForm = Ext.create('Workbook.view.bookEdit');
        this.getMain().push(bookForm);
    },
    onBookSelect: function(dataview, record, options) {
        var noteList = Ext.create('Workbook.view.noteList');
        var bookID = record.getData().id;
        this.getMain().push(noteList);
        this.getAddNoteButton().show();
        this.getAddBookButton().hide();
        var noteStore = noteList.getStore();
        noteStore.filter("bookID", bookID);
        noteStore.load();
        noteList.setTitle(record.getData().title);
        noteList.bookID = bookID;
    },
    onBackClicked: function(button, options) {
        var store = Ext.getStore('NoteStore');
        var activeItem = this.getMain().getActiveItem();
        if(activeItem.id == 'bookList') {
            this.getAddNoteButton().hide();
            this.getAddBookButton().show();
            this.getBookList().deselectAll();
            store.clearFilter();
        } else if(activeItem.id == 'noteList') {
            this.getAddNoteButton().show();
            this.getAddBookButton().hide();
            this.getNoteList().deselectAll();
        }
    },
    onAddNoteButtonTap: function(button, event, options) {
        var noteForm = Ext.create('Workbook.view.noteEdit');
        this.getMain().push(noteForm);
        var record = Ext.create(
            'Workbook.model.Note', {
                title: '',
                note: '',
                bookID: this.getNoteList().bookID,
                id: 0
            });
        noteForm.setRecord(record);
    },
    onImageSelectButtonTap: function(button, event, options) {
        console.log(button, event, options);
    }
});