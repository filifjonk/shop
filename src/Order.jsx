function Order(){
    return(
        <>
            <div className="card-right">
                <div className="d-flex justify-between">
                    <h5>ИТОГО</h5>
                    <h5>1000</h5>
                </div>
                <div className="flex-column">
                    <button className="toOrder">Перейти к оформлению</button>
                </div>
            </div>
        </>
    )
}
export {Order}