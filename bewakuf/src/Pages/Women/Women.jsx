import { Button } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import Bottomwarewomen from './Bottomware';
import Topwarewomen from './Topware';
import Winterwomen from './Winter';


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
      componentToRender = <Topwarewomen />;
      break;
    case 'WINTER':
      componentToRender = <Winterwomen />;
      break;
    default:
      componentToRender = <Bottomwarewomen />;
  }

  return (
    <div>
      <Button onClick={handleBottomwareClick}>Bottomware</Button>
      <Button onClick={handleTopwareClick}>Topware</Button>
      <Button onClick={handleWinterClick}>Winter</Button>
      {componentToRender}
    </div>
  );
};

export default Men;
