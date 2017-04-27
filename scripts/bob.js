// Description:
//   <description of the scripts functionality>
//   this is my clever bot
'use strict';

module.exports =  (robot) =>  {

  robot.hear(/hello bob/, (res) => {
    res.send(`bonjour ${res.message.user.name}`);
  });

  robot.router.get('/hey/bob', (req, res) => {
    console.log(req.body)
    res.send({message:"💙"});
  });
};