import * as React from "react"
import styles from "./index.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.root}>
        <div className={styles.copyright}>
        © 2019 mz32
        </div>
      </footer>
    )
  }
}
export default Footer
