import { useMutation, useRouter } from "blitz"
import logout from "app/auth/mutations/logout"

const Header = () => {
  const [logoutMutation] = useMutation(logout)
  const router = useRouter()

  const handleLogout = async () => {
    await logoutMutation()
    await router.push("/")
  }

  return (
    <div>
      <h1>hello world</h1>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  )
}

export default Header
