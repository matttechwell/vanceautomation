const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/VanceTechwell',
  title: '.V',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vance',
  role: 'QA Automation Engineer',
  description:
    'A seasoned Senior QA Automation Engineer located in Bangkok with extensive experience in guiding sophisticated automation approaches. My proficiency in leveraging Python, TypeScript, Robot Framework, Selenium, and Playwright empowers me to craft and sustain cutting-edge testing frameworks and CI/CD pipelines, significantly enhancing operational efficiency and product quality across diverse tech industries. ',
  resume: 'https://raw.githubusercontent.com/VanceTechwell/Vanceautomation/feat/add-resume/public/resume/Vance.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mattapichai/',
    github: 'https://github.com/VanceTechwell',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mocha Demo Automation',
    imageUrl: 'https://raw.githubusercontent.com/VanceTechwell/Vanceautomation/main/public/image/mocha-automation.png',
    description:
      `The automation framework utilizes Mocha with TypeScript to create efficient and reliable tests for the SauceDemo website. Leveraging TypeScript's static typing and Mocha's testing capabilities, the framework ensures organized, modular tests with robust assertions and detailed reporting, enhancing maintainability and test coverage.`,
    stack: ['Mocha', 'TypeScript'],
    sourceCode: 'https://github.com/VanceTechwell/mocha-workspace-automation',
    livePreview: 'https://github.com/VanceTechwell/mocha-workspace-automation',
  },
  {
    name: 'Playwright Demo Automation',
    imageUrl: 'https://raw.githubusercontent.com/VanceTechwell/Vanceautomation/main/public/image/playwright-automation.png',
    description:
      `This automation system combines TypeScript and Playwright to automate tasks on the SauceDemo website. TypeScript helps ensure code reliability, while Playwright simplifies browser automation. Together, they enable smooth interaction with the website's elements, making it easier to create and maintain tests. This setup ensures that testing the SauceDemo website is efficient and effective.`,
    stack: ['Playwright', 'TypeScript'],
    sourceCode: 'https://github.com/VanceTechwell/playwright-workspace-automation',
    livePreview: 'https://github.com/VanceTechwell/mocha-workspace-automation',
  },
  {
    name: 'Budget Tracker',
    imageUrl: 'https://raw.githubusercontent.com/VanceTechwell/Vanceautomation/main/public/image/budget-tracker.png',
    description:
      `Originally inspired by a YouTube tutorial, this budget tracker application has been extensively customized and enhanced with additional features to meet unique user needs. It provides robust tools for managing finances effectively, with a focus on a seamless and responsive user experience through the integration of modern web technologies.`,
    stack: [
      'Next.js',
      'React',
      'React Hook Form',
      'Zod',
      'Prisma',
      'Tailwind CSS',
    ],
    livePreview: 'https://budget-app-sable-beta.vercel.app/',
  },
]

const skills = [
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
  'Next.js',
  'React Hook Form',
  'Zod',
  'Prisma',
  'Tailwind CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matthewkenn00@gmail.com',
}

export { header, about, projects, skills, contact }
