type AvatarProps = {
  userName: string
  userAvatar?: string
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ userName, userAvatar, size = 7 }) => {
  let avatarSize: string = `w-${size} h-${size}`

  if (userAvatar) {
    return <img className={`${avatarSize} rounded-full`} src={userAvatar} alt={userName} />
  }

  return (
    <img
      className={`${avatarSize} rounded-full`}
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt={userName}
    />
  )
}

export default Avatar
