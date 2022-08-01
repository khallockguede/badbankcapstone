function Balance(){
  const ctx = React.useContext(UserContext);
  let balance = "$" + ctx.balance;
  let balanceName = `${ctx.name}'s balance is:`
  console.log(`This is the user: ${ctx.name}`);
  
  return (
    <>
    <NavBar />
    <center>
    <Card
      bgcolor="primary"
      txtcolor="white"
      header={balanceName}
      title= {balance}
      //text=
      //body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
    </center>
    

    </>
  )
}
