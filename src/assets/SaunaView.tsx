import ToolButton from "./toolButton"


const cardStyle = {
    height: '35rem',
    width: '25rem',
    center: 'text-center'
}

/* this is the card view of which sauna will be selected.  It will display a large image of the sauna, it's name and descriptive text.  The toolbutton will take info from input text and update the sauna info */
export default function SaunaView({sauna}: { sauna: {image: string, name: string, text: string }}){
    return(
        <div className="container d-flex flex-grow-1 flex-column justify-content-center">
        <div className="card justify-content-center shadow-sm " style={ cardStyle }>
  <img src= { sauna.image } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ sauna.name }</h5>
    <p className="card-text">{ sauna.text }</p>
    <input className="me-2" type="text"></input>
    <ToolButton/>
  </div>
  <br></br>
</div>
</div>
    )
}