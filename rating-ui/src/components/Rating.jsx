import { useState } from "react";

const Rating = () => {
    const [rating, setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const feedbackmsg=['Terrble','Poor','Fair','Good','Excellent'];

    // const clicked=(index)=>console.log('clicked',index);
    // const hovered=(direction,index)=>console.log('hover',direction,index)
    const stars=Array.from({length:5},(_, i)=>i+1)
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
            <h2>Rate Your Experience</h2>
          <div className='stars'>
          {stars.map((star) => (
            <span 
            // onClick={()=>clicked(index)}
            // onMouseEnter={()=>hovered('enter',index)}
            // onMouseLeave={()=>hovered('leave',index)}
            onClick={()=>setRating(star)}
            onMouseEnter={()=>setHover(star)}
            onMouseLeave={()=>setHover(0)}

            key={star} 
            className={`star ${star<=(hover||rating)? 'active' : ' '}`} >
            {'\u2605'}
            </span>
              ))}
          </div>       
            {rating>0&&<p className='feedback'>{feedbackmsg[rating-1]}</p>}
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