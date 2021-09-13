/*
HomeWork 1
 for (var i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, i);
}
qani vor var i_n uni fucntion scope,loopy amboxj tiruytyum nuyn popoxakanne,verjnakan iteraciayi ardyunqumel bolori mej hete poxancvum 5 arjeqy
nuyn kodi hatvacy letov ashxatume aveli chish,qani vor lety uni block scope 
ogtagorcelov miayn var tipi popoxakanner lucumy karoxenq stanal sahmanapakelov ayl functioni scope_um

HomeWork 2
event queic event loop yst hertakanutyamb kavelacven ev kiteracven
1. (A)_n avelanalov poll field,
2. (D)_ic (H)_y kavelacven Timersin
3.server startic heto (K)_n kavelacvi timersin
myus iteraciayin avartvac timernery ktpen irenc arjeqy ev kjnjven loopic
A_i avartic heto B_n ktexadrvi nextTickQue ev ktpvi miangamic,aynhuetev C_n check field u ktvi Baic heto
K timeri avartic heto M_y ktexadrvi  pending callback u aytexic kkatarvi
Servery start lineluc heto ete get Request uxarkenq nran I_n kkatarvi vorpes pending callback,avelacnelov J_in timeotnerin
isk ay iteraciai jamanak erb avartvac klini,respsone kuxarkvi 
*/
const express = require("express");
const fs = require("fs");
let reqData;
const app = express();

fs.readFile("info.txt", 'utf8', (err, data) => {                          //A
    process.nextTick(() => console.log("nexTick process"));               //B
    setImmediate(() => console.log("Immediate Timeout"));                 //C
    if (err) {
        return console.log(err);
    }
    reqData = data;
});

for (var i = 0; i < 5; i++) {
    function a() {
        var j = i; setTimeout(() => { console.log(j) }, j * 1000);    //D,E,F,G,H
    }
    a();
}

app.get("", (req, res) => {                                                //I
    console.log("Get Request from Server,Sending Respond from 3 seconds");
    setTimeout(() => {                                                     //J
        res.send(reqData);
        console.log("Send")
    }, 3000);
})

let serverStartSchedule = function () {
    console.log("starting server for 5 seconds");
    setTimeout(() => {                                                     //K
        app.listen(8080, () => {                                           //M
            console.log("server start!");
        })
    }, 5000)
}
serverStartSchedule();

