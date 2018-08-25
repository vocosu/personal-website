import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Button, Icon } from 'semantic-ui-react';

const ButtonHighlights = ({ icon, highlights, color }) => {
    return (
      <span>
        {highlights.map(h => (
          <Button
            key={shortid.generate()}
            style={{ margin: '3px' }}
            color={color}
            size="small"
          >
            {icon ? <Icon name={icon} /> : null}
            {h}
          </Button>
        ))}
      </span>
    );
  };
  
ButtonHighlights.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonHighlights;
