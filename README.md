

## Repo structure

You can see the repo structure as follows:

```
src/
   assets/ <-- contains all static assets, such as images, icons, etc
      fonts/
      images/
   components/
   pages/ <-- contains all individual components used. All components are built fully modular in order to minimise dependencies 
   utils/ <-- contains styles to be imported, as well as API types 
      styles/
      types/
```


## Get started

To view the app, you can use the follow scripts:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This will run the app in full. You can see how all the components together, including API calls, pagination, currency conversion, routes, etc, that is not available via Storybook.

### `yarn storybook`

Opens the project in Storybook. You can view all the components as individual stories, or see some examples of components together.

## Technologies used

- [axios](https://github.com/axios/axios) for data fetching
- [Storybook](https://github.com/storybookjs/storybook) for component staging
