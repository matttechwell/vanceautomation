const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/AxelAlinsky',
  title: 'Alex',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alex',
  role: 'QA Automation Engineer',
  description:
    'A seasoned Senior QA Automation Engineer located in Bangkok with extensive experience in guiding sophisticated automation approaches. My proficiency in leveraging Python, TypeScript, Robot Framework, Selenium, and Playwright empowers me to craft and sustain cutting-edge testing frameworks and CI/CD pipelines, significantly enhancing operational efficiency and product quality across diverse tech industries. ',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/mattapichai/',
    github: 'https://github.com/AxelAlinsky',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sauce Demo Automation',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.google.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Git',
  'CI/CD',
  'Jest',
  'Cypress',
  'Robot Framework',
  'Selenium',
  'Playwright',
  'Python',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matthewkenn00@gmail.com',
}

export { header, about, projects, skills, contact }
