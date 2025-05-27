import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className='auth-container'>
        <div className="heading">Sign Up <hr /></div>

        <form action="">
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <div className='extra-links'>
                <Link to='/login' >Already have account?</Link>
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default SignupPage
