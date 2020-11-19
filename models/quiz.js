module.exports = function(sequelize, DataTypes) {
    var Quiz = sequelize.define("Quiz", {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description:{
        type: DataTypes.TEXT,      
      },
     
    });
    Quiz.associate = function(models) {
      Quiz.hasMany(models.StudentQuiz, {
        onDelete: "cascade"
      });
      Quiz.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    
    return Quiz;
  };