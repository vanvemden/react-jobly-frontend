Components:

<NavigationBar />

ROUTE: /
<Jobly>

- <AnonymousPage>
- <LoggedInPage>

ROUTE: /login
<Auth>

- <LoginForm>
- <SignupForm>

ROUTE: /profile
<UserProfile>

ROUTE: /companies
<CompaniesList />

- <SearchForm/> state=formData, props=newSearch()
- List of <CompanyListItem /> props=company

ROUTE: /companies/:handle
<CompanyProfile />

- <CompanyDetail> props=company
- List of <JobListItem /> props=company.jobs

ROUTE: /jobs
<JobsList />

- <SearchForm /> state=formData, props=newSearch()
- List of <JobListItem /> props=job
