
// This is how you include one file
import createPage from '../compose/namespace/1_Create_a_namespace.spec'
// This is how you include multiple files with index.js
import reporterTests from '../reporter'
import reporterTopbarTests from '../topbar/reporter'

createPage,
reporterTests,
reporterTopbarTests

// NB: for compose you can create an index file including
// ONLY create and edit files
// delete files will be imported the same way as above
// Also, please, change the name of this file and its folder
