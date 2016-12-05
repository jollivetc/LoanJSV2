var express = require('express');
var router = express.Router();

var loans = [
	{id:0, object:'Sabre Laser', loanedOn : "2016-11-08T23:02:39.544Z", person: {name : 'Luke Skywalker', picture:'lukeskywalker.jpg'}},
	{id:1, object:'Tournevis sonique', loanedOn:"2016-05-27T23:02:39.544Z", person: {name : 'Docteur Who', picture:'doctorWho.jpg'}},
	{id:2, object:'Goldorak', loanedOn:"2015-08-30T23:02:39.544Z", person: {name : 'Actarus', picture:'actarus.jpg'}}
];

router.get('/', function(req, res, next){
	res.json(loans);
});
router.post('/', function(req, res, next){
	var newLoan = req.body;
	newLoan.id = loans[loans.length-1].id + 1;
	loans.push(newLoan);
	res.status(201).json(newLoan);
});

router.param('loanId', function(req, res, next, loanId){
	req.loan = loans[findIndexForId(loanId)];
	return next();
});

router.get('/:loanId', function(req, res, next){
	if(req.loan === null || req.loan === undefined){
		res.status(404).json({message:'loan not  found'});
	}
	res.json(req.loan);
});

router.delete('/:loanId', function(req, res, next){
	if(req.loan === null || req.loan === undefined){
		res.status(404).json({messsage:'loan not found'});
		return;
	}
	var indexToRemove = findIndexForId(req.loan.id);
	loans.splice(indexToRemove, 1);
	res.status(200).json({message:"loan removed"})
});

function findIndexForId(loanId){
	var foundIndex;
	for(var index = 0; index<loans.length; index++){
		if(loans[index].id == loanId){
			foundIndex = index;
			break;
		}
	}
	return foundIndex;
}
module.exports = router;
