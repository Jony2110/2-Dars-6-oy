import Addres from "../Addres";
import Cars from "../Cars";
import "./index.css"

function User(props) {
    const {data} = props ; 
  return (








    <div className="userFlex">
         <img src={data.image} alt="1231324535464" />
        <h2 className="bio">{data.firstName  }  { data.lastName} </h2>
        <div className="phoneFlex">
        <p className="phone">{data.phone}</p>
        <p className="email">{data.email}</p>
        </div>
        <Addres/>
        <Cars/>
    </div>
  )
}

export default User