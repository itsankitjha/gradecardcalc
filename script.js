var grade = 'F', marks = 0, percentage = 0, MAX = 400, result;
var inputOb;
var final = true;

var mark = document.getElementsByClassName('mark')



function getTotalMark() {
    for (var i = 0; i < mark.length; i++) {

        if (mark[i].value < 50) {
            final = false;
        }
        marks += parseInt(mark[i].value);
    }

}

function getPercent() {
    percentage = ((marks / MAX) * 100).toPrecision(4);
}

function getGrade() {
    switch (true) {
        case (percentage <= 100 && percentage >= 90):
            grade = 'A';
            break;
        case (percentage < 90 && percentage >= 80):
            grade = 'B';
            break;
        case (percentage < 80 && percentage >= 70):
            grade = 'C';
            break;
        case (percentage < 70 && percentage >= 60):
            grade = 'D';
            break;
        case (percentage < 60 && percentage >= 50):
            grade = 'D';
            break;

        default:
            grade = 'F'
            break;

    }
}

function finalResult() {

}
function display() {
    result = document.getElementById('result');
    result.style.display = "block";
    var tMarks = document.getElementById('marks');
    tMarks.innerHTML = marks;
    var percent = document.getElementById('percent');
    percent.innerHTML = `${percentage}%`;
    var gradeDom = document.getElementById('grade');
    gradeDom.innerHTML = grade;

    var FinalR = document.getElementById('final');
    console.log(FinalR);
    FinalR.innerHTML = (final === true) ? "PASS" : "FAIL";
}
function ShowResult() {
    marks = 0
    final = true;
    getTotalMark();

    for (var i = 0; i < mark.length; i++) {
        if (mark[i].value == "") {
            alert("Please Enter Marks")

            return;
        }
        if (mark[i].value < 0 || mark[i].value >= 100) {
            alert("Enter Marks between 0 to 100");
            marks = 0
            return;
        }
    }

    if (final == true) {
        getPercent();
        getGrade();

    }
    display();
    marks = 0
    final = true;
}
