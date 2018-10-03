import PlannedDueDateView from './PlannedDueDateView';

export const deliveryActivitiesTileCoreConfig = {
    cells: {
        mainTile: {
            taskOwnerCell: {
                field: "extension.TaskOwnerId",
                view: "text"
            },
            activityStatusCell: "_REMOVE",
        },
        dateTile: {
            dueDateCell: {
                format: "MMMM Do YYYY"
            },
        }
    }
};