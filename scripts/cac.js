const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";



let TaxUpload = document.getElementById("cac-upload");
let id;





TaxUpload.addEventListener("change", event => {

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);

  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {

      let hj = res.data.secure_url;


      let hold = sessionStorage.getItem("idd");

      db.collection("applications").doc(hold).update({

        taxDoc: res.data.secure_url
      });


      console.log("donee");

    })
    .catch(err => {
      console.error(err);
    });
});