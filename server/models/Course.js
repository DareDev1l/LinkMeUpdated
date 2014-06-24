var mongoose = require('mongoose');

var coursesSchema = mongoose.Schema({
    title: String,
    featured: Boolean,
    published: Date,
    text: String
});

var Course = mongoose.model('Course', coursesSchema);

module.exports.seedInitialCourses = function(){
    Course.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find courses: ' + err);
            return;
        }

        if (collection.length == 0) {
            console.log('deleted');
            Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/05/2013'), text: 'You better not read that book'});
            Course.create({title: 'Super Duper Expert', featured: true, published: new Date('09/05/2013'), text: 'That would be me'});
            Course.create({title: 'Visual Basic', featured: false, published: new Date('15/07/2013'), text: 'C#'});
            Course.create({title: 'Some Sort of c++', featured: true, published: new Date('11/01/2014'), text: 'This is really fuc*ed up sort of c++'});
            Course.create({title: 'Javascript for mature people', featured: true, published: new Date('12/04/2013'), text: 'Learn in Telerik Academy'});
            Course.create({title: 'How to survive with Ivaylo Kenov', featured: true, published: new Date('22/04/2012'), text: 'There is no way to survive around him'});
            Course.create({title: 'Go out today for health', featured: false, published: new Date('13/07/2013'), text: 'Go for a run , you would like it :)'});
            Course.create({title: 'Some other stuff', featured: true, published: new Date('10/05/2013'), text: 'Just some bullsh*t here'});
            Course.create({title: 'How to deal drugs n stuff', featured: true, published: new Date('10/01/2013'), text: 'Call me at 0899123456 for a private chat on how to deal drugs (No cops allowed)'});
            Course.create({title: 'How not to tell jokes', featured: true, published: new Date('17/05/2013'), text: 'Fastest joke in the earth! Should I start next one already?'});
            Course.create({title: 'C# for Nacists', featured: false, published: new Date('12/03/2013'), text: 'Nacists do not have anything to do with this'});
            Course.create({title: 'I am not racist', featured: true, published: new Date('10/03/2014'), text: 'Racism is like niggers - it should not exist'});
            Course.create({title: 'C# for Sociopaths2', featured: true, published: new Date('03/05/2012'), text: 'You better not read that book too'});
        }
    });
}