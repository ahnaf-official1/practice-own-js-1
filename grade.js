function gradeAverage(grade){
    if((grade > 79) && (grade <= 100)){
        return 'You have got A+'
    }
    else if((grade > 69) && (grade <= 100)){
        return 'You have got A'
    }
    else if((grade > 59) && (grade <= 100)){
        return 'You have got A'
    }
    else if((grade > 49) && (grade <= 100)){
        return 'You have got B'
    }
    else if((grade > 39) && (grade <= 100)){
        return 'You have got C'
    }
    else if((grade > 33) && (grade <= 100)){
        return 'You have got D'
    }
    else if((grade < 33) && (grade >= 1)){
        return 'Failed'
    }
    else{
        return 'Absent'
    }
}

const marksGained = 100; //Enter your value
const result = gradeAverage(marksGained);
console.log(result);