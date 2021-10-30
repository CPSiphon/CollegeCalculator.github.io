var Survey = document.getElementById("survey")


function sendEmail()
{
    console.dir(Survey)
    var formData = new FormData(Survey)
    var surveyData = [...formData]
    console.log(surveyData)
    const subject = "College Admission Calculator Survey"
    var body = surveyData[0][0] + " " + surveyData[1][0] + " " + surveyData[2][1] + " " + surveyData[3][1]
    console.log(body)
    window.open(`mailto:LDSrtgamers123@gmail.com?subject=${subject}&body=${body}`);
}