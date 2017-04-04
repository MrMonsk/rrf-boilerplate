const redisURL = 'https://z2kvzxph51.execute-api.us-west-2.amazonaws.com/prod/stats';

export function fetchRedisStats(accountId='') {
  const fetchURL = parse(accountId);
  return new Promise(function(resolve, reject) {
    fetch(fetchURL)
    .then((response) => response.json())
    .then(function(data) {
      console.log(data)
      resolve(data)
    })
    .catch(function(err) {
      reject(err)
    })
  })
}

function parse(accountId) {
  let parsed;
  if (accountId.length > 1) {
    parsed = redisURL + '?scope=' + accountId;
  } else {
    parsed = redisURL;
  }
  return parsed;
}
