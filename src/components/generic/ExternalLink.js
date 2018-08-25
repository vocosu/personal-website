import React from 'react';
import PropTypes from 'prop-types';

import { hexToRgb } from '../../styles'

class ExternalLink extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    color: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let linkStyle = { color: this.props.color };
    if (this.state.hover) {
      linkStyle = { color: `rgba(${hexToRgb(this.props.color)}, .6)` };
    }

    return (
      <a
        href={this.props.href}
        style={linkStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.props.text}
      </a>
    );
  }
}

export default ExternalLink;
