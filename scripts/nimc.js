const CLOUDINARY_URLLL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESETTT = "i4hpnx9j";
const CLOUD_NAMEEE = "ogcodes";



let NimcUpload = document.getElementById("nimc-upload");






NimcUpload.addEventListener("change", event => {

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESETTT);
  console.log(file);

  axios({
    url: CLOUDINARY_URLLL,
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

        nimcDoc: res.data.secure_url
      });

      alert("Proceed");
      console.log("donee");

    })
    .catch(err => {
      console.error(err);
    });
});