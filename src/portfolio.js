const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/AxelAlinsky',
  title: '.A',
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
    name: 'Mocha Demo Automation',
    imageUrl: 'https://raw.githubusercontent.com/AxelAlinsky/alexautomation/main/public/image/mocha-automation.png',
    description:
      `The automation framework utilizes Mocha with TypeScript to create efficient and reliable tests for the SauceDemo website. Leveraging TypeScript's static typing and Mocha's testing capabilities, the framework ensures organized, modular tests with robust assertions and detailed reporting, enhancing maintainability and test coverage.`,
    stack: ['Mocha', 'TypeScript'],
    sourceCode: 'https://github.com/AxelAlinsky/mocha-workspace-automation',
    livePreview: 'https://github.com/AxelAlinsky/mocha-workspace-automation',
  },
  {
    name: 'Playwright Demo Automation',
    imageUrl: 'https://raw.githubusercontent.com/AxelAlinsky/alexautomation/main/public/image/playwright-automation.png',
    description:
      `This automation system combines TypeScript and Playwright to automate tasks on the SauceDemo website. TypeScript helps ensure code reliability, while Playwright simplifies browser automation. Together, they enable smooth interaction with the website's elements, making it easier to create and maintain tests. This setup ensures that testing the SauceDemo website is efficient and effective.`,
    stack: ['Playwright', 'TypeScript'],
    sourceCode: 'https://github.com/AxelAlinsky/playwright-workspace-automation',
    livePreview: 'https://github.com/AxelAlinsky/mocha-workspace-automation',
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
