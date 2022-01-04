require("../data-access-layer/dal");
const PersonModel = require('../models/person-model')
const LikesModel = require('../models/likes-model')


const getAllPersonsForUserAsync = async () => {
    try {
        const persons = await PersonModel.find({ approved: true }).select("-email -phone -who_delivered").exec()
        const allLikes = await LikesModel.find({}).exec()
        const fixedPersons = []

        // console.log(allLikes.filter(l =>  l.like_name === "angry"))
        // console.log(persons[0])

        for (let i = 0; i < persons.length; i++) {
            const obj = {
                ...persons[i]._doc,
                likes: [
                    {
                        like_id: 'sdfsdfrtyrty53dgdfg',
                        name: "happy",
                        count: allLikes.filter(l => l.person_id === persons[i]._doc._id && l.like_name === "happy").length,
                        icon: '😀'
                    },
                    {
                        like_id: 'sdfsdfrtyrty53dgdnv',
                        name: "fine",
                        count: allLikes.filter(l => l.person_id === persons[i]._doc._id && l.like_name === "fine").length,
                        icon: '😐'
                    },
                    {
                        like_id: 'sdfsdfrtyrty53dgdnb',
                        name: "angry",
                        count: allLikes.filter(l => l.person_id === persons[i]._doc._id && l.like_name === "angry").length,
                        icon: '🤬'
                    }
                ]
            }
            fixedPersons.push(obj)
        }

        return fixedPersons
    }
    catch (err) {
        console.log(err);
        return err.message
    }
}



module.exports = {
    getAllPersonsForUserAsync
}