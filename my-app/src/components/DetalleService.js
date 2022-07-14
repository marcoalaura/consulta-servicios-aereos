import React from 'react'


export const DetalleService = ({nombreServicio, registros, fechaRegistros}) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>{nombreServicio}</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <label htmlFor="exampleInputEmail1">Número de registros obtenidos: </label>
                            </div>
                            <div className="form-group col-md-4">
                                {registros}
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <label htmlFor="exampleInputPassword1">Fecha del último registro obtenido: </label>
                            </div>
                            <div className="form-group col-md-4">
                                {fechaRegistros}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
