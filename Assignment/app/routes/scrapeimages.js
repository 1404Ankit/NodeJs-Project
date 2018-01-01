//Dependencies
var mongoose        = require('mongoose');
var Scrapeimages       = require('../models/scrapeimages');
//App routes
module.exports = function() {
	return {
		/*
		 * Get route to retrieve all the scrapeimages.
		 */
		getAll : function(req, res){
			//Query the DB and if no errors, send all the scrapeimages
			var query = Scrapeimages.find({});
			query.exec(function(err, scrapeimages){
				if(err) res.send(err);
				//If no errors, send them back to the client
				res.json(scrapeimages);
			});
		},
		/*
		 * Post route to save a new scrapeimages into the DB.
		 */
		post: function(req, res){
			//Creates a new scrapeimages
			var newScrapeimages = new Scrapeimages(req.body);
			//Save it into the DB.
			newScrapeimages.save(function(err){
				if(err) res.send(err);
				//If no errors, send it back to the client
				res.json(req.body);
			});
		},
		/*
		 * Get a single scrapeimages based on id.
		 */
		getOne: function(req, res){
			Scrapeimages.findById(req.params.id, function(err, scrapeimages){
				if(err) res.send(err);
				//If no errors, send it back to the client
				res.json(scrapeimages);
			});		
		}
	}
};  