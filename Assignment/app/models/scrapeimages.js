//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

//Defines the superhero schema
var Scrapeimages = new Schema({
    name: {type: String, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed,
    createdAt: {type: Date, default: Date.now},    
});

// Sets the createdAt parameter equal to the current time
Scrapeimages.pre('save', function(next){
    now = new Date();
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

//Exports the ScrapeimagesSchema for use elsewhere.
module.exports = mongoose.model('scrapeimages', ScrapeimagesSchema);