const iso = document.querySelector("#iso");
const compname = document.querySelector("#compname");
const namee = document.querySelector(".namee");
const tin = document.querySelector("#tin");
const nimc = document.querySelector("#nimc");
const cac = document.querySelector("#cac");
const year = document.querySelector("#year");




let id = window.location.search.split("?")[1];
db.collection("applications")
  .doc(id)
  .get()
  .then(data => {

    let CACnum = data.data().CACnum;
    let NIMCnum = data.data().NIMCnum;
    let TINnum = data.data().TINnum;
    let address = data.data().address;
    let companyAddress = data.data().companyAddress;
    let companyName = data.data().companyName;
    let date = data.data().date;
    let email = data.data().email;
    let gender = data.data().gender;
    let lga = data.data().lga;
    let marital = data.data().marital;
    let mobile = data.data().mobile;
    let nation = data.data().nation;
    let name = data.data().name;
    let state = data.data().state;
    let status = data.data().status;
    let cacDoc = data.data().cacDoc;
    let nimcDoc = data.data().nimcDoc;
    let taxDoc = data.data().taxDoc;


    console.log(name);



    const htmlPname = `
      ${id}
      `;
    iso.innerHTML = htmlPname;

    const htmlPdate = `
     ${companyName}
      `;
    compname.innerHTML = htmlPdate;

    const htmlPemail = `
      ${name}
      `;
    namee.innerHTML = htmlPemail;

    const htmlPmobile = `
      ${TINnum}
      `;
    tin.innerHTML = htmlPmobile;

    const htmlPage = `
        ${NIMCnum}
      `;
    nimc.innerHTML = htmlPage;

    const htmlPsex = `
     ${CACnum}
      `;
    cac.innerHTML = htmlPsex;

    const htmlYear = `
    2020 - 2021
      `;
    year.innerHTML = htmlYear;



  })
  .catch(err => {
    console.error(err);
  });
