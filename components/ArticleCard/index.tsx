import * as React from "react"

interface Props {
  article?: any
}

interface State {}

class ArticleCard extends React.Component<Props, State> {
  public static defaultProps: Props = {
    article: {},
  }
  render() {    
    return (
      <a href={`/article/${this.props.article.id}`}>
        <article>
          <div> 画像が入ります。</div>
          <div>
            <p className="post_title">{this.props.article.title}</p>
            <span>Public at: </span>
          </div>
        </article>
        <style jsx>{`
        .post_title{
          color: red
        }
        article {
          border: 1px solid #9b9b9b;
          width: 220px;
          padding: 18px 18px 24px;
        }
      `}</style>
      </a>
    )
  }
}
export default ArticleCard
