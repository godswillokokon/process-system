const CLOUDINARY_URLL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESETT = "i4hpnx9j";
const CLOUD_NAMEE = "ogcodes";



let CacUpload = document.getElementById("cac-upload");






CacUpload.addEventListener("change", event => {

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESETT);
  console.log(file);

  axios({
    url: CLOUDINARY_URLL,
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

        cacDoc: res.data.secure_url
      });
      alert("Proceed");

      console.log("donee");

    })
    .catch(err => {
      console.error(err);
    });
});