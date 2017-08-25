const fs = require('fs')
      , util = require('util')
      , csv = require('csv')
      , path = require('path')
      , snakeCase = require('lodash/snakeCase')
      , es = require('../server/services/elasticsearch')

parseFile(path.resolve('data', 'Police_Incidents_2016.csv'))
  .then(docs => parseFile(path.resolve('data', 'Police_Incidents_2017.csv'))
    .then(newDocs => docs.concat(newDocs)))
  .then(loadDocs)
  .then(docs => {
    console.log(`${docs.length} inserted...`)
    console.log(`here's a sample: `)
    console.log(docs[0])
  })
  .catch(err => console.log(util.inspect(err)))


function parseFile(path, cb) {
  return new Promise((resolve, reject)=> {
    const parser = csv.parse({
      auto_parse: true,
      trim: true,
      columns: true
    }, (err, data)=> {
      if (err) return reject(err)
      return resolve(data)
    })

    fs.createReadStream(path).pipe(parser)
  }).then(data => data.map(element => Object.keys(element).reduce((m, k)=> {
    let newKey = snakeCase(k)
    switch(newKey) {
      case 'long':
        if (!m.location) { m.location = {} }
        m.location['lon'] = element[k]
        break;
      case 'lat':
        if (!m.location) { m.location = {} }
        m.location['lat'] = element[k]
        break;
      default:
        m[newKey] = element[k]
        break;
    }
    return m
  }, {})))
}

async function loadDocs(data) {
  const docs = []

  for (let i = 0; i < data.length; i++) {
    let payload = {
      index: 'incidents',
      type: 'txn',
      id: data[i].control_nbr,
      body: data[i]
    }

    docs.push(await es.index(payload))
    if (i % 10 === 0) {
    console.log(`${i} of ${data.length} processed...`)
    }
  }

  return docs
}
