const tableData = [
    [11111, "bxt12341", "Delta Towers 24 Bay5", "23 June", 123, "Desktop"]
];

function onLoad(){
    console.log("loading...");
    let tablebody = document.querySelector("#tableBody");
    for(let i=0; i<tableData.length; i++){
        console.log("i....");
        let tr = createTR(i, tableData[i]);
        tablebody.appendChild(tr);
    }
}

let scopeRow = 2;

function createTR(rowID, rowData){
    console.log("tr...");
    let tr = document.createElement("tr");
    // let th = document.createElement("th");
    // th.setAttribute("scope", "row");
    // th.innerHTML = scopeRow;
    // scopeRow++;
    // tr.appendChild(th);
    tr.setAttribute("id", "row"+rowID);
    for(let i=0; i<rowData.length+1; i++){
        let btn = i===rowData.length;
        let inner = i===rowData.length ? createValidateBtn(rowID) : rowData[i];
        let td = createTD(inner, rowID, btn, i);
        tr.appendChild(td);
    }
    return tr;
}

function createTD(inner, rowID, btn, colID){
    console.log("td...");
    let td = document.createElement('td');
    td.setAttribute("id","element"+rowID+colID);
    if(btn){
        td.appendChild(inner);
    }else{
        td.innerHTML = inner;
    }
    // td.innerHTML = btn ? td.appendChild(inner) : inner;
    return td;
}

function createValidateBtn(rowid){
    let button =  document.createElement("button");
    button.setAttribute("class", "btn btn-secondary");
    // button.setAttribute("onclick", validatation function);
    button.innerHTML = "Validate";
    return button;
}