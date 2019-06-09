$(document).ready(function(){
  
  $(document.activeElement).keypress(function(e){
  	var curTag = document.activeElement;
    if((curTag.tagName == "INPUT" && curTag.getAttribute("type") == "text") || curTag.tagName == "TEXTAREA"){
      var text = $(curTag).val();  
      if(text.length > 0 && ((e.which >= 65 && e.which <= 90)||(e.which >= 97 && e.which <= 122))){ 
        var lastChar = text.slice(text.length - 1, text.length);
        if(lastChar == lastChar.toUpperCase()){ 
          if(e.which >= 65 && e.which <= 90){
            var lowerChar = String.fromCharCode(e.which).toLowerCase();
            var lastRemovedTextUp = text.slice(0,text.length);
            var finalTextUp = lastRemovedTextUp.concat(lowerChar);
            $(curTag).val(finalTextUp);
            return false;
          }
        }   
        else if(lastChar == lastChar.toLowerCase()){
          if(e.which >= 97 && e.which <= 122){
            var upperChar = String.fromCharCode(e.which).toUpperCase();
            var lastRemovedTextLow = text.slice(0,text.length);
            var finalTextLow = lastRemovedTextLow.concat(upperChar);
            $(curTag).val(finalTextLow);
            return false;
          }
        }   
      }  
  	} 
  });  
});