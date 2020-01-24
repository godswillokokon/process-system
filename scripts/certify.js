const contentC = document.querySelector('#certify');
let emailIDD = sessionStorage.getItem("email");

const setupContentc = data => {
  let html = '';
  data.forEach(data => {
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



    const div = `
    <tr>
    	<tr>
																		<td>
																		 ${companyName}
																		</td>
																		<td> ${companyAddress}</td>
																		<td> ${TINnum}</td>
																		<td> ${CACnum}</td>
																		<td> ${NIMCnum}</td>
																		
																	</tr>			
    `;
    html += div;
  });
  contentC.innerHTML = html;





};

db
  .collection('applications')
  .where("email", "==", emailIDD).where("status", "==", "Certified")
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContentc(data);
    },
    err => {
      console.log(err);
    }
  );
