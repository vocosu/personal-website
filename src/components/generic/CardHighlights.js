import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Segment, Image } from 'semantic-ui-react';

import { hexToRgb } from '../../styles';

const CardHighlights = ({
  color,
  title,
  subtitle,
  text,
  highlights,
  images,
}) => {
  return (
    <div
      style={{
        borderLeft: `5px solid rgba(${hexToRgb(color)},.5)`,
        padding: '0px 0px 0px 20px',
        margin: '0px 0px 20px 0px',
      }}
    >
      {title && <Segment vertical>{title}</Segment>}
      {subtitle &&
        <Segment vertical>
          {subtitle}
        </Segment>}
      {text && <Segment vertical>{text}</Segment>}
      <div>
        {images ? images.map(i => (
            <Image
              key={shortid.generate()}
              src={i}
              style={{marginTop: '10px'}}
            />
          )): null}
      </div>
      {highlights && <Segment vertical>{highlights}</Segment>}
    </div>
  );
};

CardHighlights.defaultProps = {
  title: undefined,
  subtitle: undefined,
  text: undefined,
  highlights: undefined,
  images: undefined,
};

CardHighlights.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.element,
  subtitle: PropTypes.element,
  text: PropTypes.element,
  highlights: PropTypes.element,
  images: PropTypes.array,
};

export default CardHighlights