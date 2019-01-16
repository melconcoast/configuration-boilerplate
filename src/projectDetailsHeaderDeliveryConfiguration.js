/* eslint-disable */
import ProjectAttributeElement from './ProjectAttributeElement'

dop.projectDetailsHeaderDeliveryConfiguration = {

  children: {
    paceField: {
      type: ProjectAttributeElement,
      props: {
        fieldName: 'paceField',
        label: 'PACE Number:',
        code: 'PaceId',
        attributes: '${project.projectAttribute}',
      }
    }
  }
};
