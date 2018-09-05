import React from 'react';
import { compareValueKeys } from './bsl-constants';
import { COMMON_CLASSES } from 'common/';

export const compareFunction = ( textValue, obj ) =>{
  let reg;
  try {
    reg = new RegExp( textValue, 'i' );
  } catch (error) {
    return [];
  }
  return (reg.test(obj[compareValueKeys.id]) || reg.test(obj[compareValueKeys.name]) ) ? true : false;
};

export const childConstructor = ( values, callback ) => {
  return (
    <tr onClick={callback} className={values.selected ? COMMON_CLASSES.arraySelected : undefined}>
      <td>{values.name}</td>
    </tr>
  );
};