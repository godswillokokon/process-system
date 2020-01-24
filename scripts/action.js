
function rel() {

  let hold = document.getElementById("bttn").value;


  db.collection("applications").doc(hold).update({
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
    closed: "In Progress",
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


