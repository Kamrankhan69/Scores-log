const Score = require('./score.model')
const getScores = (gameId) => {
    return [{
        gameId: 'game123',
        userId: 'user123',
        score: 100
    },
    {
        gameId: 'game123',
        userId: 'user456',
        score: 89
    }]
}

const addScore = async ({gameId, userId, score}) => {
    const newScore = new Score({
        gameId, 
        userId,
        score
    });
    return await newScore.save();
}

const updateScore = ({gameId, userId, score}) => {
    return {
        gameId,
        userId,
        score
    }
}


const DeleteScore = ({gameId, userId}) => {
    return {
        gameId,
        userId
    }
}

module.exports = {
    getScores, addScore, updateScore, DeleteScore
}