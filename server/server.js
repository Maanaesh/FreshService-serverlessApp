const axios = require('axios')

exports = {

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
  onTicketCreateHandler: async function(args) {
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
    //console.log(Tktdata);
    const api_key= args.iparams.auth;
    const url=args.iparams.url;
    // console.log(`${url}/api/v2/tickets`)
    await axios.post(`${url}/api/v2/tickets`,Tktdata,{
      headers: {
        
        'Content-Type': 'application/json'
    },
    auth: {
        username: api_key,
        password: 'X'
    },
    })
    .then((res)=>{
      console.log("ok",res.status);
    });
  }


};
