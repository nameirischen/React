import { useState } from "react";
import TextInput from "../inputs/TextInput";
import  SelectedInput from "../inputs/SelectedInput";
import TextareaInput from "../inputs/TextareaInput";


const NoteForm = ({notes, setNotes}) => {
    // const [title, setTile]=useState('');
    // const [priority, stPriority]=useState('Medium');
    // const [category, setCategory]=useState('Work');
    // const [description, setDescription]=useState('');
    const[formData, setFormData]=useState({
        title:'',
        priority: 'Medium',
        category:'Work',
        description:''
    })

    const [isFormVisible, setIsFormVisible]=useState(false);
    
    //const handleChange  =(e)=>console.log(e.target.name, e.target.value)

    const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
    };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.title || !formData.description) return; // Validation
  // Create a new note object
  const newNote = { id: Date.now(), ...formData };
  // Add the new note to the notes array, which gets passed from App.jsx
  setNotes([newNote, ...notes]);
  // Reset form data
  setFormData({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });
};

    return (    
    <>
    {/*toggle button*/}
    <button
    onClick={() => setIsFormVisible(!isFormVisible)}
    className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'
  >  {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
  </button>

    {/*Emmt abbreviation*/}
    {isFormVisible  && (<form className='mb-6' onSubmit={handleSubmit}>
        <TextInput
        label='Title'
        name='title'
        value={formData.title}
        onChange={handleChange}
        required
        ></TextInput>
     
       <SelectedInput
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={[
          { value: "High", label: "🔴 High" },
          { value: "Medium", label: "🟠 Medium" },
          { value: "Low", label: "🟢 Low" },
        ]}
      />

      <SelectedInput
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={[
          { value: "Work", label: "📂 Work" },
          { value: "Personal", label: "🏠 Personal" },
          { value: "Ideas", label: "💡 Ideas" },
        ]}
      />
   
        <TextareaInput
        label='Description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        required
        />
   

    <button
    type='submit'
    className='w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition'
    >
    Add Note
    </button>
    </form>)}
    
    </>  
 );
}
 
export default NoteForm;