// const tableData = [
//   ["11111", "bxt12341", "Delta Towers 24 Bay5", "23 June", "123", "Desktop"],
//   ["11112", "rjs1245d", "Delta Towers 26 Bay5", "12 June", "124", "Laptop"],
//   ["11113", "zsd23456", "Musgrave 1 Bay5", "01 April", "125", "Chair"],
//   ["11114", "zsd2sf51", "Musgrave 1 Bay3", "01 January", "126", "Monitor"],
//   ["11115", "zsdsfsfs3", "Musgrave 1 Bay2", "07 March", "127", "Desktop"],
//   ["11116", "zxvfd431", "Delta Towers 24 Bay5", "04 April", "128", "Desktop"],
//   ["11117", "sdsf97543", "Delta Towers 24 Bay3", "12 June", "129", "Monitor"],
//   ["11118", "zsdsfs234", "Musgrave 1 Bay5", "21 June", "130", "Monitor"],
//   ["11119", "zsd23532", "Delta Towers 25 Bay8", "13 June", "131", "Desktop"],
//   [
//     "11120",
//     "sdf234623",
//     "Delta Towers 26 Bay3",
//     "10 February",
//     "132",
//     "Coffee Machine",
//   ],
// ];

const mapKeys = {
  id: 0,
  "ticket-no": 5,
  asset_id: 1,
  location: 3,
  type: 6,
  updated_at: 4,
  serial_no: 2,
};

const tabData = {
  0: {
    asset_id: "11111",
    serial_no: "bxt12341",
    location: "Delta Towers 24 Bay5",
    updated_at: "23 June",
    "ticket-no": "123",
    type: "Desktop",
    id: 1,
  },
  1: {
    asset_id: "11112",
    serial_no: "rjs1245d",
    location: "Delta Towers 26 Bay5",
    updated_at: "12 June",
    "ticket-no": "124",
    type: "Laptop",
    id: 2,
  },
};

let tableData = mapData(tabData);

function mapData(obj) {
  let keys = Object.keys(obj);
  let mapKys = Object.keys(mapKeys);
  let output = [];
  for (let i = 0; i < keys.length; i++) {
    let row = [];
    for (let j = 0; j < mapKys.length; j++) {
      row[mapKeys[mapKys[j]]] = obj[keys[i]][mapKys[j]];
    }
    output.push(row);
  }
  return output;
}

let displayData = [];
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

// Request to get all date in the database, and then display it
// function getALL() {
//   fetch("http://127.0.0.1:8000/api/assets")
//     .then((res) => {
//       console.log("response waiting for body: ", res);
//       return res.json();
//     })
//     .then((data) => {
//       fetchedData = data;
//       displayData = mapData(fetchedData);
//       loadout(displayData);
//       currentData = displayData;
//     })
//     .catch((err) => {
//       console.log("error: ", err);
//     });
// }

const getAsync = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/assets");
    const data = await res.json();
    console.log(data);
    displayData = mapData(data);
    loadout(displayData);
    currentData = displayData;
  } catch (err) {
    console.log("danger: ", err);
  }
};

function onLoad() {
  resetTable();
  //getALL();
  getAsync();
}
// *******************************************************

/**********Add asset to database******** */
/*
http://127.0.0.1:8000/api/assets?asset_id=11234&serial_no
=FXY3210&ticket-no=12&type=monitor
*/
/*****************************************************/

/*****************Validate Asset in Database******************* */
/*
http://127.0.0.1:8000/api/assets/3?asset_id=11226&
serial_no=dsfss234&ticket-no=15&location=Delta Towers 26 BayE12
*/
/************************************************************** */

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
  for (let i = 1; i < rowData.length + 1; i++) {
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

//
