var express = require('express');
var router = express.Router();

var persons = [
            {
                name: 'Luke Skywalker',
                picture: 'lukeskywalker.jpg'
            },
            {
                name: 'Doctor Who',
                picture: 'doctorWho.jpg'
            },
            {
                name: 'Actarus',
                picture: 'actarus.jpg'
            },
            {
                name: 'Capitaine Kirk',
                picture: 'kirk.jpeg'
            }
      ];

router.get('/', function(req, res, next){
	res.json(persons);
})
module.exports = router;
