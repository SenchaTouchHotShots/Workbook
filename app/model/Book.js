Ext.define('Workbook.model.Book', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'sequential',
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'title',
                type: 'string'
            }
        ]
    }
});