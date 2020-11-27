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
        res.redirect(307, "/student")}
        else(res.redirect(307, "/teacher"))
        })
        .catch(function(err) {
        res.status(401).json(err);
        });
    });
app.post("/api/user/quiz", function(req, res){
    db.Quiz.create({
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        UserId: req.user.id
        
    }).then(function(results){
        console.log(results)
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
    });
});

app.post("/api/answer/:id", function(req,res){
    db.Answer.create({
        answertext: req.body.answertext,
        correct: req.body.correct,
        QuestionId: req.params.id
    }).then(function(results){
        res.json(results)
    });
}); 

app.get("/api/user/:id", function(req, res){
    db.Quiz.findAll({where: {UserId:req.params.id},
    }).then(function(results){
        res.json(results)
    })
})

// app.get("/api/quiz/:subject", function(req, res){
//     db.Quiz.findAll({where:{subject:req.body.subject}, 
//     }).then(function(results){
//         res.json(results)
//     });

// });

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
    });   
});


app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    });


}