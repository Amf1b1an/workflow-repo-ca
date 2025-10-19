# Workflow repo for the CA

SCRIPTS

  npm install // in order to install all dependencies

  npm run prepare // installs huskey 

  npm run build // generate dist folder

  npm run preview // uses the dist folder created by npm run build and creates a local preview

---------------------

TEST SCRIPTS: 

  npm run test // for vitest

  npm run test:e2e *or* npm run test:e2e ui // for e2e testing with playwright

---------------------

ENVIRONMENT VARIABLES

  TEST_USER_EMAIL=

  TEST_USER_PASSWORD=

  E2E_BASE_URL=

  E2E_START_CMD=

---------------------
