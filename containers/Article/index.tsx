import * as React from "react";

interface Props {
  article?: any
}

interface State {}

class Article extends React.Component<Props, State> {
  public static defaultProps: Props = {
    article: {title: "タイトルが入ります", bodyHtml:"ほげ"}
  }
  render() {
    return (
      <div className="article">
        <div className="article__head">
          <h1>{this.props.article.title}</h1>
          <div>public: {this.props.article.created_at.slice(0,10)}</div>
          <div>tags: {this.props.article.tags}</div>
        </div>
        <div className="article__body" dangerouslySetInnerHTML={{__html:this.props.article.bodyHtml}}/>
        <style jsx>{`
      .post_title{
        color: red
      }
      .article {
        border: 1px solid;
        border-radius: 2rem;
      }
      .article__head {
        padding: 1rem 2rem;
        border-radius: 2rem;
        border-bottom: 1px solid;
      }
      .article__body {
        margin: 2rem;
      }

    `}</style>
      </div>
    );
  }
}
export default Article
