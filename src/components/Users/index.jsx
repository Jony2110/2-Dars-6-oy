import './index.css'
import User from '../User';
import data from '../../assets/data.json'


export default function Users() {
  
  
    return (

    <div className='usersFlex'>
    
      
       {
          data.length && data.map((el , index ) =>{
            return <User key={index} data = {el}></User>
           
          })
        }
        
    </div>
  )
}

 