const TextInput = ({label, name, value, onChange, required=false}) => {
    return ( 
         <div className='mb-6'>
        <label htmlFor="{name}" className="block font-semibold"> {label}</label>
        <input
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        //onChange={(e)=>{setTile(e.target.value)}}
        onChange={onChange}
        required={required}
        >
        </input>
        </div>
    );
}
 
export default TextInput;