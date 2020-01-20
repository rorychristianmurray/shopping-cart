import React from "react"

export default props => {
    return (
        <div className="row">
            <div className="col-md-4">
                {props.count} products found
            </div>
            <div className="col-md-4">
                <label>
                    Order by
                    <select className="form-control" value={props.sort}
                    onChange={props.handleChangeSort}
                    >
                        <option value="">Select</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>

                    </select>
                </label>
    
            </div>
            <div className="col-md-4">
            
            </div>
        </div>
        
    )
}