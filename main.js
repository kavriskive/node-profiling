var _ = require('lodash');
var bunyan = require('bunyan');
// var fs = require('fs');
// var profiler = require('v8-profiler');
var util = require('util');


var log = bunyan.createLogger({name: 'node-profiling'});

var list = [];
var i;

// Profile list creation
// profiler.startProfiling('1', true);
for (i = 0; i < 100000; i++) {
	list = list.concat(i);
}
// var profile1 = profiler.stopProfiling();

// Profile list shuffle
// profiler.startProfiling('2', true);
list = _.shuffle(list);
// var profile2 = profiler.stopProfiling();

var target = 1;

var match = _.find(list, function(e) {
	return (e === target);
});

log.info(util.format('Found target: %s', match));

// log.debug(profile1.getHeader(), profile2.getHeader());

// profile1.export(function(error, result) {
// 	fs.writeFileSync('profile1.cpuprofile', result);
// 	profile1.delete();
// });

// profile2.export(function(error, result) {
// 	fs.writeFileSync('profile2.cpuprofile', result);
// 	profile2.delete();
// });

// profile2.export()
// 	.pipe(fs.createWriteStream('profile2.json'))
// 	.on('finish', function() {
// 		profile2.delete();
//   	});