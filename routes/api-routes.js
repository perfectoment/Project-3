var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {

app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
    });
    
app.post("/api/signup", function(req, res) {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }).then(function(newUser){
        console.log(newUser)
        res.json(newUser)
    }).catch(function(err) {
            res.status(401).json(err);
    })
      
      
    // res.send(req.body)
})
    // .then(function() {
    //     console.log('WORKING')
    //     res.send(req.body)
    // }) 
    // .catch(function(err) {
    //     res.status(401).json(err);
    // })
 
app.post("/api/user/quiz", function(req, res){
    console.log("HITS A HIT")
    db.Quiz.create({
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description
        // UserId: req.user.id
        
    }).then(function(results){
        console.log("!!!!!!!!")
        res.json(results)
    })
}); 

app.post("/api/question/:id", function(req, res){
    db.Question.create({
        questiontitle: req.body.questiontitle,
        questiontext: req.body.questiontext,
        QuizId: req.params.id

    }).then(function(results){
        res.json(results)
        console.log(results)
    }).catch(err => {
        console.log(err)
        res.json({error: err})
    }) 
});

app.post("/api/answer/:id", function(req,res){
    const array =[]
    req.body.forEach(answer => {
        db.Answer.create({
           AnswerId: answer.id,
            answertext: answer.answertext,
            correct: answer.correct,
            QuestionId: req.params.id
        }).then(function(result){
            console.log(result,"crap")
            array.push(result)
        }).catch(err => {
            console.log(err)
        })

    }) 
    res.json(array)
}); 

app.get("/api/user/:id", function(req, res){
    db.Quiz.findAll({where: {UserId:req.params.id},
    }).then(function(results){
        res.json(results)
    })
})

app.get("/api/quiz/", function(req, res){
    db.Quiz.findAll()
    .then(function(results){
        res.json(results)
    }).catch(err =>{
        console.log(err)
    })

});

app.get("/api/quiz/:id", function(req,res){
    db.Quiz.findAll({
        where:{
            id: req.params.id
        },
        include: [{

            model: db.Question,
            attributes:["id", "questiontitle", "questiontext"],
            include:[{

                model: db.Answer,
                attributes:["id", "answertext", "correct"] 
            }]
        },
    
        ]


    }).then(function(results){
        res.json(results)
    }).catch(err =>{
        console.log(err)
    }) 
});


app.get("/logout", function(req, res) {
    req.logout();
    res.send("logout");
    
    });




app.delete("/api/quiz/:id", function(req, res){
    db.Quiz.delete({
        where:{
            id: req.params.id
        },
        include: [{

            model: db.Question,
            attributes:["id", "questiontitle", "questiontext"],
            include:[{

                model: db.Answer,
                attributes:["id", "answertext", "correct"] 
            }]
        },
    
        ]


    }).then(function(results){
        res.json(results)
    });   
})
};