import * as React from "react"

interface Props {}

interface State {}

class Footer extends React.Component<Props, State> {
  public static defaultProps: Props = {
    id: 0,
    title: 'unstitled',
    publicAt: '',
    updateAt: '',
    image: null
  }
  render() {
    return (
      <footer>
        <div className="copyright">
        © 2019 mz32
        </div>
        <style jsx>{`
        footer {
          border: solid 1px #ff0000;
          display: flex
        }
        .copyright {
          text-align: center;
          width: 100%;
        }
      .post_title{
        color: red
      }
    `}</style>
      </footer>
    )
  }
}
export default Footer
