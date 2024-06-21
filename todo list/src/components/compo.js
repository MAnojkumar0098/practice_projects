
export default function Ff(props){
    
    let arr=props.todos;
    return(
        <div>
        {arr.map((item, index) => (
            <label><div className='l'><input type='checkbox'/><b>{item}</b></div></label>
        ))}
         </div>
    )
}