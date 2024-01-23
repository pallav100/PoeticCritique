
/*** List of APIs to get prompts history and particular prompt*/

export const getPromptsList = (apiCallback) => {
  /*** Get list of all prompts - history*/

    fetch("http://localhost:8000/prompt")
    .then(res =>
      res.json()
    )
    .then(promptsList => {
      apiCallback(promptsList.prompts);

    })
    .catch((err) => console.log(err));
}
export const getPromptHistory = (id, apiCallback) => {
    /*** Get history of a prompt - 
     *  all mesages exchnaged between user and model*/

  fetch(`http://localhost:8000/prompt/${id}`)
  .then(res =>
    res.json()
  )
  .then(promptsList => {
    apiCallback(promptsList.prompts);
  })
  .catch((err) => console.log(err));
}