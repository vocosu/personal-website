import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
    Container,
    Icon,
    Menu,
    Responsive,
    Sidebar,
  } from 'semantic-ui-react';

  import ReactGA from 'react-ga';
  
  import { resumeType } from '../person';
  import Basics from './Basics';
  import Education from './Education';
  import Interests from './Interests';
  import Projects from './Projects';
  import Work from './Work';
  
  const ResumeMenuItem = ({
    title,
    active,
    element,
    show,
    onClick,
  }) => {
    if (!show) {
      return false;
    }
  
    if (element) {
      return (
        <Menu.Item
          header
          name="Avatar"
          onClick={() => {
            onClick(title);
          }}
          active={active}
          content={element}
          className="avatar"
        />
      );
    }
  
    return (
      <Menu.Item
        name={title}
        header
        onClick={() => {
          onClick(title);
        }}
        active={active}
      />
    );
  };
  
  ResumeMenuItem.defaultProps = {
    element: undefined,
  };
  
  ResumeMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    element: PropTypes.element,
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default class Main extends React.Component {
    static propTypes = {
      jsonResume: resumeType.isRequired,
      inline: PropTypes.bool.isRequired,
    };
  
    constructor(props) {
      super(props);
  
      this.basicsWithSkills = Object.assign({}, this.props.jsonResume.basics, {
        skills: this.props.jsonResume.skills,
      });
  
      this.r = this.props.jsonResume;
  
      this.state = { activePage: 'about', visible: false };

      ReactGA.initialize('UA-110185330-1');
      ReactGA.pageview(window.location.pathname);
    }
  
    toggleVisible = () => {
      this.setState({ visible: !this.state.visible });
    };
  
    empty = (item) => {
      if (typeof item === 'undefined') {
        return true;
      }
      return item.length === 0;
    };
  
    handleMenuClick = (name) => {
      this.setState({
        activePage: name.toLowerCase(),
      });
    };
  
    makeInvisible = () => {
      this.setState({ visible: false });
    };
  
    render() {
      const content = {
        about: <Basics {...this.basicsWithSkills} />,
        experience: <Work work={this.r.work} />,
        education: <Education education={this.r.education} />,
        projects: <Projects projects={this.r.projects} />,
        interests: <Interests interests={this.r.interests} />,
      };
  
      const MenuItems = [
        {
          title: 'About',
          show: true,
          onClick: this.handleMenuClick,
          active: this.state.activePage === 'about',
        },
        {
          title: 'Experience',
          show: !this.empty(this.r.work),
          onClick: this.handleMenuClick,
          active: this.state.activePage === 'experience',
        },
        {
          title: 'Education',
          show: !this.empty(this.r.education),
          onClick: this.handleMenuClick,
          active: this.state.activePage === 'education',
        },
        {
          title: 'Projects',
          show: !this.empty(this.r.projects),
          onClick: this.handleMenuClick,
          active: this.state.activePage === 'projects',
        },
        {
          title: 'Interests',
          show: !this.empty(this.r.interests),
          onClick: this.handleMenuClick,
          active: this.state.activePage === 'interests',
        },
      ];
  
      const Content = (
        <Container>
          {content[this.state.activePage]}
        </Container>
      );
  
      const Full = (
        <div>
          <Menu fluid widths={9} fixed="top" stackable>
            {MenuItems.map(m => (
              <ResumeMenuItem
                title={m.title}
                element={m.element}
                show={m.show}
                onClick={m.onClick}
                active={m.active}
                key={shortid.generate()}
              />
            ))}
          </Menu>
          <div style={{ marginTop: '60px' }}>
            {Content}
          </div>
        </div>
      );
  
      const Mobile = (
        <div>
          <Menu fixed="top" borderless size="massive">
            <Menu.Item>
              <Icon name="bars" onClick={this.toggleVisible} />
            </Menu.Item>
          </Menu>
          <Sidebar.Pushable onClick={this.makeInvisible}>
            <Sidebar
              as={Menu}
              animation="overlay"
              width="thin"
              visible={this.state.visible}
              icon="labeled"
              vertical
              inverted
            >
              <div style={{ marginTop: '45px' }}>
                {MenuItems.map(m => (
                  <ResumeMenuItem
                    title={m.title}
                    element={m.element}
                    show={m.show}
                    onClick={m.onClick}
                    active={m.active}
                    key={shortid.generate()}
                  />
                ))}
              </div>
            </Sidebar>
            <Sidebar.Pusher style={{ marginTop: '60px' }}>
              {Content}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
  
      let Regular = Full;
      if (this.props.inline) {
        Regular = (
          <div>
            <Menu widths={9} secondary>
              {MenuItems.map(m => (
                <ResumeMenuItem
                  title={m.title}
                  element={m.element}
                  show={m.show}
                  onClick={m.onClick}
                  active={m.active}
                  key={shortid.generate()}
                />
              ))}
            </Menu>
            <div>
              {Content}
            </div>
          </div>
        );
      }
  
      return (
        <div>
          <Responsive {...Responsive.onlyMobile}>{Mobile}</Responsive>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            {Regular}
          </Responsive>
        </div>
      );
    }
  }
