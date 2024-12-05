import { SignInButton } from '@clerk/clerk-react'
import { Button } from './components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign in</Button>
    </SignInButton>
  )
}
