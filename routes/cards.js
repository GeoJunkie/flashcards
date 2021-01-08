const express = require('express');

const router = new express.Router();

const {data } = require ('../data/flashCardData.json');
const { cards } = data;

router.get('/', ( req, res) => {
    const id = Math.floor(Math.random() * cards.length);

    res.redirect(`/cards/${id}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } = cards[id];
    name = req.cookies.username;

    const templateData = { 
        text,
        side
    };

    const  renderCard = ( flipSide ) => {
        templateData.flip = flipSide;
        templateData.name = req.cookies.username;
        res.render('card', templateData );
    };

    if ( side === 'question' ) {
        templateData.hint = hint;
        renderCard( 'answer' );
    } else if ( side === 'answer' ) {
        renderCard( 'question' );
    } else {
        res.redirect('?side=question');
    }
});

module.exports = router;
