import React from 'react';
import PropTypes from 'prop-types';

import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/themes/default/assets/fonts/icons.ttf';

import { person, resumeType } from '../person';
import Default from './Main';

const themes = {
  default: Default,
};

const Resume = ({ theme, jsonResume, inline }) => {
  const ThemedResume = themes[theme];
  return <ThemedResume inline={inline} jsonResume={jsonResume} />;
};

Resume.defaultProps = {
  jsonResume: person,
  theme: 'default',
  inline: false,
};

Resume.propTypes = {
  jsonResume: resumeType.isRequired,
  theme: PropTypes.string,
  inline: PropTypes.bool,
};

export default Resume;
