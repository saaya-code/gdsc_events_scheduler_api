const webHookers = {
    "TECH":"https://discord.com/api/webhooks/1167172830937489488/V3x72wAH_DJzgEmF5KSAluUmgEnvxL8Y7s-X6uXFUdY-uKooGHBn6DzI7hINABvu5OFF",
    "TM": "https://discord.com/api/webhooks/1167173163109601300/qWT0AQNoC1P7o354_Qn0yO097OE2edTrVm9Bhh_xSbHse0NLvG3iol59X0i5EABeFIE1",
    "MKT": "https://discord.com/api/webhooks/1167173320047874079/h9-aCxN4HUyZYGMu6qIdH3SRp1ydYvg5Ee_8iALQq9Pd-PxCRNp0XHg1cBfb366fvD4J",
    "EER": "https://discord.com/api/webhooks/1167173456987697244/_SWvmGfCbBk7scQbzOr2-5HgwyvpgxfevhwoHOA_BidfRm8Cto1HtDH8OU8Q7-8qiLhq"
}

module.exports = function({activity_type, date, details, concerned_committes}){
    const embed = {
        "content": "Hello guys this is a new announcement.",
        "embeds": [
          {
            "title": `A new ${activity_type} was added.`,
            "description": details,
            "color": 5814783,
            "footer": {
              "text": "made with ❤️by saaya2504",
              "icon_url": "https://cdn.discordapp.com/avatars/398147766687236107/37aff03cdd4d18240e9c1696b405683f.png?size=1024"
            }
          }
        ],
        "attachments": []
      }
      for(com of concerned_committes){
        console.log(com)
        fetch(webHookers[com],{
            method:"POST",
            body:JSON.stringify(embed),
            headers:{
                "Content-Type":"Application/json"
            }
        }).then((res)=>{
            console.log("done");
        })
      }
}