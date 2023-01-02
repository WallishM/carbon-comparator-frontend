export class TransportData {
    start = new Address();
    end = new Address();
    date = new Date()
    waypoint = new Array();
    duration = 0;
    distance = 0;
    price = 0;
    carbon = 0;
    toll = false;

    constructor(start=new Address(), end=new Address(), date=new Date(), waypoint=new Array(), duration=0, distance=0, price=0, carbon=0, toll=false){
        this.start = start;
        this.end = end;
        this.date = date;
        this.waypoint = waypoint;
        this.duration = duration;
        this.distance = distance;
        this.price = price;
        this.carbon = carbon;
        this.toll = toll;
    };
};

export class Address{
    address:string = "";
    zipCode:string = "";
    city:string="";
    country:string="";
    lat:number=0;
    long:number=0;

    constructor(address="", zipCode="", city="", country="", lat=0, long=0){
        this.address = address;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
        this.lat = lat;
        this.long = long;
    };
};
