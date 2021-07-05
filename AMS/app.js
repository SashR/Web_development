const mapKeys = {
  id: 0,
  "ticket-no": 5,
  asset_id: 1,
  location: 3,
  type: 6,
  updated_at: 4,
  serial_no: 2,
  status: 7,
  details: 8,
  site: 9,
};

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
    fetchedData = data;
    displayData = mapData(data);
    currentData = displayData;
    loadout(currentData);
  } catch (err) {
    errorHandler("Error on Loading");
  }
};

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

function onLoad() {
  resetTable();
  errorHandler("", true);
  //getALL();
  getAsync();
}
// *******************************************************

/**********Add asset to database******** */
/*
http://127.0.0.1:8000/api/assets?asset_id=11234&serial_no
=FXY3210&ticket-no=12&type=monitor
*/

async function addCall() {
  let newAsset = addObject();
  let newID = document.getElementById("asset_idAdd").value;
  let newSN = document.getElementById("serial_noAdd").value;
  let newTkt = document.getElementById("ticket-noAdd").value;
  function duplicateDetect(value) {
    return displayData.every((item) => item.indexOf(value) === -1);
  }

  console.log(newAsset);
  try {
    if (!duplicateDetect(newID)) {
      throw "duplicate ID value";
    } else if (!duplicateDetect(newSN)) {
      throw "duplicate serial number";
    } else if (!duplicateDetect(newTkt)) {
      throw "duplicate ticket number";
    }
    const res = await axios.post("http://127.0.0.1:8000/api/assets", newAsset);
    onLoad();
    console.log(res);
  } catch (err) {
    errorHandler(err);
    console.log(err);
  }
  // console.log(addObject());
}

function addObject() {
  return {
    serial_no: document.getElementById("serial_noAdd").value,
    asset_id: document.getElementById("asset_idAdd").value,
    "ticket-no": document.getElementById("ticket-noAdd").value,
    location: document.getElementById("locationAdd").value,
    type: document.getElementById("typeAdd").value,
    status: document.getElementById("statusAdd").value,
    supplier_price: document.getElementById("supplierPriceAdd").value,
    financier: document.getElementById("financierAdd").value,
    details: document.getElementById("detailsAdd").value,
    site: document.getElementById("siteAdd").value,
  };
}

/*****************************************************/

/*****************Validate Asset in Database******************* */
/*
http://127.0.0.1:8000/api/assets/3?asset_id=11226&
serial_no=dsfss234&ticket-no=15&location=Delta Towers 26 BayE12
*/
async function validateAsset() {
  try {
    console.log(validateID + 1);
    let targetID = displayData[validateID][0];
    let validateObj = fetchedData[validateID];
    validateObj["location"] = document.getElementById("validateLoc").value;
    console.log(validateObj);
    const res = await axios.put(
      `http://127.0.0.1:8000/api/assets/${targetID}`,
      validateObj
    );
    onLoad();
  } catch (err) {
    errorHandler("Issue Detected");
  }
}
/************************************************************** */

/*******************Error Handler***************** */

function errorHandler(err, reset = false) {
  let alertMes = document.querySelector("#alert");
  alertMes.setAttribute("class", "alert alert-danger");
  reset
    ? alertMes.setAttribute("class", "")
    : alertMes.setAttribute("class", "alert alert-danger");
  reset ? (alertMes.innerHTML = "") : (alertMes.innerHTML = err);
}

/********************************************** */

function onFilter() {
  let searchfield = document.querySelector("#searchfield");
  let searchData = filter(searchfield.value);
  if (searchfield.value !== "") {
    resetTable();
    loadout(searchData);
    currentData = searchData;
    searchfield.value = "";
  }
}

function filter(str) {
  let output = [];
  let checkStr = "";
  for (let i = 0; i < currentData.length; i++) {
    for (let j = 1; j < currentData[i].length; j++) {
      checkStr = currentData[i][j];
      if (checkStr !== null) {
        if (checkStr.indexOf(str) !== -1) {
          output.push(displayData[i]);
        }
      }
    }
  }
  return output;
}

/************************************************* */

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

let validateID = 0;

function createValidateBtn(rowID) {
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-secondary");
  button.setAttribute("onclick", `setValidID(${rowID})`);
  button.setAttribute("data-target", "#validateModal");
  button.setAttribute("data-toggle", "modal");
  button.innerHTML = "Validate";
  return button;
}

function setValidID(id) {
  validateID = id;
}

//
