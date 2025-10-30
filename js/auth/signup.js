// Implémenter le JS de ma page
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.querySelector("button[type='submit']"); // ✅ Ajouté

// Écouteurs d'événements
[inputNom, inputPreNom, inputMail, inputPassword, inputValidationPassword].forEach(input => {
    input.addEventListener("keyup", validateForm);
});

// Fonction permettant de valider tout le formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail); // ✅ utilise la vraie validation email
    const passwordOk = validatePassword(inputPassword); // ✅ utilise la vraie validation password
    const passwordMatchOk = validatePasswordMatch(inputPassword, inputValidationPassword);

    // Si tout est bon, activer le bouton
    if(nomOk && prenomOk && mailOk && passwordOk && passwordMatchOk){
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value.trim();
    if(emailRegex.test(mailUser)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input){
    // Mot de passe : 8+ caractères, 1 maj, 1 min, 1 chiffre, 1 spécial
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const passwordUser = input.value;
    if(passwordRegex.test(passwordUser)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePasswordMatch(input1, input2){
    if(input2.value !== "" && input1.value === input2.value){
        input2.classList.add("is-valid");
        input2.classList.remove("is-invalid");
        return true;
    } else {
        input2.classList.remove("is-valid");
        input2.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value.trim() !== ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
