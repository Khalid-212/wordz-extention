document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var inputValue = document.getElementById("inputData").value;
  // submit(inputValue);
  main(inputValue);
});

function submitForm(event) {
  event.preventDefault();
  var inputValue = document.getElementById("inputData").value;
  main(inputValue);
}
async function main(searchQuery) {
  const url =
    "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" +
    searchQuery;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b9f0280c40msh01d96cb70c57364p1d16f3jsn74306b9aa713",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    // document.getElementById("responses").innerHTML = result.list[0].definition;
    var definitions = result.list;
    var output = "";
    for (var i = 0; i < definitions.length; i++) {
      output += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${definitions[i].word}</h5>
            <p class="card-text">${definitions[i].definition}</p>
            <a target="_blank" href="${definitions[i].permalink}" class="btn btn-primary">read more on Urban Dictionary</a>
        </div>
    </div>`;
    }
    document.getElementById("responses").innerHTML = output;
  } catch (error) {
    console.error(error);
  }
}
