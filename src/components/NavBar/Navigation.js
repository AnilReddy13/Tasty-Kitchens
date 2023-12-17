import NavLinks from './NavLinks'
// eslint-disable-next-line import/no-unresolved
import classes from './NavBar.Module.css'

const Navigation = () => (
  <nav className={classes.Navigation}>
    <NavLinks />
  </nav>
)

export default Navigation
