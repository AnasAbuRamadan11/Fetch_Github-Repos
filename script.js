// Main Variables


let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")


window.onload = function() {

    theInput.focus()
}

getButton.onclick = function () {

    getRepos()
}

// get Repos Function
function getRepos() {

    // if value is empty
    if (theInput.value == "") {

        reposData.innerHTML = "<span>Please write github username</span>"
    }

    else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then((response) => response.json())

            .then((repositories) => {

                // Empty the container
                reposData.innerHTML = ""

                // loop on Repositories
                repositories.forEach(repo => {


                    // Create the main div ele
                    let mainDiv = document.createElement("div")

                    // mainDiv.style = "padding:10px"


                    // create repo name text
                    let repoName = document.createTextNode(repo.name)

                    // append the text to main div
                    mainDiv.appendChild(repoName)


                    // create Repo url anchor 
                    let theUrl = document.createElement("a")

                    // create repo url text
                    let theUrlText = document.createTextNode("Visit")


                    // append the repo url text to Anchor tag
                    theUrl.appendChild(theUrlText)


                    // add the hypertext reference (href)
                    theUrl.href = `https://${theInput.value}.github.io/${repo.name}/`


                    theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                    // set attribute blank
                    theUrl.setAttribute("target", "_blank")

                    // append url Anchor to main div
                    mainDiv.appendChild(theUrl)

                    // create stars count span
                    let starsSpan = document.createElement("span")


                    // create the stars count text
                    let starsText = document.createTextNode(`Stars: ${repo.stargazers_count}`)

                    // add stars count text to stars span
                    starsSpan.appendChild(starsText)

                    // append stars count span to main div
                    mainDiv.appendChild(starsSpan)

                    // add class to main div
                    mainDiv.className = "repo-box"


                    // append the main div to container
                    reposData.appendChild(mainDiv)

                    

                })
            })
            }
}