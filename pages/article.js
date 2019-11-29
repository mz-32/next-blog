import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import BasicHead from '../components/BasicHead'
import ArticlesList from '../containers/ArticlesList';
import Article from '../containers/Article';

export default class extends React.Component {
  static async getInitialProps ({ query: { article } }) {
      return {article: article}
  }

  render () {
    return (
      <div>
        <BasicHead title={this.props.article.title+"|mz32's blog"}/>
      <Header/>
  
      {/* <Nav /> */}
      <div className="article">
        <Article article={this.props.article}/>
      </div>
      <ArticlesList/>
      <Footer/>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .article {
          margin: 1rem 2rem;
        }
      `}</style>
    </div>
    );
  }
}


