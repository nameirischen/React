import Rating from "./components/Rating";

const App = () => {
  return ( <div>
    <Rating 
    heading="how do you feel about React?"
    //color='blue'
    feedbackMessages={['Hate it', 'Dislike it', 'Meh', 'Like it', 'Love it']}
    >
     
    </Rating>
   </div> );
}
 
export default App;