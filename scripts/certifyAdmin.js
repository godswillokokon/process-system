const contentCA = document.querySelector('#certify');
let emailIDD = sessionStorage.getItem("email");

const setupContentca = data => {
  let html = '';
  data.forEach(data => {
    let Pid = data.id;
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
																		<td>
																		 ${companyName}
																		</td>
																		<td> ${companyAddress}</td>
																		<td> ${TINnum}</td>
																		<td> ${CACnum}</td>
                                    <td> ${NIMCnum}</td>
                                      <td><a href="./admin.html?${Pid}" ><button type="button" class="btn btn-danger"><i class="fa fa-external-link-square" aria-hidden="true"></i></button> </a></td>
																		  	<td>
                                  <div class="table-action">
                                  
                                      <button  class="btn btn-sm btn-outline-danger" onclick="pro()" value="${Pid}"  id="bttn">In Progress</button>
																	
																
																	</div>
																</td>
																	</tr>			
    `;
    html += div;
  });
  contentCA.innerHTML = html;





};

db
  .collection('applications')
  .where("status", "==", "Certified")
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContentca(data);
    },
    err => {
      console.log(err);
    }
  );
