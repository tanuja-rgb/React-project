import { useForm } from "react-hook-form";

function Services(){
    const{register,handleSubmit,formState:{errors},} = useForm();

    const handleSubmit1 = (data)=>{
        console.log(data);
    }
    return(<>
        <form onSubmit={handleSubmit(handleSubmit1)}>
            <input
            {...register('fname',{minLength:{
                value:4,
                message:'First name cannot be less than 4 characters.'
               },
                maxLength:{
                value:20,
                message:'First name cnnot exceed 20 characters.'
            }})}
             />
             {errors.fname && <span style={{color:'red'}}>{errors.fname.message}</span>}<br /><br />
            <input
            {...register('lname',{required:'Please fill this.'})}
             />
             {errors.lname && <span style={{color:'red'}}>{errors.lname.message}</span>}
             <br /><br />
            <input 
            {...register('email',{pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:'Should be in correct form.'
            }})}
            />
            {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}<br /><br />
            <input
          {...register("password", {
            pattern: {
              value: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
              message:
                "Password must be at least 6 characters and include a number",
            },
          })}
        />
        {errors.password && <span className="text-danger">{errors.password.message}</span>}<br /><br />
             <input 
            {...register('age',{min:{
                value:18,
                message:'min age should be 18'         
            },max:{
                value:65,
                message:'max age should be 65'
            }})}
            />
            {errors.age && <span style={{color:'red'}}>{errors.age.message}</span>}<br /><br />
            <input type="checkbox"
            {...register('like')}
             /><br /><br />
            <button>Submit</button>
        </form>
        </>);
}

export default Services;