// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AuthLayout}>
      <Route path="/accept" page={AcceptPage} name="accept" />
      <Route path="/decline" page={DeclinePage} name="decline" />
        <Route path="/rsvp" page={RsvpPage} name="rsvp" />
        </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
