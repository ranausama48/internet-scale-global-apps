[Get yourself motivated to learn Gatsby.js](https://www.cnbc.com/2019/12/02/10-hottest-tech-skills-that-could-pay-off-most-in-2020-says-new-report.html)

Signup on Netlify:

https://app.netlify.com/signup

Install:

npm install -g gatsby-cli

npm install netlify-cli -g

Create Gatsby Site:

gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world

cd hello-world

gatsby develop

Once you have completed development:

gatsby build

Login to Netlify:

netlify login

To publish on Netlify as draft (You should publish the "public" directory created by Gatsby.js build directory):

netlify deploy

To publish the final version:

netlify deploy --prod


References:

[Get Started with Netlify CLI](https://docs.netlify.com/cli/get-started/)

[Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/)

[Deploying on Netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify/)




