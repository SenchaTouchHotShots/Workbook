Ext.define('Workbook.model.Note', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'bookID',
                type: 'int'
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'dateModified',
                type: 'date'
            },
            {
                name: 'notes',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            }
        ]
    }
});