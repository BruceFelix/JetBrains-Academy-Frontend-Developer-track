// let content = document.getElementById("textarea");
//
// let button1 = document.getElementById("#upper-case");
// button1.addEventListener('click',function() {
//    return content.value.toUpperCase();
// });
function lowerCase(){
   let lower = document.getElementById("textarea").value.toLowerCase();
    document.getElementById("textarea").value = lower;
}

function upperCase(){
   let upper = document.getElementById("textarea").value.toUpperCase();
   document.getElementById("textarea").value = upper;
}
function titleCase(){
   let propercase = document.getElementById("textarea").value.toLowerCase().split(' ');
   for (let i = 0; i < propercase.length; i++){
      propercase[i] = propercase[i].charAt(0).toUpperCase() + propercase[i].slice(1);
   }
   document.getElementById("textarea").value = propercase.join(' ');
}
document.getElementById("sentence-case").addEventListener("click", function()
{
   const textArea = document.querySelector("textarea").value;
   let sentences = textArea.split(". ");

   //(firstLetter + restOfWord) + restOfSentence
   sentences = sentences.map(sentence => (sentence[0][0].toUpperCase() + sentence[0].substring(1).toLowerCase())
       + sentence.substring(1).toLowerCase());

   document.querySelector("textarea").value = sentences.join(". ");
});
//save-txt-file event handler
document.getElementById("save-text-file").addEventListener("click", function()
{
   const text = document.querySelector("textarea").value;
   download("text.txt", text);
});

function download(filename, text) {
   let element = document.createElement('a');
   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
   element.setAttribute('download', filename);

   element.style.display = 'none';
   document.body.appendChild(element);

   element.click();

   document.body.removeChild(element);
}



