'use client'
import { useRouter } from 'next/navigation'
import './style.css'

export default function Login() {
  const router = useRouter()

  return (
    <div className="login-page">
      <form className="login-box">
        <h3>Login</h3>

        <div>
          <label>User</label>

          <input style={{ width: '100%' }} />
        </div>

        <div>
          <label>Password</label>

          <input style={{ width: '100%' }} />
        </div>

        <div>
          <button style={{ marginRight: '10px' }}>Login</button>
          <button
            onClick={() => {
              router.push('/home')
            }}
          >
            Home
          </button>
        </div>
      </form>
    </div>
  )
}
