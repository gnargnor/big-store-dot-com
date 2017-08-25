const ES = require('elasticsearch-browser')

const client = new ES.Client({
  host: 'localhost:9200'
})

module.exports = (state, emitter) =>  {
  return queryByLocation()
    .then(results => {
      state.policeReport = results.items;
      emitter.emit('render');
    });
}

function queryByLocation(txt) {
    let parsed = geocodeString(txt)

    let query = {
      bool: {
        filter: {
          geo_distance: {
            distance: '20km',
            location: {
              lat: parsed.lat,
              lon: parsed.lon
            }
          }
        }
      }
    }

    let sort = [
      {
        _geo_distance: {
          location: {
            "lat": parsed.lat,
            "lon": parsed.lon
          },
          order:         "asc",
          unit:          "km",
          distance_type: "plane"
        }
      }
    ]

    return client.search({
      index: 'incidents',
      type: 'txn',
      body: { query, sort },
      size: 100
    }).then(result => ({
      items: result.hits.hits,
      total: result.hits.total
    }))
  }


function geocodeString(str) {
  return {lat: 45.01053824, lon: -93.31206383}
}
