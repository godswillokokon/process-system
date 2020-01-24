const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let Tutorusername = sessionStorage.getItem("adminUsername");

let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");
let page = document.getElementById("whole");

let date;
let duration;
let format;
let tag;


fileUpload.addEventListener("change", event => {
  let courseDescription = document.getElementById("courseDescription").value;
  let courseTitle = document.getElementById("courseTitle").value;
  let courseLevel = document.getElementById("courseLevel").value;
  // console.log("insdie", courseDescription);
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);
  const html = `
      <div class="preloader">
        <div class="sk-double-bounce">
            <div class="sk-child sk-double-bounce1"></div>
            <div class="sk-child sk-double-bounce2"></div>
        </div>
      </div>
      `;
  page.innerHTML = html;
  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      const html = `
      
      `;
      page.innerHTML = html;
      // console.log(res);
      imgPreview.src = res.data.secure_url;
      let video = res.data.secure_url;
      date = res.data.created_at;
      duration = res.data.duration;
      // console.log(courseTitle);
      // console.log(courseDescription);

      return db
        .collection("class")
        .doc()
        .set({
          lesson: imgPreview.src,
          courseTitle,
          courseDescription,
          date,
          duration,
          courseLevel,
          Tutorusername
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
    });
});
// console.log(courseTitle);
// console.log(courseDescription);
function Next() {
  location.href = "instructor-courses.html";
}
function Reload() {
  location.href = "instructor-edit-course.html";
}
