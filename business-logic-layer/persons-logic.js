require("../data-access-layer/dal");
const PersonModel = require('../models/person-model')
const LikesModel = require('../models/likes-model')


const compareTwoString = (str1, str2) => {
    const string1 = str1.toString()
    const string2 = str2.toString()

    if (string1 === string2)
        return true
    return false
}


const getAllPersonsForUserAsync = async () => {
    try {
        const persons = await PersonModel.find({ approved: true }).select("-email -phone -who_delivered").exec()
        const allLikes = await LikesModel.find({}).exec()
        const fixedPersons = []

        for (let i = 0; i < persons.length; i++) {

            const obj = {
                ...persons[i]._doc,
                likes: [
                    {
                        like_id: 'sdfsdfrtyrty53dgdfg',
                        name: "happy",
                        count: allLikes.filter(l => compareTwoString(persons[i]._id, l.person_id) && compareTwoString(l.like_name, "happy")).length,
                        icon: '😀'
                    },
                    {
                        like_id: 'sdfsdfrtyrty53dgdnv',
                        name: "fine",
                        count: allLikes.filter(l => compareTwoString(persons[i]._id, l.person_id) && compareTwoString(l.like_name, "fine")).length,
                        icon: '😐'
                    },
                    {
                        like_id: 'sdfsdfrtyrty53dgdnb',
                        name: "angry",
                        count: allLikes.filter(l => compareTwoString(persons[i]._id, l.person_id) && compareTwoString(l.like_name, "angry")).length,
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