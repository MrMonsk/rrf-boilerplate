import Keen from 'keen-js';

const client = new Keen({
  projectId: $KEEN_PROJECT_ID,
  readKey: $KEEN_READ_KEY
});

export function getFlowErrors(accountId, flowId, timeframe) {
  console.log('run flow error query');
  const request = new Keen.Query("count", {
    event_collection: "account-" + accountId,
    timeframe: "this_" + timeframe + "_days",
    group_by: ["stepChildId", "error"],
    timezone: "UTC",
    filters: [
      {
        property_name: "stepId",
        operator: "eq",
        property_value: flowId
      },
      {
        property_name: "error",
        operator: "exists",
        property_value: true
      }
    ]
  });

  return new Promise(function(resolve, reject) {
    client.run(request, function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.result);
      }
    })
  })
}

export function getAccountExtraction(accountId, latest) {
  console.log('run account extraction query');
  const request = new Keen.Query("extraction", {
    event_collection: "account-" + accountId,
    latest: latest
  });

  return new Promise(function(resolve, reject) {
    client.run(request, function(err, res) {
      if (err) {
        reject(err);
      } else {
        console.log(res)
        resolve(res.result);
      }
    })
  })
}

export function getFlowExtraction(accountId, flowId, latest) {
  console.log('run flow extraction query');
  const request = new Keen.Query("extraction", {
    event_collection: "account-" + accountId,
    latest: latest,
    filters: [
      {
        property_name: "stepId",
        operator: "eq",
        property_value: flowId
      }
    ]
  });

  return new Promise(function(resolve, reject) {
    client.run(request, function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res.result);
        console.log(res.result)
      }
    })
  })
}
