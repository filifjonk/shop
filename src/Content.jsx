function Content(props){
    return(
        <>
        <div className="card-left flex-wrap m-w">
            <div className="d-flex justify-between"> 
                <div className="d-flex">                
                    <div className="elem m-18">
                        <img height = {136} width = {146} src = {props.img} alt ="" />
                        <div className="d-flex justify-between">
                            <button className="yellow-btn">-</button>
                            <h4 className="m-0">1</h4>
                            <button className="yellow-btn">+</button>
                        </div>
                    </div>
                    <div className="info">
                        <h2>{props.title}</h2>
                        <h3 className="basket-price">{props.price} ₽</h3>
                    </div>
                </div> 
                <div className="right-info-basket align-end m-17">
                    <img className= "chan" height = {17} width = {19} src = "/img/chan.png" alt ="" />
                    <h4>{props.price} ₽</h4>
                </div>
             </div> 
        </div>
           
        
        </>

    );

}
export {Content}