import React from "react";
function Reviews() {
    var [review, setReview] = React.useState([
        {
            id: 1,
            name: 'Pritam Ahire',
            job: 'web developer',
            image:
                'https://media.licdn.com/dms/image/C5103AQEOJPrf_VFaXA/profile-displayphoto-shrink_800_800/0/1565340799903?e=2147483647&v=beta&t=yvERZWmYhY_7ez_4KmHhpXzoScWGRGLOdvECA2TKixo',
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: 'Srinivas',
            job: 'web designer',
            image:
                'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698624000&semt=ais',
            text:
                'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 3,
            name: 'Sangeetha',
            job: 'intern',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJL4VCOgsX0nJJzSQuRmj1bMjdAouJi51eg&usqp=CAU',
            text:
                'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
                'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ])
    var [index, setIndex] = React.useState(0)
    var { name, job, image, text } = review[index]
    function right(){
      if(index < review.length-1){
        setIndex(index+1)
      }
      else{
        setIndex(0)
      }
    }
    function left(){
       if(index ===0){
        setIndex(review.length-1)
       }
       else{
            setIndex(index-1)
       }
    }
    function suprise(){
        var randomNumber = Math.floor(Math.random() * review.length);
      if( randomNumber===index){
        randomNumber= index +1
      }
      else{
        setIndex(randomNumber)
      }
    }
    return (
        <div className="fdiv">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <b style={{color:"aqua"}}>{job}</b>
            <p style={{color:"gray",textAlign:"justify"}}>{text}</p>
            <br /><br />
            <span><i onClick={()=>{left()}} class="bi bi-chevron-left"></i></span> <span> <i onClick={()=>{right()}} class="bi bi-chevron-right"></i></span><br /><br />
             <button className="box" onClick={()=>{suprise()}}>Suprise Me</button>
        </div>
    )
}
export default Reviews