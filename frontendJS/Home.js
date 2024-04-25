const ScriptButton = document.getElementById("scriptVideo")
const BuildButton = document.getElementById("buildVideo")
const select_btn = document.getElementById("select_btn")

function ButtonClicked(Page) {
    if (Page == `Scripting`) {
        console.log("Opening My Scripting Portfolio. Please Wait.")
        location.href("ScriptingPortfolio.html")
    } else if (Page == `builds`) {
        console.log("Opening My Building Portfolio. Please Wait.")
        location.href("https://acceierate2.github.io/RobloxPortfolio/BuildsPortfolio.html")
    }
}

function ShowSelectionUi(Show) {

    if (Show == true) {
        console.log("Showing Selection Ui.");
        document.getElementById("skillsframe").style.visibility = "visible"
    }

}

ScriptButton:onclick = function(MouseEvent) {    ButtonClicked(`Scripting`)  }
BuildButton:onclick = function(MouseEvent) {    ButtonClicked(`builds`) }
select_btn:onclick = function(MouseEvent) {ShowSelectionUi(true)}
