const GPAslider = document.getElementById("GPA")
const SATslider = document.getElementById("SAT")
const GPAvalue = document.getElementById("GPAvalue")
const SATvalue = document.getElementById("SATvalue")
const chanceText = document.getElementById("chanceOutput")

var statsHolder = {
    UCI:{
        GPAinput:4.3,
        GPAlow:3.4,
        percentile0GPA:0,
        percentile25thGPA:3.96,
        percentile75thGPA:4.28,
        percentile100thGPA:5,
        averageGPA:4.15,
        ChanceaverageGPA:38,
        Chancepercentile0GPA:0,
        ChancepercentileGPAlow:2.46,
        Chancepercentile25thGPA:26.04,
        Chancepercentile75thGPA:41.32,
        Chancepercentile100thGPA:100,
        
        //SAT variables

        SATinput:200,
        SATlow:1100,
        percentile0SAT:0,
        percentile25thSAT:1180,
        percentile75thSAT:1440,
        percentile100thSAT:1600,
        averageSAT:1310,

        //ChanceaverageGPA is the same for both

        Chancepercentile0SAT:0,
        ChancepercentileSATlow:17.42,
        Chancepercentile25thSAT:23.56,
        Chancepercentile75thSAT:55.08,
        Chancepercentile100thSAT:100,
        
    },
    UCLA:{
        
    }

}


//GPA

var GPAdifference;
var GPAcalculatedChance;
var GPAcalculation;

//SAT

var SATdifference;
var SATcalculatedchance;
var SATcalculation;

//GPA CALCULATIONS
function calculateGPA()
{
    console.log(GPAinput)
if (GPAinput > percentile25thGPA && GPAinput < averageGPA)
{
    GPAdifference = Math.abs(GPAinput - percentile25thGPA)
    GPAcalculatedChance = (GPAdifference/Math.abs(averageGPA - percentile25thGPA)) * (ChanceaverageGPA - Chancepercentile25thGPA)
    GPAcalculation = Chancepercentile25thGPA + GPAcalculatedChance
    console.log(GPAcalculation)
}
if (GPAinput > averageGPA && GPAinput < percentile75thGPA)
{
    GPAdifference = Math.abs(GPAinput - averageGPA)
    GPAcalculatedChance = (GPAdifference/Math.abs(percentile75thGPA - averageGPA)) * (Chancepercentile75thGPA - ChanceaverageGPA)
    GPAcalculation = ChanceaverageGPA + GPAcalculatedChance
    console.log(GPAcalculation)
}

//If GPA has higher than 75th percentile

if (GPAinput >= percentile75thGPA)
{
    GPAdifference = Math.abs(GPAinput - percentile75thGPA)
    GPAcalculatedChance = (GPAdifference/Math.abs(percentile100thGPA - percentile75thGPA)) * (Chancepercentile100thGPA - Chancepercentile75thGPA)
    GPAcalculation = Chancepercentile75thGPA + GPAcalculatedChance
    console.log(GPAcalculation)
}

//If GPA goes lower than 25th percentile

if (GPAinput < percentile25thGPA && GPAinput > GPAlow)
{
    GPAdifference = Math.abs(GPAinput - GPAlow)
    GPAcalculatedChance = (GPAdifference/Math.abs(percentile25thGPA - GPAlow)) * (Chancepercentile25thGPA - ChancepercentileGPAlow)
    GPAcalculation = ChancepercentileGPAlow + GPAcalculatedChance
}
if (GPAinput < GPAlow)
{
    GPAdifference = Math.abs(GPAinput)
    GPAcalculatedChance = (GPAdifference/Math.abs(GPAlow - percentile0GPA)) * (ChancepercentileGPAlow - Chancepercentile0GPA)
    GPAcalculation = Math.abs((((Chancepercentile0GPA + GPAcalculatedChance) + (1.9457 * (GPAinput)^2 - (6.3865 * GPAinput) + 4.6125))/2) - 2)
}
}

function calculateSAT()
{
    console.log(SATinput)
if (SATinput > percentile25thSAT && SATinput < averageSAT)
{
    SATdifference = Math.abs(SATinput - percentile25thSAT)
    SATcalculatedchance = (SATdifference/Math.abs(averageSAT - percentile25thSAT)) * (ChanceaverageGPA - Chancepercentile25thSAT)
    SATcalculation = Chancepercentile25thSAT + SATcalculatedchance
}
if (SATinput > averageSAT && SATinput < percentile75thSAT)
{
    SATdifference = Math.abs(SATinput - averageSAT)
    SATcalculatedchance = (SATdifference/Math.abs(percentile75thSAT - averageSAT)) * (Chancepercentile75thSAT - ChanceaverageGPA)
    SATcalculation = ChanceaverageGPA + SATcalculatedchance
}

//If SAT is higher than 75th percentile

if (SATinput >= percentile75thSAT)
{
    SATdifference = Math.abs(SATinput - percentile75thSAT)
    SATcalculatedchance = (SATdifference/Math.abs(percentile100thSAT - percentile75thSAT)) * (Chancepercentile100thSAT - Chancepercentile75thSAT)
    SATcalculation = Chancepercentile75thSAT + SATcalculatedchance
    console.log(SATcalculation)
}

//If SAT is lower than 25th percentile

if (SATinput < percentile25thSAT && SATinput > SATlow)
{
    SATdifference = Math.abs(SATinput - percentile0SAT)
    SATcalculatedchance = (SATdifference/Math.abs(averageSAT - averageSAT)) * (Chancepercentile75thSAT - ChanceaverageGPA)
    SATcalculation = ChanceaverageGPA + SATcalculatedchance
    console.log(SATcalculation)
}
if(SATinput < SATlow)
{
    SATcalculation = 0
}
}

// 0.00009025 * (SATinput)^2 - 0.129045 * (SATinput) + 49.3865


//GPA and SAT weighting CALCULATIONS

function calculateData()
{
    console.log(GPAinput)
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
    console.log(SATcalculation)
    
    SATcalculation = SATcalculation * 0.35
    GPAcalculation = GPAcalculation * 0.65
    console.log(SATcalculation)
    console.log(GPAcalculation)
    var addData = GPAcalculation + SATcalculation
    if (addData > 50)
    {
        console.log(addData.toFixed(2))
    }
    else
    {
        console.log(addData.toFixed(2))
    }
    
    chanceText.innerText = addData.toFixed(2) + "%"
}

function updateSATvalue(e)
{
    SATinput = e.value * ((1600-SATlow)/100) + SATlow
    SATvalue.innerText = SATinput
}
function updateGPAvalue(e)
{
    GPAinput = e.value * .05
    GPAvalue.innerText = GPAinput.toFixed(2)
}
function updateSATmedian()
{
    SATvalue.innerText = (SATlow + 1600)/2
}

updateSATmedian()
//returning same persent because the SATinput range is set to less than SATlow so change calculations. 