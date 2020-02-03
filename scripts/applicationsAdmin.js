const content = document.querySelector('#dash');
let emailID = sessionStorage.getItem("email");

const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let Tidd = data.id;
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
    let IDhold = sessionStorage.getItem("idd");


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
                                    <td> ${TINnum}   	<a target="_blank" href=" ${taxDoc}"><button  class="btn btn-sm btn-outline-success" >	<span class="lnr lnr-pencil"></span></button></a> </td>
                                    <td> ${CACnum}   	<a target="_blank" href=" ${cacDoc}"><button  class="btn btn-sm btn-outline-success" >	<span class="lnr lnr-pencil"></span></button></a> </td>
                                    <td> ${NIMCnum}   	<a target="_blank" href=" ${nimcDoc}"><button  class="btn btn-sm btn-outline-success" >	<span class="lnr lnr-pencil"></span></button></a> </td>
                                    	<td>
                                  <div class="table-action">
                                     	<button  class="btn btn-sm btn-outline-success" onclick="rel()" value="${IDhold}"  id="bttn"></span>Certify</button>
                                    
																	
																
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
  .where("status", "==", "In Progress")
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
