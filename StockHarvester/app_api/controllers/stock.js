const mongoose = require('mongoose');
const Input = mongoose.model('Input');

const name = (req, res) => {
    console.log(req.params.symbol);
    const symbol = req.params.symbol;
    Input.find(
        {
            name: req.params.symbol,
        },
        null,
        //callback
        (err, docs) => {

            let records = [];

            docs.forEach( (document) => {
                if (!isOlderThanADay(TimeLogonToDate(document.time_logon))){
                    records.push(document);
                }
            });
            //send records back
            if(!err){
                res.send(records);
            }else{
                res.send(err);
                console.log(err);
            }
        }
    );
}

const price = (req, res) => {

    console.log(req.params.symbol);
    const symbol = req.params.symbol;

    Input.find(
        {
            price: symbol,
        },
        null,
        //callback
        (err, docs) => {
            let records = [];

            docs.forEach( (document) => {
                records.push(document);
            });
            //send records back
            if(!err){
                res.send(records);
            }else{
                res.send(err);
                console.log(err);
            }
        }
    );
}

const inputinfo = (req, res) => {
    console.log(req.params.symbol);
    const symbol = req.params.symbol;

    Input.find(
        {
            symbol: symbol,
        },
        //callback
        (err, docs) => {
            //send records back
            if(!err){
                res.send(docs);
            }else{
                res.send(err);
                console.log(err);
            }
        }
    );    

}

module.exports = {
  name,
  price,
  inputinfo,
};