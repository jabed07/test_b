
const translate = require('google-translate-api');
 

function getDatas(res) {
    const objectData={title:"Bhive test for Locale",
    text:"A short story is a piece of prose fiction that can be read in one sitting. Emerging from earlier oral storytelling traditions in the 17th century, the short story has grown to encompass a body of work so diverse as to defy easy characterization",
description:"Charlie Montgomery is writing a book. One day, she somehow gets sucked into her world, Nitra, and accident..."
};

    console.log(objectData);
    res.json(objectData) ;
};

function getLanguage(res) {
    
    var objectData={data:"Arabic Language"};
   res.json(translate(objectData.data, {from: 'en', to: 'ar'}).then(res => {
    res.text;
    
    console.log(res.text)
}).catch(err => {
    console.error(err);
}));
console.log(res.text)
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all html data  
    app.get('/api/datas/:value', function (req, res) {
        getDatas(res);
    });


app.get('/api/languages/:language_id', function (req, res) {

    
    //     console.log(req.language); // 'en-US'
    //    res.cookie('i18n', 'ar');
    //    res.cookie('cookies.language', 'ar');
    // console.log(res);
    
        getLanguage(res);
        
    });
   
    
};
