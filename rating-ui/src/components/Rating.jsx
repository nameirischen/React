import { useState } from "react";
import Star from "./star";


const Rating = ({
  heading='Rate your experience',
  color = 'gold',
  feedbackMessages=['Terrble','Poor','Fair','Good','Excellent']
}
  
) => {
    const [rating, setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const[submitted, setSubmitted]=useState(false)
    //const feedbackmsg=['Terrble','Poor','Fair','Good','Excellent'];

    // const clicked=(index)=>console.log('clicked',index);
    // const hovered=(direction,index)=>console.log('hover',direction,index)
    const stars=Array.from({length:5},(_, i)=>i+1)

    const handleSubmit=()=>{
if(rating>0){
  setSubmitted(true);
}

}
const closeModal=()=>{
  setSubmitted(false);
  setRating  (0);
  setHover(0);
}
    return ( 
        //  <div style={{
        //         textAlign:'center',
        //         fontFamily:'Arial',
        //         padding:'20px'
        //     }} >
            //<div style={styles.container
            //}
            //>

          <div className='rating-container'> 
            {/* <h2>Rate Your Experience</h2> */}
            <h2>{heading}</h2>
          <div className='stars'>
          {stars.map((star) => (
            <Star 
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
            >


            </Star>
              // <span 
              // // onClick={()=>clicked(index)}
              // // onMouseEnter={()=>hovered('enter',index)}
              // // onMouseLeave={()=>hovered('leave',index)}
              // onClick={()=>setRating(star)}
              // onMouseEnter={()=>setHover(star)}
              // onMouseLeave={()=>setHover(0)}
              // key={star} 
              // // className={`star ${star<=(hover||rating)? 'active' : ' '}`} >
              //    className='star'
              //    style={{color: star <= (hover || rating) ? color : '#ccc'}}>
              // {'\u2605'}
             
              // </span>
              ))}
          </div>       
            {rating>0&&<p className='feedback'>{feedbackMessages[rating-1]}</p>}
            <button className="submit-btn" onClick={handleSubmit} disabled={rating===0}>Submit</button>

            {
  /* Modal */
}
{
  submitted && (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank You!</h2>
        <p>
          You rated us {rating} star{rating > 1 ? 's' : ''}!
        </p>
        <button className='close-btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}
        </div>
        
        );
}
//  const styles={
//     container:{
//         textAlign:'center',
//         fontFamily:'Arial',
//         padding:'20px'
//     }
// }
export default Rating;