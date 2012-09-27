Ext.define('Workbook.controller.Book', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['BookStore', 'NoteStore'],
        models: ['Book', 'Note'],
        views: ['bookEdit', 'noteEdit', 'noteList', 'bookList'],
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
            noteList: {
                select: 'onNoteSelect'
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
        console.log(dataview, record, options);
        var noteList = Ext.create('Workbook.view.noteList', {title: record.get('title')});
        var bookID = record.get('id');
        this.getMain().push(noteList);
        this.getAddNoteButton().show();
        this.getAddBookButton().hide();
        var noteStore = noteList.getStore();
        noteStore.filter("bookID", bookID);
        noteStore.load();
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
                bookID: this.getNoteList().bookID
            });
        noteForm.setRecord(record);
    },
    onImageSelectButtonTap: function(button, event, options) {
        console.log(button, event, options);
        var imageView = Ext.getCmp('imageView');
        var imageField = Ext.getCmp('imageField');
        Ext.device.Camera.capture({
            success: function(image) {
                imageView.setHtml('<img src="data:image/png;base64,'+image+'" width=200px height=200px />');
                imageField.setValue(image);
            },
            quality: 100,
            destination: 'data'
        });
    },
    onNoteSelect: function(dataview, record, options) {
        console.log(dataview, record, options);
        var noteDetails = Ext.create('Workbook.view.noteDetails');
        this.getMain().push(noteDetails);
        noteDetails.setRecord(record);
    }
});