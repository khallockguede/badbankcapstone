function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser]         = React.useState('');
  const ctx = React.useContext(UserContext);
  const disable = (!email);
  //let successName = "Success";
  

  function validate(field, label){
    if (!email) {
      setStatus('Error: Enter Email');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
      setStatus('Error: Email Invalid');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
}

  function handleLogin(){
    if (!validate (email, 'email')) return;
    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        const data = JSON.parse(text);
         setStatus('');
         setShow(false);
         //setUser(`Success,  ${data.name}`);
          ctx.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
          ctx.balance = data.balance;
          ctx.email = data.email;
          ctx.account = data.account;
          setUser(`Success,  ${ctx.name}`);
          console.log('JSON:', data);
          console.log(`${ctx.name}`);
          console.log(`${ctx.balance}`);
          console.log(`${ctx.email}`);
          console.log(user);
           //new for Mongodb?
           //unshift to put in [0] to make array
    
   } 
    ); 
  }
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>
    <Initnav />
   <center>
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={disable} className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>{user}</h5>
              <a className="btn btn-light" href="#/balance/" role="button">Continue to Balance</a>
              </>
            )}
    />
    </center>
    </>
  )
}