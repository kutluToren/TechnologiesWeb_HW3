
import express = require('express')
import bodyparser = require('body-parser')
import { MetricsHandler } from './metrics'

import path = require('path');
let ejs = require('ejs');

const app = express()
const dbMet: MetricsHandler = new MetricsHandler('./db/metrics')


app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.set('views', __dirname + "/../views")
app.set('view engine', 'ejs');


const port: string = process.env.PORT || '8080'



app.get('/', (req: any, res: any) => {
  res.write("Hello Stranger, \n")
  res.write("Type /metrics to see all metrics in DB\n")
  res.write("Type /metrics/id to see all metrics with id in DB\n")
  res.write("Post to /metrics/id to save a metric for example to do with postman in DB in the form of \n ")
  res.write("[ { \"timestamp\":\"13846834560000\", \"value\":\"99\" }]")
  res.end()
})

app.get('/hello/:name', 
  (req, res) => {
    res.render('hello.ejs', {name: req.params.name})
  }
)

app.post('/metrics/:id', (req: any, res: any) => {
  dbMet.save(req.params.id, req.body, (err: Error | null) => {
    if (err) throw err
    res.status(200).send("ok")
  })
})

app.get('/metrics/', (req: any, res: any) => {
  dbMet.getAll((err: Error | null, result: any) => {
    if (err) throw err
    res.status(200).send(result)

  })
})

app.get('/metrics/:id', (req: any, res: any) => {
  dbMet.getOne(req.params.id,(err: Error | null, result: any) => {
    if (err) throw err
    res.status(200).send(result)

  })
})
/*
app.get('/metricsDelete/:id', (req: any, res: any) => {
  dbMet.deleteOneWithId(req.params.id, (err: Error | null) => {
    if (err) throw err
    res.status(200).send("delete complete")

  })
})
*/

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})
