function addRecommendation() {
    showPopup(true);
  
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    let name = document.querySelector("input[type='text']").value.trim();
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
      
        // Create a new 'recommendation' element and set its value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
      
        // Add the formatted content: message in quotes, name on new line and aligned right
        element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span><br/><div style="text-align: right; font-weight: bold;">${name}</div>`;
      
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element); 
        
        // Reset the value of the textarea and name input
        recommendation.value = "";
        document.querySelector("input[type='text']").value = "";
    }
}



function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
      document.getElementById('popup').querySelector('h3').textContent = "Thanks for leaving a recommendation to Isaac Newton";
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
