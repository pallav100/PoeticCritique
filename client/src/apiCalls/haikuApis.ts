
/*** List of APIs to gnerate and  a particular prompt messages - fetch an old prompt*/

export const getHaiku = (apiCallback) => {
    fetch("http://localhost:8000/haiku")
    .then(res =>
      res.json()
    )
    .then(msg => {
      apiCallback(msg);

    })
    .catch((err) => console.log(err));
}
export const reviewHaiku = (prompt, apiCallback) => {
  fetch("http://localhost:8000/haiku/review", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({promptText: prompt.trim()})
  })
  .then(res =>
    res.json()
  )
  .then(msg => {
    apiCallback(msg);
  })
  .catch((err) => console.log(err));
}