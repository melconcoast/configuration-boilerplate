/* eslint-disable */
import Notes from './Notes';

dop.projectOverviewDeliveryConfiguration = {

  children: {
    myCard: {
      type: '${Card}',
      children: {
        myComponent: {
          type: Notes,
            props: {
                project: '${project}',
            }
        }
      }
    }
  }
};

