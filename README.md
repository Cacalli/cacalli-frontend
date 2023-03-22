# CACALLI

## Project Definition

Cacalli is a platform that allows the final user who is interested in transforming dog feces into a resource, to register, schedule its collection date and pay online automatically.  
In addition, it allows the administrator user to manage registered users, collections and payments.

## Technologies implemented

> - [Reactjs](https://react.dev/)
> - [Tailwind](https://tailwindcss.com/)
> - [Formik](https://formik.org/)
> - [Yup](https://www.npmjs.com/package/yup)

## Workflow

For the workflow we include agile methodologies such as Kanban to divide and assign tasks among team members with the help of a task board divided by 5 columns: **Backlog**, **To Do**, **In Progress**, **Revieweing** and **Done**.

[Cacalli's Trello](https://trello.com/b/xWpvHBKX/cacalli)

The gitflow was a key tool to work with our repositories. By creating a branch from master called `develop` and sub branches from develop in order to work in features and fixes according to the objectives of each sprint.

[Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=%C2%BFQu%C3%A9%20es%20Gitflow%3F,vez%20y%20quien%20lo%20populariz%C3%B3.)

## Wireframes

[Cacalli's Wireframes](https://miro.com/app/board/uXjVPJbhD5E=/?userEmail=jessicahercon@gmail.com&track=true&utm_source=notification&utm_medium=email&utm_campaign=add-to-board&utm_content=go-to-board)

![Wireframes](/public/assets/documentation/cacalli-wireframes.png)

## Notion

In Notion you can visualize the objective and vision of the written business. In addition, the first approaches of the web page can be found at:

[Cacalli's Notion](https://www.notion.so/Cacalli-0baccb42a7674be49da154cf74fe0a99)

## Figma

In Figma you can check the design system. Cacalli defined colors and they can be displayed as well as fonts. You can also find the high frames at:

[Cacalli's Figma](https://www.figma.com/file/sN6YAaL7HbygWkdWcDXqQD/Cacalli-DS-V1?node-id=344%3A5871&t=xX45PAipSBDblCcj-0)

![Figma Screenshot](/public/assets/documentation/cacalli-figma.png)

## Features

> - The user can register with a new account and authenticate his login by means of a token.
> - The user can choose a subscription plan and proceed to payment through the Stripe service, which is in charge of processing the payment method entered by the user.
> - The administrator can filter the dashboard information through the available filters: general search engine, filter by zone, by day and by schedule.

---

## Availale Scripts

`npm install` - Installs all the packages in the **pakcage.json** file in your local environment.

`npm start ` - Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

`npm run build` - Builds the app for production to the build folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://create-react-app.dev/docs/deployment/) for more information.
