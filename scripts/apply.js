const apply = document.querySelector("#apply");

apply.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const gender = document.getElementById("gender").value;
  const marital = document.getElementById("marital").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;
  const nation = document.getElementById("nation").value;
  const state = document.getElementById("state").value;
  const lga = document.getElementById("lga").value;
  const companyName = document.getElementById("companyName").value;
  const companyAddress = document.getElementById("companyAddress").value;
  const NIMCnum = document.getElementById("nimc").value;
  const CACnum = document.getElementById("cac").value;
  const TINnum = document.getElementById("tin").value;
  const status = "In progress";
  sessionStorage.setItem(
    "email",
    email
  );

  return db
    .collection("applications")
    .doc()
    .set({
      date,
      name,
      gender,
      marital,
      email,
      mobile,
      address,
      nation,
      state,
      lga,
      companyName,
      companyAddress,
      NIMCnum,
      CACnum,
      TINnum,
      status
    }, alert(`Hello ${name}, You are almost there!!!`))
    .catch(err => {
      console.error(err);
      alert("err : ", err)
    });

});

