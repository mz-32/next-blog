import * as React from "react"
import styles from './index.scss'

interface Props {}

class Header extends React.Component<Props> {
  public static defaultProps: Props = {
  }
  render() {
    return (
      <header className={styles.root}>
        <div className={styles.header__inner}>
          <a href="/">
            <h2 className={styles.logo}>
            mz32's blog
            </h2>
          </a>
          
        </div>
      </header>
    )
  }
}
export default Header
