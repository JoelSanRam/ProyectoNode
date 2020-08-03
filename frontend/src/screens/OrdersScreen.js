import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listOrders, deleteOrder } from '../actions/orderActions';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  console.log(orders);

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //  <a href={`uploads${order.pdf}`} download>aqui</a>
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  return loading ? <div>Cargando...</div> :
    <div className="content content-margined">

      <div className="order-header">
        <h3>Ordenes</h3>
      </div>
      <div className="order-list">

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>TOTAL</th>
              <th>Usuario</th>
              <th>Pagado</th>
              <th>Fecha de pago</th>

              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td><a href={`uploads${order.orderItems[0].image}`} download>aqui</a></td>
              <td>{order.user.name}</td>
              <td>{order.isPaid.toString()}</td>
              <td>{order.paidAt}</td>

              <td>
                <Link to={"/order/" + order._id} className="button secondary" >Detalles</Link>
                {' '}
                <button type="button" onClick={() => deleteHandler(order)} className="button secondary">Borrar</button>
              </td>
              
            </tr>))}
          </tbody>
        </table>

      </div>
    </div>
}
export default OrdersScreen;