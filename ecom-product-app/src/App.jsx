import { useState } from 'react';
import './App.css';
import ProductList from '/components/ProductList';
import img1 from './assets/image1.webp';
import img2 from './assets/image2.webp';
import img3 from './assets/image3.webp';

// importing useState to intialize the state of the product list, which is an array of 3 product objects. 
// importing Product list FC to diplay each product from the list. 

function App() {
  const [products] = useState([
    { id: 1, name: "MacBook Pro", price: "$1750", image: img1, description: "Most Powerful Processing Chip + Longest-Lasting Battery." },
    { id: 2, name: "iPhone-17", price: "$1099", image: img2, description: "AI Integrated - Most Advanced Smartphone Ever!" },
    { id: 3, name: "AirPods 5", price: "$350", image: img3, description: "Clearest Sound Quality + Water Proof." },
  ]);
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App
