var body = document.body;
 
function dateandtime(tz){
    var ptag = document.getElementById("test");
    
    var date;
    var dateandtimes
    if(tz == "en_IN")
 {  
       date = new Date();
       dateandtimes = date.toLocaleString("en-IN",{timeZone:"Indian/Mahe"});
       ptag.innerHTML = dateandtimes;
    }else if(tz == "en-US"){
        
        date = new Date();
        dateandtimes = date.toLocaleString("en-US",{timeZone:"America/Los_Angeles"});
        ptag.innerHTML = dateandtimes;
    }else{
       
        date = new Date();
        dateandtimes = date.toLocaleString("en-CA",{timeZone:"Canada/Eastern"});
        ptag.innerHTML = dateandtimes;
    }
    }
 


