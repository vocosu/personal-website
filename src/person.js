import PropTypes from 'prop-types';

const lineBreak = '\n\n\n';

export const person = {
  basics: {
    name: 'Chynh Vo',
    label: 'Software Engineer - Portland, Oregon',
    picture: 'chynh.png',
    email: 'chynhvo@gmail.com',
    phone: '(503) 999-4600',
    website: 'www.chynhvo.com',
    resume: 'https://drive.google.com/file/d/1vcaGBjX4D4SMNxQHn2WSjNSJ-VRR0cTH/view',
    summary: ``,
    profiles: [
      {
        network: 'GitHub',
        username: 'vocosu',
        url: 'https://www.github.com/vocosu',
      },
      {
        network: 'Linkedin',
        url: 'https://www.linkedin.com/in/chynh-vo/',
      },
    ],
  },
  work: [
    {
      company: 'ID Experts',
      position: 'UI Software Engineer',
      location: 'Tigard, Oregon',
      website: 'https://www2.idexpertscorp.com/',
      startDate: '03/2018',
      endDate: 'Present',
      summary: 
      `- Built new functionality into an Angular 6 application, allowing users to activate monitoring services and receive actionable alerts to help protect them from identity theft. 
       ${lineBreak}- Translated wireframes and mockups into responsive web pages using HTML, Sass and TypeScript.
       ${lineBreak}- Wrote end to end tests in Protractor WebDriverJS to automate testing for critical parts of the application.`,
       highlights: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Protractor', 'Agile'],
    },
    {
      company: 'Bonzi (acquired by Stack Sports, Tualatin office closed)',
      position: 'Software Engineer',
      location: 'Tualatin, Oregon',
      website: 'https://stacksports.com/',
      startDate: '09/2016',
      endDate: '10/2017',
      summary: 
      `- Developed and maintained web applications for sports registration, scheduling, management and social networking.
       ${lineBreak}- Prototyped a React/Redux single page application used for real time payments and viewing transaction reports.
       ${lineBreak}- Contributed towards bi-weekly release requirements and hotfixes as requested by USSF, which also included numerous changes to [ussoccerda.com](http://www.ussoccerda.com/home.php).
       ${lineBreak}- Improved performance and maintainability of the software by refactoring legacy code and SQL queries.`,
       highlights: ['PHP', 'Java', 'React', 'Redux', 'Knockout.js', 'jQuery', 'PostgreSQL', 'Silex', 'Doctrine'],
    },
    {
      company: 'Material Flow',
      position: 'Web Developer',
      location: 'Donald, Oregon',
      website: 'https://materialflow.com/',
      startDate: '02/2016',
      endDate: '08/2016',
      summary: 
      `- Migrated several features from in-house CMS/CRM written in ColdFusion to Node.js and Polymer.
       ${lineBreak}- Improved search times on products and customer lookup by integrating Elasticsearch with MongoDB.`,
      highlights: ['Node.js', 'Express', 'Polymer', 'Elasticsearch', 'MongoDB'],
    },
    {
      company: 'Remcho Research Group',
      position: 'Web Developer',
      location: 'Corvallis, Oregon',
      website: 'http://remcho.science.oregonstate.edu/',
      startDate: '06/2015',
      endDate: '09/2015',
      summary: 
      '- Continuation of senior capstone project, worked with one other team member to develop a web application to let users view detailed analyte data captured by phone devices.',
      highlights: ['PHP', 'MySQL'],
    },
  ],
  education: [
    {
      institution: 'Oregon State University',
      studyType: 'Bachelor of Science in Computer Science',
      startDate: '09/2011',
      endDate: '12/2015',
      gpa: '',
      courses: [
        'CS472 - Computer Architecture',
        'CS480 - Translators',
        'CS450 - Computer Graphics',
        'CS444 - Operating Systems II',
        'CS325 - Analysis of Algorithms',
        'CS496 - Mobile/Cloud Development',
      ],
    },
    {
      institution: 'McKay High School',
      studyType: 'High School Diploma',
      startDate: '09/2007',
      endDate: '06/2011',
      gpa: '',
      courses: [
      ],
    },
  ],
  projects: [
    {
      name: 'OpenDota React Native Application',
      summary: 
      `Contributed to the OpenDota React Native application.
       Added sorting on table columns and a heatmap similar to the one at [www.opendota.com](https://www.opendota.com/matches/3631550859/laning).
       Application currently released on [Google's Play Store](https://play.google.com/store/apps/details?id=com.opendota.mobile&hl=en) as well as [Apple's App Store](https://itunes.apple.com/us/app/opendota/id1354762555?ls=1&mt=8).`,
      images: [
        'dota-mobile.png'
      ],
      highlights: [
        'React Native',
        'Redux',
        'heatmap.js',
        'iOS',
        'Android'
      ]
    },
    {
      name: 'ACDB GraphQL API',
      summary: 
      `Currently working on a Node.js/Express GraphQL API where a user can search for anime characters using a variety of tags and traits.
       Most of the initial data was collected from over 200,000+ web pages using Python's scrapy framework and then stored in a PostgreSQL database.
       The API follows the Relay specification to allow for cursor-based pagination.`,
      images: [
        'graphql.png',
        'database.png',
      ],
      highlights: [
        'TypeScript',
        'GraphQL',
        'PostgreSQL',
        'Elasticsearch',
        'Relay',
        'Node.js',
      ],
    },
    {
      name: 'Personal Website',
      summary: 
      'My personal website was made using React and Semantic UI. The source code is available on my [GitHub](https://github.com/vocosu/personal-website).',
      highlights: [
        'React',
        'Semantic UI',
        'Responsive'
      ],
    },
  ],
};

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
  company: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
  institution: PropTypes.string,
  area: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const projectsType = PropTypes.arrayOf(PropTypes.shape({
  organization: PropTypes.string,
  position: PropTypes.string,
  website: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const referencesType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  reference: PropTypes.string,
})).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  education: educationType,
  interests: interestsType,
  references: referencesType,
});