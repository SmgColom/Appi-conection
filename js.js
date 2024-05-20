// <!-- This script allows the website to be interactive by the functions created which displays different contents depending of the soccer player the user selects and the player´s position on the soccer field   -->


// This is search box in the document
const searchBox = document.getElementById('searchBox')
// This is search button in the document
const searchButton = document.getElementById('searchButton')
// This is the URL address of the API
const APIURL = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?"


// This function triggers the other functions on the script by making them display data depending of the soccer player selected by the user  
searchButton.addEventListener("click", search);


// This function transforms the value given by the user in the search box into a parameter 
    function search() {
        const query = searchBox.value
        loadData(query)

  }

    async function loadData(query) {

// Query is the parameter of the function. This function connects with the API and returns the data depending of the parameter

    try {
        const response = await fetch(APIURL + `p=${query}`); 
        const data = await response.json()
        console.log(data);
       displayData(data)
    } catch (error) {
        console.log(error);
    }
}

// This function displays the data in the website

      function displayData(data) {


    if (data.player == null) {

// In here the connection with the API is checked and if there is an error, it is communicated to the user
        console.log('error worked')
        document.getElementById("error").innerHTML = "No player found"
       
    } else {

        // This is the name of the wanted player
        const strPlayer = document.getElementById("Name")
        strPlayer.innerText = data.player[0].strPlayer

        // This is the nickname of the wanted player
        const strPlayerAlternate = document.getElementById("Nickname")
        strPlayerAlternate.innerText = data.player[0].strPlayerAlternate

          // This is the team of the wanted player
        const strTeam = document.getElementById("Team")
        strTeam.innerText = data.player[0].strTeam

          // This is the nationality of the wanted player
        const strNationality = document.getElementById("Nationality")
        strNationality.innerText = data.player[0].strNationality

         // This is am brief description of the wanted player
        const strDescriptionEN = document.getElementById("Description")
        strDescriptionEN.innerText = data.player[0].strDescriptionEN
    
        // This is an image of the wanted player
        const strThumb = document.getElementById("Image")
        strThumb.src = data.player[0].strThumb

        // This is the position of the wanted player
        const strPosition = document.getElementById("Position")
        strPosition.innerText = data.player[0].strPosition


    }

// This function changes the marked position on the soccer field depending of the player position


  
        if (data.player[0].strPosition=="Goalkeeper"){
	        updatePlayerPosition(5, 50);
        } else if(data.player[0].strPosition=="Centre-Back"){
	        updatePlayerPosition(15, 50);
        } else if(data.player[0].strPosition=="Right-Back"){
	        updatePlayerPosition(15, 85);
        } else if(data.player[0].strPosition=="Left-Back"){
	        updatePlayerPosition(15, 15);
        } else if(data.player[0].strPosition=="Defensive Midfield"){
	        updatePlayerPosition(40, 50);
        } else if(data.player[0].strPosition=="Central Midfield"){
	        updatePlayerPosition(55, 50);
        } else if(data.player[0].strPosition=="Attacking Midfield"){
	        updatePlayerPosition(65, 50);

        } else if(data.player[0].strPosition=="Right Winger" || data.player[0].strPosition=="Right Wing"){
	        updatePlayerPosition(90, 70);

        } else if(data.player[0].strPosition=="Left Winger" || data.player[0].strPosition=="Left Wing"){
	        updatePlayerPosition(90, 28);

        } else if(data.player[0].strPosition=="Centre-Forward" || data.player[0].strPosition=="Forward"){
	        updatePlayerPosition(90, 50);

        }

    


}

    /** 
* updatePlayerPosition = Moves a player to a new position on the ground
* @param {number} x - The x coordinate to move to right or left
* @param {number} y - The y coordinate to move to up or down
* @return {array}
* var name = (player)
* @type {object}
  
*/

function updatePlayerPosition(x, y) {
  var player = document.querySelector('.player');
  player.style.left = x + '%';
  player.style.top = y + '%';
  }

const inputField = document.getElementById('inputField');
const save = document.getElementById('save');
const displaySavedInfo = document.getElementById('displaySavedInfo');

save.addEventListener('click', saveData);



function saveData() {
	if (nameField.value == "") {
		nameField.style.border = "1px solid red";
		document.getElementById('saveError').innerHTML = "Please enter some data";
	} else {
		nameField.style.border = "1px solid black";
		document.getElementById('saveError').innerHTML = "";
		localStorage.setItem("data", nameField.value)
	}
}



