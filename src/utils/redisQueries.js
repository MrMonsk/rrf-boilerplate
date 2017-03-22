const redisURL = 'https://z2kvzxph51.execute-api.us-west-2.amazonaws.com/prod/stats';

export function fetchRedisStats() {
  fetch(redisURL)
  .then((response) => response.json())
  .then(function(data) {
    console.log(data)
    return data
  })
  .catch(function(err) {
    console.log(err)
  })
}
