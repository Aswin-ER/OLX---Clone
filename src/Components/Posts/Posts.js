import React,{useState, useEffect, useContext} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import firebase from '../../firebase/config';

function Posts() {
  const firestore = getFirestore(firebase);
  const [products, setproducts] = useState([]);

  useEffect(()=> {
    const fetchedProducts = [];
    getDocs(collection(firestore, "products")).then((response)=> {
      response.forEach((doc)=> {
        console.log(doc);
        fetchedProducts.push(doc.data());
      });
      setproducts(fetchedProducts);
    })
  }, []);
  console.log(products,"Products vanuu");

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue Jun 10 2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/6/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
