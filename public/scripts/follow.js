/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

function createFollow(fields) {
  fetch('/api/follows',
    {method: 'POST',
      body: JSON.stringify(fields),
      headers: {'Content-Type': 'application/json'}
    })
    .then(showResponse)
    .catch(showResponse);
}

function deleteFollow(fields) {
  fetch('/api/follows',
    {method: 'DELETE',
      body: JSON.stringify(fields),
      headers: {'Content-Type': 'application/json'}
    })
    .then(showResponse)
    .catch(showResponse);
}
