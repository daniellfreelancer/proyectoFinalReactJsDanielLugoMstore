import React from 'react' //Siempre importar el hook de useState
import { Button } from 'react-bootstrap'

function ItemCount({ max, setCantidad, cantidad, onAdd }) { 

    const handleAddItem = () => {
        max > cantidad
            ? setCantidad(cantidad + 1)            
            : alert('No hay más unidades disponibles')
    }
    
    const handleRemoveItem = () => {
        cantidad > 1
           ? setCantidad(cantidad - 1)
           : alert('No se puede disminuir más')
    }

    const handleAddConfig = {
        className: `btn-block ${cantidad === max ? 'btn-danger' : 'btn-primary'}`, 
        onClick: handleAddItem,
        disabled: cantidad === max
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <Button
                 onClick={handleRemoveItem}
                 className={ `btn-block ${cantidad === 0 ? 'btn-secondary' : 'btn-info'}` } 
                 disabled={cantidad === 0}
                 >
                     -
                </Button> 
                <h3>{cantidad}</h3>       
                <Button  {...handleAddConfig}>  
                     +
                 </Button>
            </div>

            <div>
                <Button variant="primary" className="w-100 mt-3 text-white" onClick={onAdd}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
        
    )
}

export default ItemCount

