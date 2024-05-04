import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDeleteproductMutation, useGetAllproductsQuery, useGetProductsDetailsByIdQuery, useLazyGetAllproductsQuery } from "../../services/products";
function Products() {
    var { isLoading, data } = useGetAllproductsQuery()
    // console.log(isLoading)
    var [rfn] = useLazyGetAllproductsQuery();
    var [fn] = useDeleteproductMutation();
    var navi = useNavigate();
    function deleteproduct(id) {
        fn(id).then((res) => {
            alert("deleteproduct")
            rfn();
        })
    }
    function editproduct(id) {
        navi(`/editproduct/${id}`)
    }

    // function deleteproduct(id){
    //     axios.delete(`http://localhost:4000/products/${id}`)
    //     .then(()=>{
    //         alert("delete ipai")
    //     })
    // }
    return (
        <div className="mybox">
            <h1>Products</h1>
            {
                isLoading && <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" srcset="" />
            }
            <ul id="product">
                {
                    data && data.map((product) => {
                        return (
                            <li>
                                <img src={product.image} alt="" />
                                {product.title}
                                <i className="bi bi-trash" onClick={() => { deleteproduct(product.id) }}></i>
                                <i className="bi bi-pencil-square" onClick={() => { editproduct(product.id) }}></i>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Products