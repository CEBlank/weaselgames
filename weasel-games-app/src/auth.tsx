  import './index.css'
  import Nav from './Nav.tsx'
  import { ClerkProvider } from '@clerk/clerk-react'

  // Import your Publishable Key
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

  import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function AuthSign() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Nav />
      </ClerkProvider>
