// Description:
//   <description of the scripts functionality>
//   this is my clever bot
'use strict';

module.exports =  (robot) =>  {

  robot.messageRoom('general', 'Hello :earth_africa:')

  robot.hear(/hello bob/, (res) => {
    res.send(`bonjour ${res.message.user.name}`);
  });

  robot.router.get('/hey/bob', (req, res) => {
    robot.messageRoom('general', "💙");
    console.log("💙")
    res.send({message:"💙"});
  });

  robot.router.post('/hey/bob', (req, res) => {
    robot.messageRoom('general', req);
    console.log(req)
    //res.send({message:"💙"});
    res.status(200).end()
  })


};