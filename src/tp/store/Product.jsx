import Rating from "./Rating";

export default function product({product,key}){
    return   <tr >

    <td>{product.id}</td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td><img width={250} src={product.image}/></td>
    <td><Rating count = {product.rating.count} rate = {product.rating.rate}/></td>
    </tr>
}