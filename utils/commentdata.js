

const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize('commentssection', 'root', 'root', {
  host: 'localhost',
  dialect:  'mysql' 
 });
const commentsschema  = sequelize.define('Commentschema',
 {
  // Model attributes are defined here
  id: {
    type:DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },

  UserName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserId: {
    type: DataTypes.STRING,
     
  },
    // allowNull defaults to true
 
  postedAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
},

  {tableName : 'commentsschemas'}
);

 commentsschema.sync({ force: true }).then(() => {
    console.log(`Database & tables created! `);
  })


module.exports=commentsschema;
// `sequelize.define` also returns the model
 