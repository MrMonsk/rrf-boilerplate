import Keen from 'keen-js';

const client = new Keen({
  projectId: "53cd4a95ce5e43684c00000d",
  readKey: "5da9aae0e9ec21ee525537e406254baaa39a4556cf81e173ee07efceeb9d6d7dceb598f44020595b333e0d55326ab4f4ae63073b24be23a057651b8d4d30909b2f48a58d5652e0ea311c97d8b002e56f72e399c83a1a677f00d63a84089da55c786f6951230a2fee25a8f085527c09fd"
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
        resolve(res.result);
        console.log(res.result)
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
