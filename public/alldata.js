function AllData(){
  const [users, setUsers] = React.useState([]);
  const [data, setData] = React.useState('');
  const [emails, setEmails] = React.useState([]);
  const [balances, setBalances] = React.useState([]); 
  const [passwords, setPasswords] = React.useState([]);
  const [accounts, setAccounts] = React.useState([]);   

  React.useEffect(() => {
      
      // fetch all accounts from API
      fetch('/account/all')
          .then(response => response.json())
          .then(data => {
              //console.log(data);
              //console.log(typeof data);
              setData(JSON.stringify(data));
              const len = data.length;
              const users = [];
              const emails = [];
              const balances = [];
              const passwords = [];
              const accounts = [];

              for (var i=0; i<len; i++) {
                accounts.push(data[i].account);
              };

              for (var i=0; i<len; i++) {
                users.push(data[i].name);
              };
              for (var i=0; i<len; i++) {
                emails.push(data[i].email);
              };
              for (var i=0; i<len; i++) {
                balances.push(data[i].balance); 
              };

              for (var i=0; i<len; i++) {
                  passwords.push(data[i].password);
                };
              setUsers(users);
              setEmails(emails);
              setBalances(balances);
              setPasswords(passwords);
              setAccounts(accounts);
              }
            
              //console.log(users);
              //console.log(emails);
              //console.log(balances);
              //console.log(passwords);
          )
              
              
              } );
              
  
              
                

          return (
            <>
            <NavBar />
            <div className="card-group">
            <div className="card">
              <div className="card-header bg-info text-center text-white">
                Account Number
              </div>
              {accounts.map((account, index) => { return ( <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center" key = {index}>{account}</li>
              </ul> </>)})} 
            </div> 
            <div className="card">
              <div className="card-header bg-info text-center text-white">
                User's Name
              </div>
              {users.map((name, index) => { return ( <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center" key = {index}>{name}</li>
              </ul> </>)})} 
            </div> 
            <div className="card">
                <div className="card-header bg-info text-center text-white">
                  Email
                </div>
                {emails.map((email, index) => { return ( <>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center" key={index}>{email}</li> 
                </ul> </>)})}
              </div>
              <div className="card">
                <div className="card-header bg-info text-center text-white">
                  Password
                </div>
                {passwords.map((password, index) => { return ( <>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center" key={index}>{password}</li> 
                </ul> </>)})}
              </div>
              <div className="card">
                <div className="card-header bg-info text-center text-white">
                  Balance
                </div>
                {balances.map((balance, index) => { return ( <>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center" key={index}>{balance}</li>
                </ul> </>)})}
              </div>
              
               
            </div> 
            </>
        );                       
    
  
} 

