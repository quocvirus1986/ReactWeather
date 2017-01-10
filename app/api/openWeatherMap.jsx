var axios = require('axios');
const Weather_Map_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0d0330cbdbd005ba2b19e9552ec53455&units=imperial';

module.exports ={
  getTemp: function(location){
    var encodeLocation = encodeURIComponent(location);
    var requestURL = `${Weather_Map_URL}&q=${encodeLocation}`;
    return axios.get(requestURL).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    },function (res) {
      throw new Error(res.data.message);
    })
  }
}
