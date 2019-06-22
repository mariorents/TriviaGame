$("#start").on("click", function() {
    start();
});
let correct = 0;
let incorrect = 0;
let timer = 10;
    
const questions = [{
    Q1: "Q1: What is the only continent without any bess?",
    op1: ["Africa", "USA", "Antartica"],
    ans1 :"Antartica", 
}];

function startTimer(){
    timer--;
    $("#timer").html("Time Remaining:" + timer);
    if (timer <= 0){
        $("#choices").hide();
        done();
    };
};

function start() {
    $("#start").hide();
    runTime = setInterval(startTimer, 1000);
    
    for (let i=0; i < questions.length; i++) {
            
        $("#options").append('<p>'+ questions[i].Q1 +'</p>');
            
            for (let j=0; j < questions[i].op1.length; j++) {
                        
                $("#options").append("<input type ='radio' name='question-'" + "'value='" + questions[i].op1[j] + "'>" + questions[i].op1[j]);
                
            } 
    };     
}

function done() {
    $.each($('input[name="question-0]":checked'), function(){
        if($(this).val() === questions[i].ans1) {
            correct++;
        } 
        else {
            incorrect++;
        };

    console.log(done());

};

    
