# Workflow repo for the CA

npm install // in order to install all dependencies

---------------------

Testing: 

npm run test // for vitest

npm run test:e2e *or* npm run test:e2e ui // for e2e testing with playwright

---------------------

npm run prepare // installs huskey 

---------------------

npm run build // generate dist folder

---------------------

npm run preview // uses the dist folder created by npm run build and creates a local preview

---------------------


Environment Variables consists of 

TEST_USER_EMAIL=workflowuser@stud.noroff.no

TEST_USER_PASSWORD=workflowpass

E2E_BASE_URL=http://localhost:5173

E2E_START_CMD="vite"
