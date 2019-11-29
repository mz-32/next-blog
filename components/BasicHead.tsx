import * as React from "react"
import Head from 'next/head'

interface Props {
  title?: string
}

class BasicHead extends React.Component<Props> {
  public static defaultProps: Props = {
    title: "mz32's blog",
  }
  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="/static/css/reset.css" media="screen"/>
        <link rel="stylesheet" type="text/css" href="/static/css/katex.min.css" media="screen"/>
        <link rel="stylesheet" type="text/css" href="/static/css/github.css" media="screen"/>
      </Head>
    )
  }
}
export default BasicHead
