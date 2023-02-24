import { Button } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import Bottomware1 from './Bottomware/Bottomware1';
import Topware1 from './Topware/Topware1';
import Winter1 from './Winter/Winter1';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BOTTOMWARE':
      return { component: 'BOTTOMWARE' };
    case 'TOGGLE_TOPWARE':
      return { component: 'TOPWARE' };
    case 'TOGGLE_WINTER':
      return { component: 'WINTER' };
    default:
      return { component: 'BOTTOMWARE' };
  }
};

const Men = () => {
  const [state, dispatch] = useReducer(reducer, {});

  const handleBottomwareClick = () => {
    dispatch({ type: 'TOGGLE_BOTTOMWARE' });
  };

  const handleTopwareClick = () => {
    dispatch({ type: 'TOGGLE_TOPWARE' });
  };

  const handleWinterClick = () => {
    dispatch({ type: 'TOGGLE_WINTER' });
  };

  let componentToRender;
  switch (state.component) {
    case 'TOPWARE':
      componentToRender = <Topware1 />;
      break;
    case 'WINTER':
      componentToRender = <Winter1 />;
      break;
    default:
      componentToRender = <Bottomware1 />;
  }

  return (
    <div>
      <Button onClick={handleBottomwareClick}>Topware</Button>
      <Button onClick={handleTopwareClick}>Bottomware</Button>
      <Button onClick={handleWinterClick}>Winter</Button>
      {componentToRender}
    </div>
  );
};

export default Men;
