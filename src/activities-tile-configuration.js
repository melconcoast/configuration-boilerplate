import PlannedDueDateView from './PlannedDueDateView';

export const deliveryActivitiesTileCoreConfig = {
    cells: {
        mainTile: {
            taskOwnerCell: {
                field: "additionalDetails.TaskOwnerId",
                view: "text"
            },
            plannedDueDate: {
              field: "plannedDueDate",
              format: "MMMM Do YYYY",
              view: "date"
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