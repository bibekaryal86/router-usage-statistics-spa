# router-usage-statistics-spa

- This app uses React, Redux, React Router, and many other helpful libraries.
- The app uses Material UI for styling. It heavily utilizes the free template offered here:

  - https://material-ui.com/getting-started/templates/dashboard/
  - https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard

- TODO: testing framework

- The app is one of the three repos used to save-retrieve-display data:
  - https://github.com/bibekaryal86/router-usage-statistics-save (save data)
  - https://github.com/bibekaryal86/router-usage-statistics-java (retrieve data)
  - https://github.com/bibekaryal86/router-usage-statistics-spa (view data) (this)

- The app is deployed at:
  - https://router-spa.appspot.com/
  - Because of high RAM requirement (~530MB) to run a single instance (???), the app's instance is mostly shutdown and may take a while to startup and serve (free-tier limits)
  - First attempt to view the page usually results in 502-Bad Gateway, second attempt takes longer but eventually the page opens
