module.exports = tempData => {

let htmlTemplate = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile Generator</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/c02a174431.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Krona+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="columns">
        <h2 class="titlebar column is-full has-text-white has-text-centered is-size-1">My Team</h2>
    </div>

    <div class="columns is-multiline is-centered">`

    tempData.forEach(data => {
    if(data.officeNumber) {
        htmlTemplate += `<div class="column is-one-quarter empTile">
        <div class="columns">
            <div class="column is-size-4 empStats" id="empStats"><span class="uName">${data.name}</span>
                <div class="columns">
                    <i class="column fa-solid fa-users mt-2 is-narrow pr-0"></i>
                    <p class="column">${data.role}</p>
                </div>
            </div>
        </div>

        <div class="column is-full is-size-5 empDetails" id="empDetails">ID: ${data.id}
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">Email: <a
                href="mailto:${data.email}"> ${data.email}</a>
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">Office #: ${data.officeNumber}
        </div>
    </div>`
    }
    else if(data.github) {
        htmlTemplate += `<div class="column is-one-quarter empTile">
        <div class="columns">
            <div class="column is-size-4 empStats" id="empStats"><span class="uName">${data.name}</span>
                <div class="columns">
                    <i class="column fa-solid fa-user-gear is-narrow mt-2 pr-0"></i>
                    <p class="column">${data.role}</p>
                </div>
            </div>
        </div>

        <div class="column is-full is-size-5 empDetails" id="empDetails">ID: ${data.id}
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">Email: <a
                href="mailto:${data.email}"> ${data.email}</a>
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">Github: <a
                href="https://github.com/${data.github}"> ${data.github}</a>
        </div>
    </div>`
    }
    else if(data.school) {
        htmlTemplate += `<div class="column is-one-quarter empTile">
        <div class="columns">
            <div class="column is-size-4 empStats" id="empStats"><span class="uName">${data.name}</span>
                <div class="columns">
                    <i class="column fa-solid fa-user-graduate is-narrow mt-2 pr-0"></i>
                    <p class="column">${data.role}</p>
                </div>
            </div>
        </div>

        <div class="column is-full is-size-5 empDetails" id="empDetails">ID: ${data.id}
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">Email: <a href="mailto:${data.email}"> ${data.email}</a>
        </div>
        <div class="column is-full is-size-5 empDetails" id="empDetails">School: ${data.school}
        </div>
    </div>`
    }
})
htmlTemplate += `</div></body></html>`
return htmlTemplate

}