let emaill = sessionStorage.getItem("email");

const setupContent = data => {

  data.forEach(data => {
    let id = data.id;
    console.log(id);

    sessionStorage.setItem(
      "idd",
      id
    );
  });

};

let first = db
  .collection('applications')
  .where("email", "==", emaill)
  .limit(1)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
