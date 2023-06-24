import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReadProducts } from '../../redux/thunks/productsThunk'

export const ProductList = ({onEditHandler, onDeleteHandler}) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  return (
    <>
    <table className="table" style={{maxWidth: '800px', margin: '0 auto'}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.precio}</td>
              <td>{product.stock}</td>
              <td><img src={product.imagen} alt="imagen" style={{width: '140px', height: '140px', objectFit: 'contain'}}/></td>
              <td>
                <button className="button button--secondary" style={{marginRight: '1rem'}} onClick={() => onEditHandler && onEditHandler(product)}>Editar</button>
                <button className="button button--secondary" onClick={() => onDeleteHandler && onDeleteHandler(product)}>Eliminar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}
