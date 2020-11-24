module.exports = function(sequelize, DataTypes) {
  var StudentQuiz = sequelize.define("StudentQuiz", {
  
  });
  StudentQuiz.associate = function(models) {
      StudentQuiz.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
        
      });
    
  }
return StudentQuiz
}