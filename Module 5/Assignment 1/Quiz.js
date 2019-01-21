var data = {
    question: ['Are both Java and JS same?', 'Does CPU play a vital role in the computer?', 'Are both python and JS dynamic languages?', 'Can a web-page be developed without JS?', 'Are you happy?'],
    choices: [['True', 'False'], ['True', 'False'],['True', 'False'],['True', 'False'],['True', 'False']],
    hints: ['Dont go by their names', 'Consider it to be the brain.', 'No need for the declaration of data types', 'It provides functionality', 'Think'],
    correct: ['Precise', 'Yes, the CPU plays a vital role in computer logical and arithmatic operations', 'Yes, both the languages are dynamic.', 'Yes, it can be developed.', 'Yay!'],
    wrong:['Java is quite different from JS.', 'No, the CPU plays a vital role in computer logical and arithmatic operations', 'No, both the languages are dynamic.', 'No, it can be developed.', 'Cheer Up!'],
    answer: [0, 1, 1, 1, 1]
}

var a = 0;
var points = 0;
loader(a);

function loader(a) {
    var b = data.choices[a][0];
    var c = data.choices[a][1];
    document.getElementById("question").innerHTML = data.question[a];
    document.getElementById("cho1").innerHTML = '<label>' + '<input type="radio" name="optradio" onclick= validate(1)>' + '&nbsp; ' + b + '</label>';
    document.getElementById("cho2").innerHTML = '<label>' + '<input type="radio" name="optradio" onclick= validate(0)>' + '&nbsp; ' + c + '</label>';   
}

function hint() {
    document.getElementById("hint").innerHTML = '<div class="alert alert-primary alert-dismissable">' + '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="closehint()">'+'&times;'+
    '</a>' + data.hints[a] + '</div>';
}

function closehint() {
    document.getElementById("hint").innerHTML = '';
}

function closecorrect() {
    document.getElementById("correct").innerHTML = '';
}

function closewrong() {
    document.getElementById("wrong").innerHTML = '';
}

function correct() {
    document.getElementById("correct").innerHTML = '<div class="alert alert-success alert-dismissable">' + 
                    '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick = "closecorrect()">' + '&times;' + '</a>' + data.correct[a] + '</div>'
}

function wrong() {
    document.getElementById("wrong").innerHTML = '<div class="alert alert-danger alert-dismissable">' + 
                    '<a href="#" class="close" data-dismiss="alert" aria-label="close" onclick="closewrong()">' + '&times;' + '</a>' + data.wrong[a] + '</div>'
}

function validate(ans) {
    if (ans === data.answer[a]) {
        correct();
        points++;
    } else {
        wrong();
    }
}

function next() {
    var len = data.question.length;
    if (a < len - 1) {
        a = a+1;
        closecorrect();
        closehint();
        closewrong();
        loader(a);
    } else {
        result();
    }
}
function result() {
    document.getElementById("result").innerHTML = 'Your score is ' + points + '/5';
    document.getElementById("result1").innerHTML = "";
}

function reset() {
    location.reload();
}