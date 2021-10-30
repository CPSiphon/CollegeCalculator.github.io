const GPAslider = document.getElementById("GPA")
const SATslider = document.getElementById("SAT")
const GPAvalue = document.getElementById("GPAvalue")
const SATvalue = document.getElementById("SATvalue")
const chanceText = document.getElementById("chanceOutput")
const searchBar = document.getElementById("search")
const collegeInfo = document.getElementById("collegeInfo")
const collegeMajors = document.getElementById("collegeMajors")
const collegeWebsite = document.getElementById("collegeWebsite")
const collegeMajorsList = document.getElementById("collegeMajorsList")
const displayPicture = document.getElementById("picture")
const pictureInfo = document.getElementById("pictureContext")
const pictureWebsite = document.getElementById("pictureWebsite")



var statsHolder = {
    "University of California, Irvine":{
        GPAlow:3.4,
        percentile0GPA:0,
        percentile25thGPA:3.96,
        percentile75thGPA:4.28,
        percentile100thGPA:5,
        averageGPA:4.15,
        ChanceaverageGPA:43.12,
        Chancepercentile0GPA:0,
        ChancepercentileGPAlow:6.49,
        Chancepercentile25thGPA:38.04,
        Chancepercentile75thGPA:61.24,
        Chancepercentile100thGPA:75.93,
        
        //SAT variables

        SATlow:1100,
        percentile0SAT:0,
        percentile25thSAT:1180,
        percentile75thSAT:1440,
        percentile100thSAT:1600,
        averageSAT:1310,

        //ChanceaverageGPA is the same for both

        Chancepercentile0SAT:0,
        ChancepercentileSATlow:7.42,
        Chancepercentile25thSAT:23.56,
        Chancepercentile75thSAT:65.08,
        Chancepercentile100thSAT:74.16,

        AboutCollege:"The University of California Irvine is one of the top public university in the nation. The many classes offered and unique campus of UCI causes admission rates to be fairly are low and competitive.",
        collegeLink:"https://uci.edu/",
        CollegeStudies:"Aerospace Engineering, Biomedical Engineering, Business Economics, Chemical Engineering, Computer Science, Data Science, Electrical Engineering, Film and Media, Global Health, etc.",
        majorsList:"http://catalogue.uci.edu/undergraduatedegrees/",
        collegePicture:"https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/f/4096/files/2020/09/cropped-UCI_Humanities_Gateway_004-1.jpg",
        pictureContext:"Humanities Research Institute:",
        pictureLink:"https://www.humanities.uci.edu/humanitiescenter/",
        
    },
    "University of California, Los Angeles":{
        GPAlow:3.6,
        percentile0GPA:0,
        percentile25thGPA:4.35,
        percentile75thGPA:4.68,
        percentile100thGPA:5,
        averageGPA:4.52,
        ChanceaverageGPA:38,
        Chancepercentile0GPA:0,
        ChancepercentileGPAlow:5.92,
        Chancepercentile25thGPA:32.51,
        Chancepercentile75thGPA:57.71,
        Chancepercentile100thGPA:71.34,
        
        //SAT variables

        SATlow:1150,
        percentile0SAT:0,
        percentile25thSAT:1370,
        percentile75thSAT:1540,
        percentile100thSAT:1600,
        averageSAT:1450,

        //ChanceaverageGPA is the same for both

        Chancepercentile0SAT:0,
        ChancepercentileSATlow:2.13,
        Chancepercentile25thSAT:19.21,
        Chancepercentile75thSAT:48.71,
        Chancepercentile100thSAT:63.41,

        AboutCollege:"The University of California Los Angeles is a public university focused on research and discoveries. Being one of the top universities in the world, admission rates are low and extremely competitive.",
        collegeLink:"https://www.ucla.edu/",
        CollegeStudies:"Anthropology, Art History, Bioengineering, Biochemistry, Chemistry, Computer Science, Ecology, Economics, Geography, Linguistics, Mathematics, Neuroscience, Psychology, Sociology, etc.",
        majorsList:"https://registrar.ucla.edu/faculty-staff/courses-and-programs/major-and-minor-codes/undergraduate-majors-and-premajors",
        collegePicture:"https://s3.amazonaws.com/cms.ipressroom.com/173/files/20193/5cafc8ef2cfac23fe505eee5_Royce_005/Royce_005_28ae8d58-ab64-4b7e-87ef-ec1b46bf99cf-prv.jpg",
        pictureContext:"Royce Hall, UCLA:",
        pictureLink:"https://www.historictheatrephotos.com/Theatre-Photography/Royce-Hall-Los-Angeles.aspx",
    }

}


var GPAinput = 2.5
var GPAlow
var percentile0GPA
var percentile25thGPA
var percentile75thGPA
var percentile100thGPA
var averageGPA
var ChanceaverageGPA
var Chancepercentile0GPA
var ChancepercentileGPAlow
var Chancepercentile25thGPA
var Chancepercentile75thGPA
var Chancepercentile100thGPA
var SATinput = 800
var SATlow
var percentile0SAT
var percentile25thSAT
var percentile75thSAT
var percentile100thSAT
var averageSAT
var Chancepercentile0SAT
var ChancepercentileSATlow
var Chancepercentile25thSAT
var Chancepercentile75thSAT
var Chancepercentile100thSAT

var GPAdifference;
var GPAcalculatedChance;
var GPAcalculation;

//SAT

var SATdifference;
var SATcalculatedchance;
var SATcalculation;

var AboutCollege
var CollegeStudies
var collegeLink
var majorsList
var collegePicture
var pictureContext

//GPA CALCULATIONS

function calculateGPA()
{
    if (GPAinput > averageGPA)
    {
        if (GPAinput > percentile75thGPA)
        {
            GPAdifference = Math.abs(GPAinput - percentile75thGPA)
            GPAcalculatedChance = (GPAdifference/Math.abs(percentile100thGPA - percentile75thGPA)) * (Chancepercentile100thGPA - Chancepercentile75thGPA)
            GPAcalculation = Chancepercentile75thGPA + GPAcalculatedChance
        }
        else
        { //original condition was only less than, check math
            GPAdifference = Math.abs(GPAinput - averageGPA)
            GPAcalculatedChance = (GPAdifference/Math.abs(percentile75thGPA - averageGPA)) * (Chancepercentile75thGPA - ChanceaverageGPA)
            GPAcalculation = ChanceaverageGPA + GPAcalculatedChance
        }
    }
    else
    {
        if (GPAinput > percentile25thGPA)
        {
            GPAdifference = Math.abs(GPAinput - percentile25thGPA)
            GPAcalculatedChance = (GPAdifference/Math.abs(averageGPA - percentile25thGPA)) * (ChanceaverageGPA - Chancepercentile25thGPA)
            GPAcalculation = Chancepercentile25thGPA + GPAcalculatedChance
        }
        else
        { //CHECK MATH
            GPAdifference = Math.abs(GPAinput - GPAlow)
            GPAcalculatedChance = (GPAdifference/Math.abs(percentile25thGPA - GPAlow)) * (Chancepercentile25thGPA - ChancepercentileGPAlow)
            GPAcalculation = ChancepercentileGPAlow + GPAcalculatedChance
            //SATcalculation first value is always SATcalculatedchance last value
        }
    }
    if (GPAinput < GPAlow)
    {
        GPAdifference = Math.abs(GPAinput)
        GPAcalculatedChance = (GPAdifference/Math.abs(GPAlow - percentile0GPA)) * (ChancepercentileGPAlow - Chancepercentile0GPA)
        GPAcalculation = Chancepercentile0GPA + GPAcalculatedChance
    }
}


function calculateSAT()
{
    if (SATinput > averageSAT)
    {
        if (SATinput > percentile75thSAT)
        {
            SATdifference = Math.abs(SATinput - percentile75thSAT)
            SATcalculatedchance = (SATdifference/Math.abs(percentile100thSAT - percentile75thSAT)) * (Chancepercentile100thSAT - Chancepercentile75thSAT)
            SATcalculation = Chancepercentile75thSAT + SATcalculatedchance
        }
        else
        { //original condition was only less than, check math
            SATdifference = Math.abs(SATinput - averageSAT)
            SATcalculatedchance = (SATdifference/Math.abs(percentile75thSAT - averageSAT)) * (Chancepercentile75thSAT - ChanceaverageGPA)
            SATcalculation = ChanceaverageGPA + SATcalculatedchance
        }
    }
    else
    {
        if (SATinput > percentile25thSAT)
        {
            SATdifference = Math.abs(SATinput - percentile25thSAT)
            SATcalculatedchance = (SATdifference/Math.abs(averageSAT - percentile25thSAT)) * (ChanceaverageGPA - Chancepercentile25thSAT)
            SATcalculation = Chancepercentile25thSAT + SATcalculatedchance
        }
        else
        { //CHECK MATH
            console.log(SATinput)
            SATdifference = Math.abs(SATinput - SATlow)
            SATcalculatedchance = (SATdifference/Math.abs(percentile25thSAT - SATlow)) * (Chancepercentile25thSAT - ChancepercentileSATlow)
            SATcalculation = ChancepercentileSATlow + SATcalculatedchance
            console.log(SATcalculation)

            //SATcalculation first value is always SATcalculatedchance last value
        }
    }
    if (SATinput < SATlow)
    {
        SATdifference = Math.abs(SATinput)
        SATcalculatedchance = (SATdifference/Math.abs(SATlow - percentile0SAT)) * (ChancepercentileSATlow - Chancepercentile0SAT)
        SATcalculation = Chancepercentile0SAT + SATcalculatedchance
        console.log(SATcalculation)
    }
}

// 0.00009025 * (SATinput)^2 - 0.129045 * (SATinput) + 49.3865


//GPA and SAT weighting CALCULATIONS

function calculateData()
{
    calculateGPA()
    calculateSAT()
  
    if (GPAcalculation < 0)
    {
        GPAcalculation = 0
    }
    if (SATcalculation < 0)
    {
        SATcalculation = 1
    }
    
    // SATcalculation = SATcalculation * 0.35
    // GPAcalculation = GPAcalculation * 0.65
    var addData
    if (GPAinput > GPAlow)
    {
        addData = ((GPAcalculation * 8) + SATcalculation)/9
        chanceText.innerText = addData.toFixed(2) + "%"
        console.log(addData)
    }
    else 
    {
        addData = ((GPAcalculation * 3) + SATcalculation)/8
        chanceText.innerText = addData.toFixed(2) + "%"
        console.log(addData)
    }
    
}

function updateSATvalue()
{
    SATinput = SATslider.value * 16
    SATinput = (SATinput/10).toFixed(0) * 10
    SATvalue.innerText = SATinput
    calculateData()
}
function updateGPAvalue(e)
{
    GPAinput = e.value * .05
    GPAvalue.innerText = GPAinput.toFixed(2)
    calculateData()
}



//returning same persent because the SATinput range is set to less than SATlow so change calculations. 



function selectCollege(collegeElement)
{
    console.log(collegeElement)
    var collegeStats = statsHolder[collegeElement.innerText]
    document.getElementsByClassName("selectedCollege")[0]?.classList.remove("selectedCollege")
    collegeElement.classList.add("selectedCollege")

    GPAlow = collegeStats.GPAlow
    percentile0GPA = collegeStats.percentile0GPA
    percentile25thGPA = collegeStats.percentile25thGPA
    percentile75thGPA = collegeStats.percentile75thGPA
    percentile100thGPA = collegeStats.percentile100thGPA
    averageGPA = collegeStats.averageGPA
    ChanceaverageGPA = collegeStats.ChanceaverageGPA
    Chancepercentile0GPA = collegeStats.Chancepercentile0GPA
    ChancepercentileGPAlow = collegeStats.ChancepercentileGPAlow
    Chancepercentile25thGPA = collegeStats.Chancepercentile25thGPA
    Chancepercentile75thGPA = collegeStats.Chancepercentile75thGPA
    Chancepercentile100thGPA = collegeStats.Chancepercentile100thGPA
    SATlow = collegeStats.SATlow
    percentile0SAT = collegeStats.percentile0SAT
    percentile25thSAT = collegeStats.percentile25thSAT
    percentile75thSAT = collegeStats.percentile75thSAT
    percentile100thSAT = collegeStats.percentile100thSAT
    averageSAT = collegeStats.averageSAT
    Chancepercentile0SAT = collegeStats.Chancepercentile0SAT
    ChancepercentileSATlow = collegeStats.ChancepercentileSATlow
    Chancepercentile25thSAT = collegeStats.Chancepercentile25thSAT
    Chancepercentile75thSAT = collegeStats.Chancepercentile75thSAT
    Chancepercentile100thSAT = collegeStats.Chancepercentile100thSAT
    AboutCollege = collegeStats.AboutCollege
    collegeInfo.innerText = AboutCollege
    CollegeStudies = collegeStats.CollegeStudies
    collegeMajors.innerText = CollegeStudies
    collegeLink = collegeStats.collegeLink
    collegeWebsite.innerText = collegeLink
    majorsList = collegeStats.majorsList
    collegeMajorsList.innerText = majorsList
    collegePicture = collegeStats.collegePicture
    displayPicture.style.backgroundImage=`url(${collegePicture})`
    pictureContext = collegeStats.pictureContext
    pictureInfo.innerText = pictureContext
    pictureLink = collegeStats.pictureLink
    pictureWebsite.innerText = pictureLink

    updateSATvalue()
    calculateData()
}

function openWebsite()
{
    // window.location = collegeLink
    window.open(collegeLink)
}

function openList()
{   
    // window.location = majorsList
    window.open(majorsList)
}

function openPicture()
{
    window.open(pictureLink)
}

function sendEmail()
{
    window.open('mailto:LDSrtgamers123@gmail.com?subject=subject&body=body');
}

var sideBar = document.getElementById("sidebar")

var collegeList = ["University of California, Irvine", "University of California, Los Angeles"]

function createListItem(collegeName)
{ 
    var listItem = document.createElement("li")
    listItem.className = "mb-1"
    listItem.innerText = collegeName
    listItem.addEventListener("click", () => selectCollege(listItem))
    // listItem.onclick(console.log("hi")) 
    sideBar.append(listItem)
    return listItem
}

collegeList = collegeList.map(createListItem)
console.dir(sideBar)
console.log(collegeList)

selectCollege(sideBar.children[2])

console.log(searchBar)
searchBar.addEventListener("input", function() {
    
    collegeList.forEach((college) => {
        var nothing = `[\\s\\S]*(${searchBar.value})[\\s\\S]*`
        var checkCollegeName = new RegExp(nothing, "gi")
        console.log(nothing)
        console.log(college.innerText)
        if (checkCollegeName.test(college.innerText) != true)
        {
            console.log("NotMatching")
            college.classList.add("hideElement")
            console.log(college.className)
        }
        else
        {
            college.classList.remove("hideElement")
            console.log("Matching")
        }
        console.log(college)
        console.log(checkCollegeName.test(college.innerText))

    })
    collegeList.forEach(selectShown)

})

function selectShown(college) //selects the first shown college after filtering
{
    if (college.classList.contains("hideElement")) return  //Exit function after condition is met

    selectCollege(college)
}

//classlist add 

//if true  remove hide class 
//if false add  hide class