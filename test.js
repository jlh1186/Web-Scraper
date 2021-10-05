const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const url = "https://www.theguardian.com/us"
const articles = []
axios(url)
    .then(response => {
        const html = response.data
       // console.log(html)
       const good = cheerio.load(html)
       good('.fc-item__content', html).each(function(){
            const title = good(this).text()
          const url = good(this).find('a').attr('href')
          articles.push({
            title,
            url
          })
       })
       console.log(articles[2])
        Document.write('Complete')
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('Server Running on PORT:',PORT))
