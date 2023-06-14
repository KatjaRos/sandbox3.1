import "./styles.css";
const table_body = document.getElementById("table-body");
getData();

async function getData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const data = await fetch(url);
  const datasetMuni = await data.json();
  const area = datasetMuni.dataset.dimension.Alue.category.label;
  const values1 = datasetMuni.dataset.value;

  for (var i = 0; i < values1.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = Object.values(area)[i];
    td2.innerHTML = values1[i];
    tr.appendChild(td1);
    tr.appendChild(td2);
    console.log(Object.values(area)[i]);
    console.log(values1[i]);
    table_body.appendChild(tr);
  }
}
