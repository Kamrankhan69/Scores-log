const express = require('express');
const { getScores, addScore, updateScore, DeleteScore } = require('./score.service');
const { scoreDTOValidator, addScoreDTO, updateScoreDTO, deleteScoreDTO } = require('../../validators/scores.validators');
const router = express.Router();

router.get('/:gameId', (req, res, next) => {
  const {gameId} = req.params;
  const score = getScores(gameId);
  res.json({
    data: score 
  });
});

router.post('/', scoreDTOValidator(addScoreDTO), async (req, res, next) =>{
    const {gameId, userId, score} = req.body;
    const savedScore = await addScore({gameId, userId, score}); 
    res.json({
        data: savedScore
    });
}); 

router.put('/:gameId',scoreDTOValidator(updateScoreDTO), (req, res, next) =>{
    const {gameId} = req.params;
    const {userId, score} = req.body;
    const updatedScore = updateScore({gameId, userId, score}); 
    res.json({
        data: updatedScore
    });
})

router.delete('/:gameId',scoreDTOValidator(deleteScoreDTO), (req, res, next) =>{
    const {gameId} = req.params;
    const {userId} = req.body;
    const deletedScore = DeleteScore({gameId, userId}); 
    res.json({
        data: deletedScore
    });
})

module.exports = router;
