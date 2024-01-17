const uniqid = require('uniqid')
const cubes = [
    {
        id : '68954vhyvj7rd',
        name : 'Mirror Cube',
        description: "very cool mirror cube",
        imageUrl : 'https://logicbg.com/wp-content/uploads/2022/02/rubik-kub-Mirror-Cube-3h3-QiYi-Speed-Cube-zavartyan.jpg',
        difficultyLevel : 4
    }, 
    {
        id : '689k4vhyvk7fz',
        name : 'triangle Cube',
        description: "sweet cube",
        imageUrl : 'https://m.media-amazon.com/images/I/51r6IcIjoEL._AC_UF894,1000_QL80_.jpg',
        difficultyLevel : 3
    }
]

exports.getAll = () => cubes.slice()

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId)

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(),
        ...cubeData
     }
 cubes.push(newCube)

 return newCube 


}