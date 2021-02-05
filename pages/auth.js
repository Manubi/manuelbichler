import { signIn, signOut, useSession } from 'next-auth/client'

export default function Auth() {
  const [session, loading] = useSession()
  console.log('session', session)
  console.log('env', process.env.GITHUB_CLIENT_ID)
  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}
