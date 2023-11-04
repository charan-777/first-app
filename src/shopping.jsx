import React from "react";
function Shopping() {
    var [cart, SetCart] = React.useState([
        {
            id: 1,
            title: 'Samsung Galaxy S7',
            price: 599.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYfC6o0ANsFfdFlgpprqxPqsAf9y_eIqrDg&usqp=CAU',
            amount: 1,
        },
        {
            id: 2,
            title: 'google pixel ',
            price: 499.99,
            img: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70',
            amount: 1,
        },
        {
            id: 3,
            title: 'Xiaomi Redmi Note 2',
            price: 699.99,
            img: 'https://m.media-amazon.com/images/I/41Q+oC53k+L._SY300_SX300_.jpg',
            amount: 1,
        },
    ]);
    var [num, setNum] = React.useState(1)

    function remove(i) {
        var temp = ([...cart])
        temp.splice(i, 1)
        SetCart(temp)
    }
    function up(a,i) {
     a.amount=a.amount+1
     SetCart([...cart])

    }
    function down(a,i) {
        if(a.amount>1){
            a.amount=a.amount-1
            SetCart([...cart])
        }
        else{
            cart.splice(i,1)
            SetCart([...cart])
        }

     
    }
    function clear(i){
        var btn=([...cart])
        btn.splice(i,3)
        SetCart(btn)
    }
    return (
        <div className="cart">
            <div className="second-div">
                <h1 className="head">Use Reducer <i class="bi bi-handbag-fill"></i><span className="bag">{cart.reduce((u,v)=>u+v.amount,0)}</span> </h1>
            </div>
            <h1 className="inside">Your Bag</h1>
            {
                cart.map((a, i) => {
                    return <div className="idiv">
                        <div className="img">
                            <img className="pic" src={a.img} />
                        </div>
                        <div className="content">
                            <h4 className="title">{a.title}</h4>
                            <h4>$ {a.price}</h4>
                            <label className='remove-btn' onClick={() => remove()}>remove</label>
                        </div>
                        <div className="boot">
                            <i class="bi bi-chevron-up" onClick={() => { up(a,i) }}></i>
                           <span >{a.amount}</span> 
                            <i class="bi bi-chevron-down" onClick={() => { down(a,i) }}></i>
                        </div>
                    </div>
                })
            }
            <hr style={{width:"60%"}} />
            <b style={{marginLeft:"25%"}}>Total</b>
            <b className="last">${cart.reduce((x,y)=>x+y.price*y.amount,0)}</b>
            <button className="btn" onClick={(i)=>{clear(i)}}>clear cart</button>
        </div>
    )
}
export default Shopping