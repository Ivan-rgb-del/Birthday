import React, { useState } from 'react';

import data from '../data/data';
import Card from './Card';

const List = () => {
  const [people, setPeople] = useState(data);

  const handlderClearData = () => {
    setPeople([]);
  };

  return (
    <Card
      people={people}
      deleteHandler={handlderClearData}
    />
  )
};

export default List;