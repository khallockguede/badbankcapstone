function Withdraw(){
  const ctx = React.useContext(UserContext); //first?
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.balance);
  let displayBalance = ctx.name + "'s" + " balance is: " + "$" + ctx.balance;
  const disable = (!withdraw);

  function validate(field, label){
    if (isNaN(withdraw)) {
      setStatus('Error: Enter a valid numerical value');
      setTimeout(() => setStatus(''),3000);
      return false;
    };
    if (Number(withdraw) < 0) {
      setStatus('Error: Enter a valid withdrawl amount');
      setTimeout(() => setStatus(''),3000);
      return false;
    };
   
    if (Number(withdraw) > balance) {
      setStatus('Transaction Declined: Insufficient Funds');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }

  return true;
}

function handleWithdraw(){
  //console.log(deposit);
  if (!validate(Number(withdraw),  balance))  return;
  let lessTotal = balance - Number(withdraw);
  setBalance(lessTotal);
  ctx.balance = lessTotal;
  console.log(`This is your balance: ${lessTotal}`);
  console.log(ctx.balance);
  //add to mongodb
  fetch(`/account/add/${ctx.email}/-${withdraw}`)
      .then(response => response.text())
      .then(text => {
        const data = JSON.parse(text);
        data.balance = lessTotal;
      })
  setShow(false);
}    
function clearForm(){
  setWithdraw('');
  setShow(true);
}
    return (
      <>
      <NavBar />
      <center>
      <Card
      bgcolor="warning"
      header={displayBalance}
      status={status}
      body={show ? (  
              <>
              Withdrawl Amount<br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
              <input type="input" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
              </div>
              <button type="submit" disabled={disable} className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw More</button>
              </>
            )}
    />
      </center>
      </>
    );
  }
  