import * as React from "react";
import ArticleCard from "../../components/ArticleCard";
import * as Sumally from "../../summary.json";

interface Props {}

interface State {}

class ArticlesList extends React.Component<Props, State> {
  public static defaultProps: Props = {
  }
  render() {
    console.log(Sumally.fileMap);
    const articlesHash = Sumally.fileMap;
    const articles = Object.entries(articlesHash).map(e=><ArticleCard article={e[1]} key={e[0]}/>)
    return (
      <div>
        <div className="articles">
          {articles}
        </div>
        <style jsx>{`
      .post_title{
        color: red
      }
      .articles {
        display: flex;
      }
    `}</style>
      </div>
    );
  }
}
export default ArticlesList
