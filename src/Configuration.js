/* eslint-disable */
import MyComponent from './MyComponent'

dop.projectOverviewDeliveryConfiguration = {

  children: {
    pndCard: {
      props: {
        title: "Pnd Title From Delivery"
      }
    },
    deliveryCard: {
      type: '${Card}',
      props: {
        title: 'Card from Delivery Layer',
      },
      children:{
        planId:{
          type: MyComponent,
          props: {
            eventManager: '${eventManager}'
          }
        }
      }
    }
  }
};

