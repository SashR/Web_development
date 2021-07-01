const tableData = [
  ["11111", "bxt12341", "Delta Towers 24 Bay5", "23 June", "123", "Desktop"],
  ["11112", "rjs1245d", "Delta Towers 26 Bay5", "12 June", "124", "Laptop"],
  ["11113", "zsd23456", "Musgrave 1 Bay5", "01 April", "125", "Chair"],
  ["11114", "zsd2sf51", "Musgrave 1 Bay3", "01 January", "126", "Monitor"],
  ["11115", "zsdsfsfs3", "Musgrave 1 Bay2", "07 March", "127", "Desktop"],
  ["11116", "zxvfd431", "Delta Towers 24 Bay5", "04 April", "128", "Desktop"],
  ["11117", "sdsf97543", "Delta Towers 24 Bay3", "12 June", "129", "Monitor"],
  ["11118", "zsdsfs234", "Musgrave 1 Bay5", "21 June", "130", "Monitor"],
  ["11119", "zsd23532", "Delta Towers 25 Bay8", "13 June", "131", "Desktop"],
  [
    "11120",
    "sdf234623",
    "Delta Towers 26 Bay3",
    "10 February",
    "132",
    "Coffee Machine",
  ],
];

let currentDate = [];
let fetchedData = {};
let destrkData = {};

let rowCount = 0;

function convOtoA(obj) {
  return Object.values(obj);
}

function genTable(obj) {
  let row = convOtoA(obj);
  const output = row.filter((item) => convOtoA(item));
  return output;
}

function destrukt(obj) {
  const output = {};
  output["id"] = obj["id"];
  output["ticket-no"] = obj["ticket-no"];
  output["asset_id"] = obj["asset_id"];
  output["location"] = obj["location"];
  output["type"] = obj["type"];
  output["updated_at"] = obj["updated_at"];
  output["serial_no"] = obj["serial_no"];
  return output;
}

function onLoad() {
  resetTable();
  loadout(tableData);
  currentData = tableData;
  fetch("http://127.0.0.1:8000/api/assets")
    .then((res) => {
      console.log("response waiting for body: ", res);
      return res.json();
    })
    .then((data) => {
      fetchedData = data;
      destrkData = Object.keys(fetchedData).map((item) =>
        destrukt(fetchedData[0])
      );
    })
    .catch((err) => {
      console.log("error: ", err);
    });
}

function loadout(dataArr) {
  let tablebody = document.querySelector("#tableBody");
  for (let i = 0; i < dataArr.length; i++) {
    let tr = createTR(i, dataArr[i]);
    tablebody.appendChild(tr);
  }
}

function resetTable() {
  let tbody = document.querySelector("#tableBody");
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
}

function onFilter() {
  let searchfield = document.querySelector("#searchfield");
  let searchData = filter(searchfield.value);
  resetTable();
  loadout(searchData);
  currentData = searchData;
  searchfield.value = "";
}

function filter(str) {
  let output = [];
  for (let i = 0; i < currentData.length; i++) {
    for (let j = 0; j < currentData[i].length; j++) {
      if (currentData[i][j].indexOf(str) !== -1) {
        output.push(currentData[i]);
      }
    }
  }
  return output;
}

function createTR(rowID, rowData) {
  let tr = document.createElement("tr");
  tr.setAttribute("id", "row" + rowID);
  for (let i = 0; i < rowData.length + 1; i++) {
    let btn = i === rowData.length;
    let inner = i === rowData.length ? createValidateBtn(rowID) : rowData[i];
    let td = createTD(inner, rowID, btn, i);
    tr.appendChild(td);
  }
  return tr;
}

function createTD(inner, rowID, btn, colID) {
  let td = document.createElement("td");
  td.setAttribute("id", "element" + rowID + colID);
  if (btn) {
    td.appendChild(inner);
  } else {
    td.innerHTML = inner;
  }
  return td;
}

function createValidateBtn(rowid) {
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-secondary");
  button.innerHTML = "Validate";
  return button;
}
