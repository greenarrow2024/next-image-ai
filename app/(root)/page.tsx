import { SignIn, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      <p>Home Ronnie</p>
      <SignIn />
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home