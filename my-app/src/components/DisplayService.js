import React from 'react'

export const DisplayService = ({nombreServicio, colorFondo, totalRegistros, getServicios}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:colorFondo}} className="display-board">
            <h4 style={{color: 'white'}}>{nombreServicio}</h4>
            <div className="number">
            {totalRegistros}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getServicios()} className="btn btn-warning">Actualizar listado</button>
            </div>
        </div>
    )
}