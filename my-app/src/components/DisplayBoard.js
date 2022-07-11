import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'#9C528B'}} className="display-board">
            <h4 style={{color: 'white'}}>Usuarios creados</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Actualizar listado</button>
            </div>
        </div>
    )
}