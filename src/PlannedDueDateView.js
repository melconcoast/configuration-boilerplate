import React from 'react';
import get from 'lodash/get';

class PlannedDueDateView extends React.Component {

    render() {
        let plannedDueDate = get(this.props.data, this.props.config.field);

        return (
            <div className="activity-name-cell ellipsis-cell" title={plannedDueDate}>
               {plannedDueDate}
            </div>
        );
    }
}

export default PlannedDueDateView;