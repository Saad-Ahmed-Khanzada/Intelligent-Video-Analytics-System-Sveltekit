import { register } from 'module';


export const actions ={
    register:async({locals,request})=>{
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);
        console.log(data);
        

    }
}