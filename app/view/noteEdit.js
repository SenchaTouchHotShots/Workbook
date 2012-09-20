Ext.define('Workbook.view.noteEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.noteedit',
    config: {
        items: [
            {
                xtype: 'container',
                html: 'Please enter a note title, notes and select an image below:',
                id: 'noteEditText',
                margin: 8,
                style: 'text-align:center;'
            }, {
                xtype: 'button',
                text: 'Select Image',
                id: 'imageSelectButton',
                width: 220,
                style: 'margin-top: 10px; margin-right:auto; margin-left:auto; margin-bottom: 15px;'
            },
            {
                xtype: 'textfield',
                id: 'noteTitle',
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
                xtype: 'hiddenfield',
                id: 'noteID',
                name: 'id',
                value: 0
            },
            {
                xtype: 'textareafield',
                id: 'notesArea',
                name: 'notes',
                label: 'Notes',
                value: ''
            },
            {
                xtype: 'button',
                margin: 8,
                ui: 'confirm',
                text: 'Save',
                id: 'saveNoteButton',
                handler: function() {
                    var form = this.up('formpanel');
                    var store = Ext.getStore('NoteStore');
                    var values = form.getValues();
                    if(values.id > 0) {
                        var index = store.find('id', values.id);
                        var record = store.getAt(index);
                        record.set(values);
                        var date = new Date();
                        record.set('dateModified', date);
                    } else {
                        delete values.id;
                        var record = Ext.ModelMgr.create(values, 'Workbook.model.Note');
                        var date = new Date();
                        record.set('dateModified', date);
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