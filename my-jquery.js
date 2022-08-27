
const MAX_ALLOWED_CHARACTERS = 5;

function configureEvents() {
    $("#txta1").keyup(onNewText);
}

function onNewText() {
     let text = $(this).val();
     if (checkTextExceedsLimit(text)) {
         $(this).val(text.substring(0,MAX_ALLOWED_CHARACTERS));
         alert("Ati depasit numarul de caractere!");
          
          return;
     }

     updateCharactersCounter(text);
     updateTranslationTextarea(text);
}

function checkTextExceedsLimit(text) {
	if (text.length > MAX_ALLOWED_CHARACTERS) {
        return true;
        }

        return false;
}

function updateCharactersCounter(text) {
         $("#nrlitere").text(text.length);
}

function updateTranslationTextarea(text) {
          $("#txta2").text(text);
}

function updateFirstTextarea(text) {
   $("#txta1").text(text);
}

$(function () {
   configureEvents(); 
});