import React from "react";
function Galleries(){
    var [pic ,setPic]=React.useState( [
          [
            "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"
          ],
          [
            "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg"
          ]
        ])
    return(
      <div className="main" >
      <h1>Gallery of animals</h1>
      {
          pic.map((a) => {
              if (Array.isArray(a)) {
                  return <div className="sec">
                      <h2>Slides</h2>
                      {
                          a.map((b) => {

                              return <img src={b} className="thrd"/>

                          })
                       
                      }
                  </div>
              }
          })
      }
  </div>
    )
}
export default Galleries