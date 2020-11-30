module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
      questiontext: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      questiontitle: {
        type: DataTypes.STRING,
      
      },
     
    });
    Question.associate = function(models) {
      Question.belongsTo(models.Quiz, {
        foreignKey: {
          allowNull: false
        }
      });
      Question.hasMany(models.Answer, {
        onDelete: "cascade"
      });
    };
  
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    
    return Question;
  };