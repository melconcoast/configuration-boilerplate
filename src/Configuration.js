import MyColumn from './MyColumn';

dop.deliveryProjectsListConfiguration = {

    tableConfiguration: {
        columnsOrder: ["MyColumn"],
        columns: {
            MyColumn: {
                label: "My Column7777777777",
                field: "currentEstimatedDate",
                view: MyColumn,
                showDelay: true,
                width: "80px",
                resizable: true,
                minWidth: "80px"
            }
        }
    },
    filtersConfiguration: {
        filtersOrder: ["MyColumn"],
        filters: {
            MyColumn: {
                hideHeader: false,
                label: "My Filter77777777",
                controls: {
                    bookmarkControl: {
                        type: "checkBox",
                        options: [{
                            decode: 'filter_checkbox_show_only_bookmarks',
                            code: 1
                        }],
                        filterCriterions: [{
                            fieldName: 'id',
                            type: 'string',
                            operator: 'in'
                        }]
                    }
                }
            }
        }

    }

};