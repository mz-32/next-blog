const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const sumallyFile = './summary.json'
const match = route('/article/:id')

const articlesSumally = JSON.parse(fs.readFileSync(sumallyFile, 'utf8'));
const articles = Object.entries(articlesSumally.fileMap).map(e=>e[1].id.toString())
const articlesfilename = Object.entries(articlesSumally.fileMap).map(e=>e[0])

console.log(articles)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)    
    const params = match(parsedUrl.pathname)
    
    if (params === false) {
      handle(req, res)
      return
    }
    const articleIndex = articles.indexOf(params.id)
    // ファイルが見つからない場合は 404
    if (articleIndex === -1) {
      app.render(req, res, '/404')
      return
    }
    const article = JSON.parse(fs.readFileSync(articlesfilename[articleIndex], 'utf8'));


    app.render(req, res, '/article', { article: article })

  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
