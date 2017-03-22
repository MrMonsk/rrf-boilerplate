const redisURL = 'https://z2kvzxph51.execute-api.us-west-2.amazonaws.com/prod/stats';

export function fetchRedisStats() {
  fetch(redisURL, {mode: 'no-cors'}).then(function(response) {
    return response.blob().then(function(text) {
      console.log(text)
      return text ? JSON.stringify(text) : {}
    })
  })
}
