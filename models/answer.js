module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
      answertext: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      description:{
        type: DataTypes.TEXT,      
      },
     
    });
    Answer.associate = function(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    
    return Answer;
  };