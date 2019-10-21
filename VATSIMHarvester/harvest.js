var express = require('express');
var router = express.Router();

const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config()
var app = module.exports = {};
const MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('harvester', { title: 'Results' });
  });
  


class Client {

    /*
    callsign:cid:realname:clienttype:frequency:latitude:longitude:altitude:groundspeed:groundspeed:planned_tascruise:planned_depairport:planned_altitude:planned_destairport:server:protrevision:rating:transponder:facilitytype:visualrange:planned_revision:planned_flighttype:planned_deptime:planned_actdeptime:planned_hrsenroute:planned_minenroute:planned_hrsfuel:planned_minfuel:planned_altairport:planned_remarks:planned_route:planned_depairport_lat:planned_depairport_lon:planned_destairport_lat:planned_destairport_lon:atis_message:time_last_atis_received:time_logon:heading:QNH_iHg:QNH_Mb:
    */
    constructor( callsign, cid, realname, clienttype, frequency, latitude, longitude, altitude, groundspeed, planned_tascruise, planned_depairport, planned_altitude,
                 planned_destairport, server, protrevision, rating, transponder, facilitytype, visualrange, planned_revision, planned_flighttype, planned_deptime, planned_actdeptime,
                 planned_hrsenroute, planned_minenroute, planned_hrsfuel, planned_minfuel, planned_altairport, planned_remarks, planned_route, planned_depairport_lat, planned_depairport_lon,
                 planned_destairport_lat, planned_destairport_lon, atis_message, time_last_atis_received, time_logon, heading, QNH_iHg, QNH_Mb)
    {
        this.callsign = callsign;
        this.cid = cid;
        this.realname = realname;
        this.clienttype = clienttype;
        this.frequency = frequency;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.groundspeed = groundspeed;
        this.planned_tascruise = planned_tascruise;
        this.planned_depairport = planned_depairport;
        this.planned_altitude = planned_altitude;
        this.planned_destairport = planned_destairport;
        this.server = server;
        this.protrevision = protrevision;
        this.rating = rating;
        this.transponder = transponder;
        this.facilitytype = facilitytype;
        this.visualrange = visualrange;
        this.planned_revision = planned_revision;
        this.planned_flighttype = planned_flighttype;
        this.planned_deptime = planned_deptime;
        this.planned_actdeptime = planned_actdeptime;
        this.planned_hrsenroute = planned_hrsenroute;
        this.planned_minenroute = planned_minenroute;
        this.planned_hrsfuel = planned_hrsfuel;
        this.planned_minfuel = planned_minfuel;
        this.planned_altairport = planned_altairport;
        this.planned_remarks = planned_remarks;
        this.planned_route = planned_route;
        this.planned_depairport_lat = planned_depairport_lat;
        this.planned_depairport_lon = planned_depairport_lon;
        this.planned_destairport_lat = planned_destairport_lat;
        this.planned_destairport_lon = planned_depairport_lon;
        this.atis_message = atis_message;
        this.time_last_atis_received = time_last_atis_received;
        this.time_logon = time_logon;
        this.heading = heading;
        this.QNH_iHg = QNH_iHg;
        this.QNH_Mb = QNH_Mb;
    }

}

const writeClientToPersist = (client) => {
    const uri = process.env.MONGODB_ATLAS_URL;
    const newClient = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
}


const parseCLIENT = (client) => {
    // callsign:
    let callsign = parts[0];    
    
    // cid:
    let cid = parts[1];
    
    // realname:
    let realname = parts[2];
    
    // clienttype:
    let clienttype = parts[3];
    
    // frequency:
    let frequency = parts[4];

    // latitude:
    let latitude = parts[5];

    // longitude:
    let longitude = parts[6];

    // altitude:
    let altitude = parts[7];

    // groundspeed:
    let groundspeed = parts[8];

    // planned_aircraft:
    let planned_aircraft = parts[9];

    // planned_tascruise:
    let planned_tascruise = parts[10];

    // planned_depairport:
    let planned_depairport = parts[11];

    // planned_altitude:
    let planned_altitude = parts[12];

    // planned_destairport:
    // server:
    // protrevision:
    // rating:
    // transponder:
    // facilitytype:
    // visualrange:
    // planned_revision:
    // planned_flighttype:
    // planned_deptime:
    // planned_actdeptime:
    // planned_hrsenroute:
    // planned_minenroute:
    // planned_hrsfuel:
    // planned_minfuel:
    // planned_altairport:
    // planned_remarks:
    // planned_route:
    // planned_depairport_lat:
    // planned_depairport_lon:
    // planned_destairport_lat:
    // planned_destairport_lon:
    // atis_message:
    // time_last_atis_received:
    // time_logon:
    // heading:
    // QNH_iHg:
    // QNH_Mb:    
}

const parseVATSIM = (data) => {

    let start = false;

    lines = data.split("\n");

    lines.forEach(element => {

        parts = element.split(':');
        
        // callsign:
        let callsign = parts[0];

        if(callsign.startsWith("!SERVERS")){
            start = false;
        } 
        
        if(!callsign.startsWith(";") && !callsign.startsWith(" ") && start){
            console.log(`Callsign: ${callsign}`);
        } 

        if(callsign.startsWith("!CLIENTS")){
            start = true;
        }         
        
        // cid:
        // realname:
        // clienttype:
        // frequency:
        // latitude:
        // longitude:
        // altitude:
        // groundspeed:
        // planned_aircraft:
        // planned_tascruise:
        // planned_depairport:
        // planned_altitude:
        // planned_destairport:
        // server:
        // protrevision:
        // rating:
        // transponder:
        // facilitytype:
        // visualrange:
        // planned_revision:
        // planned_flighttype:
        // planned_deptime:
        // planned_actdeptime:
        // planned_hrsenroute:
        // planned_minenroute:
        // planned_hrsfuel:
        // planned_minfuel:
        // planned_altairport:
        // planned_remarks:
        // planned_route:
        // planned_depairport_lat:
        // planned_depairport_lon:
        // planned_destairport_lat:
        // planned_destairport_lon:
        // atis_message:
        // time_last_atis_received:
        // time_logon:
        // heading:
        // QNH_iHg:
        // QNH_Mb:

    });

    console.log("DUDE " + new Date().toTimeString());    

};

app.task = cron.schedule('*/2 * * * *', () => {

   axios.get('http://us.data.vatsim.net/vatsim-data.txt')
    .then( (response) => {
        parseVATSIM(response.data);
    })
    .catch( (error) => {
        console.log(error);
    });

});

