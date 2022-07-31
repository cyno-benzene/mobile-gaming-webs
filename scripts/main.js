let players = [
    { SLOT: "", "TEAM NAME": "Maverik", "TEAM SIZE": 4 },
    { SLOT: "", "TEAM NAME": "Delta", "TEAM SIZE": 4 },
    { SLOT: "", "TEAM NAME": "Alpha", "TEAM SIZE": 4 },
    { SLOT: "", "TEAM NAME": "Beta", "TEAM SIZE": 4 },
    { SLOT: "", "TEAM NAME": "Gamma", "TEAM SIZE": 4 }
  ];
  

  
  function generateTableHead(table, data) {
    let tr = table.createTHead();
    let row = tr.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(players[0]);
  generateTableHead(table, data);
  generateTable(table, players);