const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getThoughtById({ params }, res) {

    },

    createThought({ params, body }, res) {

    },

    updateThought({ params, body }, res) {

    },

    deleteThought({ params }, res) {

    },

    addReaction({ params, body }, res) {

    },

    deleteReaction({ params }, res) {

    }


}

module.exports = thoughtController;