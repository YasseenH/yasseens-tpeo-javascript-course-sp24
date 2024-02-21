//Yasseen Hilal

function sumOfSquareAreas (a, b) {
    return a * a + b * b;
}

function gradeCalculator (homeworkAvg, quizAvg, examAvg) {
    return homeworkAvg * 0.1 + quizAvg * 0.15 + examAvg * 0.75;
}

console.log(sumOfSquareAreas(9, 3));
console.log(gradeCalculator(90, 100, 50));
console.log(gradeCalculator(30, 100, 100));
console.log(gradeCalculator(80, 90, 85));