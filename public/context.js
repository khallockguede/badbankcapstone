const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  function Initnav() {
    return (
      <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand active" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Homepage"><img src="./bank.png" width="25" height="25" className="d-inline-block align-top"/>
      Bad Bank</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Click here to create an account">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Click here to login">Login</a>
        </li>
        </ul>
      </div>
    </nav>
    </>
    )

  }