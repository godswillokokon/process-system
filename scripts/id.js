let emaill = sessionStorage.getItem("email");

const setupContentid = data => {

  let arr = data.slice(-1)[0].id;
  sessionStorage.setItem(
    "idd",
    arr
  );
  console.log(arr);


};

let first = db
  .collection('applications')
  .where("email", "==", emaill)

  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContentid(data);
    },
    err => {
      console.log(err);
    }
  );
