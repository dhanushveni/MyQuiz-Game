class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No..")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Qustion:-What starts and ends with letter'E',but has only one letter?")
    this.question.position(150,50);

    this.option1.html("1:Everyone");
    this.option1.html(150,60);
    this.option2.html("2:Envelope");
    this.option2.html(150,70);
    this.option3.html("3:Estimate");
    this.option3.html(150,80);
    this.option4.html("4:Example");
    this.option4.html(150,90);


    this.input1.position(150, 230);
    this.button.html("Submit");
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message("Thank You, Your Answer Has Been Submitted")
    })


  }
}
