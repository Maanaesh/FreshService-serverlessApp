const axios = require('axios')

exports = {

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
  onTicketCreateHandler: function(args) {
    Tktdata=
      {
        "description": args['data']['ticket']['description'],
        "subject": args['data']['ticket']['subject'],
        "email": args['data']['requester']['email'],
        "priority": args['data']['ticket']['priority'],
        "status": args['data']['ticket']['status'],
        "cc_emails": args['data']['ticket']['reply_cc_emails']
    }
    
    //console.log('Hello ' + args['data']['requester']['name']);
    console.log(Tktdata);
    axios.post('https://effy-opinyin.freshdesk.com/api/v2/tickets',Tktdata,{
      headers: {
        'Content-Type': 'application/json'
    },
    auth: {
        username: 'GNqXIlHkv2vmPWhxg6zE',
        password: 'X'
    },
    })
    .then((res)=>{
      console.log(res);
    });
  }


};
