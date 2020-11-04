const request = require('request');

const options = {
  method: 'POST',
  url: 'https://rapidapi.p.rapidapi.com/distance-to-coast-point',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-key': '<your api key>',
    'x-rapidapi-host': 'distance-to-coast-by-point1.p.rapidapi.com',
    useQueryString: true
  },
  body: {lat: 44.501226, lines: true, lon: -88.062187},
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //stringify the body
  var jdata = JSON.stringify(body);
  //parse the body
  var jobj = JSON.parse(jdata);
  //output the country name of the nearest coast [0] 
  console.log(jobj.top_3_nearest_coastlines[0].country_name);
  //output the province name of the nearest coast [0] 
  console.log(jobj.top_3_nearest_coastlines[0].province_name);
  //output the distance to the nearest coast [0] in miles
  console.log(jobj.top_3_nearest_coastlines[0].dist_miles);
  //output the geojson line to the nearest coast [0]
  console.log(JSON.stringify(jobj.top_3_nearest_coastlines[0].line));
  
});