import { Link } from "react-router-dom"

function LoginPage() {
  return (
    <div className='auth-container'>
        <div className="heading">Login <hr /></div>

        <form action="">
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <div className='extra-links'>
                <Link to='/signup' >Don't have account?</Link>
                <Link to='/login' >Forget Password?</Link>
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default LoginPage
