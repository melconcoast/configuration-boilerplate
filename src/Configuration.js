/* eslint-disable */
import MyComponent from './MyComponent';
import { deliveryActivitiesTileCoreConfig } from './activities-tile-configuration';
const BASE_URL = 'app/amdocs/smallcell/components/business/project-overview/';
const ICONS_URL = BASE_URL + 'icons/';

dop.projectOverviewDeliveryConfiguration = {

  children: {
    pndCard: {
      props: {
        actions: {
          'pndActionFromDelivery': {
            displayName: 'Action From Delivery',
            iconURL: ICONS_URL + 'SV_ANN.svg',
            iconURLHover: ICONS_URL + 'SV_ANN.svg',
            onClick: function() {
              alert('Action from delivery clicked');
            }
          },
        }
      }
    },
    milestonesCard: {
      props: {
        actions: {
          'seeAllMilestonesAction': "_REMOVE"
        }
      },
    },
    activitiesCard: {
      children: {
        activitiesList: {
          props: {
            tileConfiguration: deliveryActivitiesTileCoreConfig
          }
        }
      }
    },
    MyComponent: {
      type: '${Card}',
      children: {
        myComponent: {
          type: MyComponent
        }
      }
    }
  }
};

