'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'

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
          <Button variant="contained" style={{ marginRight: '10px' }}>
            Login
          </Button>

          <Button
            onClick={() => {
              router.push('/home')
            }}
          >
            Home
          </Button>
        </div>
      </form>
    </div>
  )
}
