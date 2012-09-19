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
                name: 'bookID',
                value: 0
            },
            {
                xtype: 'button',
                margin: 8,
                ui: 'confirm',
                text: 'Save',
                handler: function() {
                    var form = this.up('formpanel');
                    var store = Ext.getStore('BookStore');
                    var values = form.getValues();
                    if(values.bookID > 0) {
                        var index = store.find('bookID', values.bookID);
                        var record = store.getAt(index);
                        record.set(values);
                    } else {
                        var record = Ext.ModelMgr.create(form.getValues(), 'Workbook.model.Book');
                    }
                    console.log(store);
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