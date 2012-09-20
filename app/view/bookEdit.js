Ext.define('Workbook.view.bookEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bookedit',

    config: {
        items: [
            {
                xtype: 'container',
                html: 'Please enter a book name below:',
                id: 'bookEditText',
                margin: 8,
                style: 'text-align:center;'
            },
            {
                xtype: 'textfield',
                id: 'bookName',
                name: 'title',
                label: 'Title'
            },
            {
                xtype: 'hiddenfield',
                id: 'bookID',
                name: 'id',
                value: 0
            },
            {
                xtype: 'button',
                margin: 8,
                id: 'saveBookButton',
                ui: 'confirm',
                text: 'Save Book',
                handler: function() {
                    var form = this.up('formpanel');
                    var store = Ext.getStore('BookStore');
                    var values = form.getValues();
                    if(values.id > 0) {
                        var index = store.find('id', values.id);
                        var record = store.getAt(index);
                        record.set(values);
                    } else {
                        delete values.id;
                        var record = Ext.ModelMgr.create(values, 'Workbook.model.Book');
                    }

                    store.add(record);
                    store.sync();
                    var main = this.up('navigationview');
                    main.pop(form);
                }
            },
            {
                xtype: 'button',
                margin: 8,
                ui: 'decline',
                text: 'Cancel',
                handler: function() {
                    var form = this.up('formpanel');
                    var main = this.up('navigationview');
                    main.pop(form);
                }
            }
        ]
    }

});