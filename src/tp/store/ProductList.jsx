import { useEffect, useState } from "react"
import Product from "./Product"
import product from "./Product"

export default function ProductList(){

    const [productList, setProductList] = useState([])
    const [categories, setCategoryList] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [category, setCatgeory] = useState('')

    const displayCategories = () => {
        return categories.map((category,key) => 
            <button className="btn btn-secondary" onClick={(e)=> {setCatgeory(category); e.preventDefault() }}>
                {category}
            </button>
        )
    }

    const displayProduct = () => {
        let productsTemp = productList
        if(searchInput !== undefined){
        productsTemp = productList.filter(product =>
             product.title.includes(searchInput) 
            || product.id.toString().includes(searchInput)
            || product.description.includes(searchInput)
        )
        }
        if(category){
            productsTemp = productsTemp.filter(product=>{
                return product.category === category
            })
        }
        if (productsTemp.length > 0){
            return productsTemp.map( (product, key) => {
                return <Product product={product} key={key}/>
            })   
        }
        return <tr>
            <td colSpan={7}>No Items</td>
        </tr>
    }
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
                        .then(response => response.json())
                        .then(response =>setProductList(response))
    }
    const geCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
                        .then(response => response.json())
                        .then(response =>setCategoryList(response))
    }
    useEffect( ()=> {
        getProducts()
        geCategories()
    },[])



    
    const handleSearch = (e) => {
        e.preventDefault()
        const seachValue = document.querySelector('#search').value
        setSearchInput(seachValue)
    }

    return <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search: </h2>
        <form>
            <div className="row g-3 align-items-center">
            <div className="col-auto">
            <label className="col-auto-label">Search</label>
            </div>
            <div className="col-auto">
            <input type="text" id="search" className="form-control"/> 
            </div>
            <div className="col-auto">
            <input type="submit" value='Search' onClick={handleSearch} className="btn btn-primary"/>
            </div>
            </div>
            <div className="row g-3 align-items-center">
            <div className="btn-group">
                {displayCategories()}
            </div>
            </div>
        </form>
        <h1>Products : </h1>
        <table className="table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {displayProduct()}
            </tbody>
        </table>
    </div>
}