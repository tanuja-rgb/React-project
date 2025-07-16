import { useState } from "react";

function ContactUs(){
    const[formdata,setFormdata] = useState({
        "fname":'',
        "lname":'',
        "email":'',
        "password":'',
        "address":'',
        "country":'',
        "like":true,
    });
    const[errors,setErrors] = useState({});

    const onchangehandler = (event)=>{
        setFormdata({
            ...formdata,
            [event.target.name]: event.target.type === 'checkbox'?event.target.checked :  event.target.value
        })
    }
    const onhandlesubmit = (event)=>{
        event.preventDefault();
        console.log(formdata);
        setErrors({});
        if(formdata.fname === '' || formdata.fname === null || !isNaN(formdata.fname)){
            setErrors({
                err1:"first name can not be blank"
            })
        }
        else if(formdata.password.length <=3 || formdata.password.length >= 9){
            setErrors({
                err2:"Password should not be in 3 to 9 range"
            })
        }
    }
    return(<>
        <p>Contact Us Page</p>
        <form onSubmit={onhandlesubmit}>
            <input
              name="fname"
              value={formdata.fname}
              onChange={onchangehandler}
            />
            {errors && <span style={{color:'red'}}>{errors.err1}</span>}
            <br /><br />
            <input
               name="lname"
               value={formdata.lname}
               onChange={onchangehandler}
            /><br/><br />
            <input
               name="email"
               value={formdata.email}
               onChange={onchangehandler}
            /><br /><br />
            <input 
               name="password"
               value={formdata.password}
               onChange={onchangehandler}
            />
            {errors && <span style={{color:'red'}}>{errors.err2}</span>}
            <br /><br />
            <textarea
               rows={5}
               cols={10}
               name="address"
               value={formdata.address}
               onChange={onchangehandler} 
            />

            <select
                name="country"
                value={formdata.country}
                onChange={onchangehandler}
            >
                <option value="USA">USA</option>
                <option value="INDIA">INDIA</option>
                <option value="UK">UK</option>
                <option value="JAPAN">JAPAN</option>
            </select><br /><br />
            <input
               type="checkbox"
               name="like"
            //    value={formdata.like}
               checked={formdata.like}
               onChange={onchangehandler}

            /><br /><br />
            <button type="submit">Submit</button>
            <p>{JSON.stringify(formdata)}</p>
        </form>
        </>)
}
export default ContactUs;