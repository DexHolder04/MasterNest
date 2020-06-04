function filterDropDown() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("species");
  filter = input.value.toUpperCase();
  table = document.getElementById("nestchart");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterSearch() {
  var td, i, txtValue;
  var input = document.getElementById("nestCC"),
      filter = input.value.toUpperCase(),
      table = document.getElementById("nestchart"),
      tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (filter == ("" || "," || "." || "-") || filter.length <= 3) {
        tr[i].style.display = "none";
      } else if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
