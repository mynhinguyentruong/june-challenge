import { useNavigate } from "react-router-dom";
import { supabase } from "../../features/books/booksSlice"

export default function Login() {
    const navigate = useNavigate()

    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'nhi@email.com',
            password: 'nhi-password',
          })
        console.log(data);
        console.log(error);

        navigate('/')
    }


    return (
        <>
        <h1>Please login</h1>
        <button onClick={login}>Click to login</button>
        </>
    )
}