import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';
import { Icon } from 'semantic-ui-react';

import ButtonHighlights from './generic/ButtonHighlights';
import CardHighlights from './generic/CardHighlights';
import ExternalLink from './generic/ExternalLink';
import { bold, c, color, colors, emOneTwo, emTwo, faded } from '../styles';
import { projectsType } from '../person';

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map(j => (
        <CardHighlights
          key={shortid.generate()}
          color={colors.purple}
          title={
            <span style={c(emTwo, bold, color(colors.purple))}>
              <Icon name="newspaper" />
              {j.website
                ? <ExternalLink
                    href={j.website}
                    text={j.name}
                    color={colors.purple}
                />
                : j.name}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown escapeHtml={false} source={j.summary} />
            </span>
          }
          images={j.images}
          highlights={
            <ButtonHighlights
              highlights={j.highlights}
              color="purple"
            />
          }
        />
      ))}
    </div>
  );
};

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = projectsType;

export default Projects;
