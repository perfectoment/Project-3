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
    }).then(function() {
        if(req.body.role === "student"){
        res.redirect(307, "/api/student")}
        else(res.redirect(307, "/api/teacher"))
        })
        .catch(function(err) {
        res.status(401).json(err);
        });
    });
app.post("/api/user/quiz", function(req, res){
    db.Quiz.create({
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description
        
    }).then(function(results){
        console.log(results)
        res.json(results)
    })
}); 
app.post("/api/quiz/question", function(req, res){
    db.Question.create({
        questiontitle: req.body.title,
        questionstext: req.body.questiontext,
        quizId: req.body.id

    }).then(function(results){
        res.json(results)
    });
});

app.post("api/question/answer", function(req,res){
    db.Answer.create({
        answertext: req.body.answertext,
        correct: req.body.correct,
        questionId: req.params.id
    }).then(function(results){
        res.json(results)
    });
}); 

app.get("/api/user/:id/quiz", function(req, res){
    db.Quiz.findAll({where: {userid:req.params.id},
    }).then(function(results){
        res.json(results)
    })
})

app.get("/api/quiz/:subject", function(req, res){
    db.Quiz.findAll({where:{subject:req.body.subject}, 
    }).then(function(results){
        res.json(results)
    });

});

app.get("/api/quiz/:id/", function(req,res){
    db.Quiz.findOne({
        where:{
            id: req.params.id
        },
        include: [{

            model: db.Question,
            attributes:["id", "questiontitle", "questiontext"]
        },
        {
            model: db.Answer,
            attributes:["id", "answertext", "correct"]
        }
        ]


    }).then(function(results){
        res.json(results)
    });   
});


app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    });


}