window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us"];

  // generating the domains
  let result = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          result +=
            `<span class="pronoun">${pronoun[i]}</span>` +
            `<span class="adj">${adj[j]}</span>` +
            `<span class="noun">${noun[k]}</span>` +
            `<span class="domain">${domain[l]}<br></span>`;
        }
      }
    }
  }
  document.querySelector("#domainGenerator").innerHTML = result;
};
