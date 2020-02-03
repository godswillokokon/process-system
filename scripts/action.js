
function rel() {

  let rel = document.getElementById("bttn").value;
  console.log(rel);
  let IDhold = sessionStorage.getItem("idd")
  console.log(IDhold);
  db.collection("applications").doc(IDhold).update({
    status: "Certified",
  });


  db
    .collection('applications')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );
}


function pro() {

  let hold = document.getElementById("bttn").value;
  db.collection("applications").doc(hold).update({
    status: "In Progress",
  });


  db
    .collection('applications')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );
}


