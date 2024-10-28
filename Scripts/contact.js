const firebaseConfig = {
        apiKey: "AIzaSyDWFnFwbqe2tNBTDBSxG5aLdLYFkk3Tf5A",
        authDomain: "datos-formulario-f1665.firebaseapp.com",
        projectId: "datos-formulario-f1665",
        storageBucket: "datos-formulario-f1665.appspot.com",
        messagingSenderId: "386192953396",
        appId: "1:386192953396:web:3dfa85d93b546a2ec73a61",
        measurementId: "G-LD6KGG3NXB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();





const formulario = document.getElementById("formulario");
const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const select = document.getElementById("select");
const textarea = document.getElementById("textarea");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorName = document.getElementById("name-error");
const errorApellido = document.getElementById("apellido-error");
const errorMsj = document.getElementById("msj-error");
const errorMail = document.getElementById("email-error");


formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (nombre.value.length < 3 || nombre.value.length >12 ) {
        errorName.textContent = "El nombre que ingresaste no es valido!";
        errorName.classList.add("error-message");
    }
    else {errorName.textContent = "";
        errorName.classList.remove("error-message");
    }
    if (apellido.value.length <4 || apellido.value.length >12){
        errorApellido.textContent = "El apellido que ingresaste no es valido!";
        errorApellido.classList.add("error-message")
    }
    else {errorApellido.textContent = "";
        errorApellido.classList.remove("error-message");
    }
    if (textarea.value.length <5) {
        errorMsj.textContent = "El mensaje que mandaste no es valido!";
        errorMsj.classList.add("error-message");
    }
    else {errorMsj.textContent = "";
        errorMsj.classList.remove("error-message");
    }
    if(!emailRegex.test(email.value)) {
        errorMail.textContent = "El mail que ingresaste no es valido!";errorMail.classList.add("error-message");
    }
    else {errorMail.textContent = "";
        errorMail.classList.remove("error-message")
    }
    if (!errorName.textContent && !errorApellido.textContent && !errorMail.textContent && !errorMsj.textContent) {
        db.collection("users").add({
            nombre: nombre.value,
            apellido: apellido.value,
            email : email.value,
            mensaje : textarea.value,
            tipoUser : select.value,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        select.value = "";
        textarea.value = "";

        alert("Tu informacion de contacto ha sido enviada con exito, a la brevedad nos contactaremos con vos");
    }
})