const content = document.querySelector('#dash');
let emailID = sessionStorage.getItem("email");

const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
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
																		<td> ${name}</td>
																		<td> ${email}</td>
                                    <td> ${lga}</td>
                                    <td> ${TINnum}    <button  class="btn btn-sm btn-outline-success" onclick="rel()" value="${id}"  id="bttn">	<span class="lnr lnr-pencil"></span></button></td>
                                    <td> ${CACnum}    <button  class="btn btn-sm btn-outline-success" onclick="rel()" value="${id}"  id="bttn">	<span class="lnr lnr-pencil"></span></button></td>
                                    <td> ${NIMCnum}    <button  class="btn btn-sm btn-outline-success" onclick="rel()" value="${id}"  id="bttn">	<span class="lnr lnr-pencil"></span></button></td>
                                    	<td>
                                  <div class="table-action">
                                     <button  class="btn btn-sm btn-outline-success" onclick="rel()" value="${id}"  id="bttn"></span>ertify</button>
                                      <button  class="btn btn-sm btn-outline-danger" onclick="pro()" value="${id}"  id="bttn">		 In Progress</button>
																	
																
																	</div>
																</td>
																		
																	</tr>			
    `;
    html += div;
  });
  content.innerHTML = html;





};

db
  .collection('applications')

  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
