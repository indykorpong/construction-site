'use client'

import { Button } from '@mui/material'
import { useActionState } from 'react'

import { login } from '../../actions/auth'
import './style.css'

export default function Login() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, action, isPending] = useActionState(login, undefined)

  return (
    <div className="login-page">
      <form action={action} className="login-box">
        <h3>Login</h3>

        <div>
          <label>Email</label>

          <input id="email" name="email" style={{ width: '100%' }} />
        </div>

        <div>
          <label>Password</label>

          <input id="password" name="password" type="password" style={{ width: '100%' }} />
        </div>

        <div>
          <Button disabled={isPending} type="submit" variant="contained" loading={isPending} sx={{ width: 150 }}>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
