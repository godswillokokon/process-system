auth.onAuthStateChanged(user => {
  if (user) {
    let currentUser = firebase.auth().currentUser.email;
    sessionStorage.setItem("user", currentUser);
    let currentUserSession = sessionStorage.getItem("user");

    console.log(currentUserSession);

    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  const Uname = signupForm["Username"].value;

  //signup user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          // console.log(idToken);
          // Send token to your backend via HTTPS
          // setupUI(cred);

          return db
            .collection("users")
            .doc(cred.user.email)
            .set({
              Uname
            });
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(cred.user);


      console.log(Uname);

      let nameSession = sessionStorage.setItem("username", name);
      setTimeout(function () {
        location.href = "dashboard.html";
      }, 3000);

    })
    .catch(err => {
      console.log(err);
      alert("err:", err)
    });
});
