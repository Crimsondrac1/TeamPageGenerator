module.export = pageGen => {
    console.log(tempData)

let empTempData = ` Insert HTML here `

tempData.forEach(data => {
    if(data.officeNumber) {
        empTempData =+ ` Enter Manager template here `
    }
    else if(data.github) {
        empTempData =+ ` Enter Engineer template here `
    }
    else if(data.school) {
        empTempData =+ ` Enter Intern template here `
    }
})
empTempData =+ ` Enter Footer HTML here `

return empTempData

}