let emaill = sessionStorage.getItem("email");

const setupContent = data => {
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
