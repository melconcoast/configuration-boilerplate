/* eslint-disable */
import MyType from './MyComponent';

dop.projectDetailsHeaderDeliveryConfiguration = {

  children: {
    newField: {
      type: MyType,
      props: {
        fieldName: 'statusField',
        label: 'New Status Field',
        value: '${project.status.decode}'

      }
    },
    delayField: {
      props: {
        hide: true,
        style: {color: 'blue'}
      }
    },
  }

};

