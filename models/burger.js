module.exports = function(sequelize,DataTypes){
    var burger = sequelize.define('burger',{
        name:{
            type: DataTypes.STRING
        },
        eaten:{
            type: DataTypes.STRING
        }
    })
    burger.sync()
    return burger
}