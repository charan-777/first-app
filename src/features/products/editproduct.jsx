import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useGetProductsDetailsByIdQuery, useUpdateproductMutation } from "../../services/products";
function Editproduct() {
    var { pid } = useParams()
    var { data, isloading } = useGetProductsDetailsByIdQuery(pid)
    var [ufn] = useUpdateproductMutation()
    var productForm = useFormik({
        initialValues: { title: "" },
        onSubmit: (values) => {
            ufn(values).then(()=>{
                alert("updated")
            })
        }
    })
    React.useEffect(() => {
        console.log(data)
        productForm.setValues(data)
    }, [data])


    return (
        <div className="mybox">
            <h1>Editproduct</h1>
            <form onSubmit={productForm.handleSubmit}>
                <input type="text" placeholder="title" value={productForm.values?.title} name="title" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
                <br />
                <input type="text" placeholder="price" value={productForm.values?.price} name="price" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
                <br />
                <input type="text" placeholder="description" value={productForm.values?.description} name="description" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
                <br />
                <input type="text" placeholder="category" value={productForm.values?.category} name="category" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
                <br />
                <input type="text" placeholder="image" value={productForm.values?.image} name="image" onChange={productForm.handleChange} onBlur={productForm.handleBlur} />
                <br />
                <button>Update products</button>

            </form>
        </div>
    )
}
export default Editproduct