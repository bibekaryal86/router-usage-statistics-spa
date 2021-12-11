# router-usage-statistics-spa

- This app uses React, Redux, React Router, and many other helpful libraries.
- The app uses Material UI for styling. It heavily utilizes the free template offered here:
  - https://material-ui.com/getting-started/templates/dashboard/
  - https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard

- TODO: testing framework

- The app is one of the two repos used to save-retrieve-display data:
  - https://github.com/bibekaryal86/router-usage-statistics-java (save/retrieve data)
  - https://github.com/bibekaryal86/router-usage-statistics-spa (view data) (this)

- The app is deployed at:
  - AWS Amplify: https://routerstatspa.d1j5rwsdc2mo3o.amplifyapp.com/
  - Amplify uses branch `routerstatspa` for deployment (for URL to include `routerstatspa`)

# Docker
- The default URL for the app is pointing to GCP where router-usage-statistics-java is deployed. If that is needed to change to get data locally, REACT_APP_BASE_URL variable should be provided at build time (there is no run time environment in browser)
- Build Command: docker build -t rus-docker:spa --build-arg REACT_APP_BASE_URL=192.168.1.25:7001 .
- Run Command :docker run -e TZ=America/Denver --name router-usage-statistics-spa -d -p 7000:80 rus-docker:spa
- OR, use docker compose instead of Run Command
