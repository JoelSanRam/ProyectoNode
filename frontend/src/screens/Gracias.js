import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

function Gracias(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };


  return (
    <>
    <div className="back-to-result">
    <Link to="/">Regresar</Link>
    </div>




    <h1 className="gracias">Gracias por su compra</h1>
    
    <h2 className="gracias">Su producto será enviado a su correo electrónico</h2>
    
    <main>
    <svg width="100%" height="800">
      <g class="coin1">
        <circle cx="260" cy="220" r="35" fill="#ffd900"/>
        <circle cx="260" cy="220" r="25" fill="#fff300"/>
        <rect   x="255"  y="205"  width="10" height="30" fill="#ffd900"/>
      </g>

      <g class="coin2">
        <circle cx="340" cy="230" r="35" fill="#ffd900"/>
        <circle cx="340" cy="230" r="25" fill="#fff300"/>
        <rect   x="335"  y="215"  width="10" height="30" fill="#ffd900"/>
      </g>
      <g class="coin3">
        <circle cx="420" cy="240" r="35" fill="#ffd900"/>
        <circle cx="420" cy="240" r="25" fill="#fff300"/>
        <rect   x="415"  y="225"  width="10" height="30" fill="#ffd900"/>
      </g>

      <g class="credit-card">
        <rect x="200" y="200" rx="25" ry="25" width="400" height="250" fill="#00a8ff"/>
        <rect x="200" y="245" width="400" height="50" fill="#0b6fa2"/>
        <rect x="210" y="320" width="270" height="25" fill="#e5e5e5"/>
        <rect x="500" y="320" width="85"  height="25" fill="#e5e5e5"/>
        <rect x="210" y="400" width="85"  height="25" fill="#e5e5e5"/>
      </g>
    </svg>
  </main>

    </>
  );
}
export default Gracias;