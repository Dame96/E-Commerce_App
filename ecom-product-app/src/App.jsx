import { useState } from 'react'
import './App.css'
import ProductList from '/components/ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: "MacBook Pro", price: "$1750", description: "Most Powerful Processing Chip & Longest-Lasting Battery." },
    { id: 2, name: "iPhone-17", price: "$1099", description: "AI Integrated - Most Advanced Smartphone Ever!" },
    { id: 3, name: "AirPods 5", price: "$350", description: "Clearest Sound Quality & Water Proof." },
  ]);
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App
