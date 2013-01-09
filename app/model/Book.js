Ext.define('Workbook.model.Book', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'id',
                type: 'string'
            },
            {
                name: 'title',
                type: 'string'
            }
        ]
    }
});