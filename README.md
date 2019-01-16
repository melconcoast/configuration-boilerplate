# configuration-boilerplate for searchable project attribute

To add a new searchable attribute in project header add a new field in _children_ object.

**Here is an example -**

```javascript
children_: {
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
  ```
  
* **paceField** : unique field id
* **PACE Number:** : field display name
* **code** : attribute code in _project.projectAttribute_ Object
* **project.projectAttribute** : Object where all searchable attributes will be present.

__Thants all!__
