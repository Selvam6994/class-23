import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
function Card({item}){
    return (
        <div 
        className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{item.pack}</h5>
            <h6 className="card-price text-center">${item.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                item.features.map((title)=>{
                  return (<li className={title.isEnable ? ``:`text-muted`}>
                    <span className="fa-li">
                       {
                        title.isEnable ?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>
                      }
                      </span>
                    {title.isBold? <strong>{title.list}</strong>:title.list}
                    </li>)
                })
              }
              
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card;