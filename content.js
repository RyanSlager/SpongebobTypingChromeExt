$(document).ready(function(){
  
  $(document.activeElement).keypress(function(e){
    var curTag = document.activeElement;
    //console.log(curTag);
    //public-DraftStyleDefault-block public-DraftStyleDefault-ltr
    if((curTag.tagName == "INPUT" && curTag.getAttribute("type") == "text") ||
        curTag.tagName == "TEXTAREA" ||
        (curTag.tagName == 'DIV' && curTag.getAttribute("class") == "notranslate public-DraftEditor-content")){

        var text;
        
        if(curTag.tagName == "INPUT" || curTag.tagName == "TEXTAREA"){
          text = $(curTag).val();  
        }
        else if(curTag.getAttribute("class") == "notranslate public-DraftEditor-content"){
          text = document.getElementsByClassName("notranslate public-DraftEditor-content")[0].textContent;
          //text = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0].firstChild.firstChild.firstChild.textContent;
        }

        if(((e.which >= 65 && e.which <= 90)||(e.which >= 97 && e.which <= 122))){ 
          //var textArea = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0];
          var textArea = document.getElementsByClassName("notranslate public-DraftEditor-content")[0];
          var lastChar = text.slice(text.length - 1, text.length);
          if(lastChar == lastChar.toUpperCase()){ 
            if(e.which >= 65 && e.which <= 90){
              var lowerChar = String.fromCharCode(e.which).toLowerCase();
              var lastRemovedTextUp = text.slice(0,text.length);
              var finalTextUp = lastRemovedTextUp.concat(lowerChar);
              if(curTag.tagName == "INPUT" || curTag.tagName == "TEXTAREA"){
                $(curTag).val(finalTextUp); 
              }
              else if(curTag.getAttribute("class") == "notranslate public-DraftEditor-content"){
                textArea.textContent = finalTextUp;
                cursorManager.setEndOfContenteditable(textArea);
              }
              return false;
            }
          }   
          else if(lastChar == lastChar.toLowerCase()){
            if(e.which >= 97 && e.which <= 122){
              var upperChar = String.fromCharCode(e.which).toUpperCase();
              var lastRemovedTextLow = text.slice(0,text.length);
              var finalTextLow = lastRemovedTextLow.concat(upperChar);
              if(curTag.tagName == "INPUT" || curTag.tagName == "TEXTAREA"){
                $(curTag).val(finalTextLow); 
              }
              else if(curTag.getAttribute("class") == "notranslate public-DraftEditor-content"){
                textArea.textContent = finalTextLow;
                cursorManager.setEndOfContenteditable(textArea);
              }
              return false;
            }
          }   
        }  
  	  } 
    });  
});