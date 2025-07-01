import { Link, Outlet } from 'react-router'

export default function ProfilesPages() {
  const profiles = [1, 2, 3, 4, 5]

  return (
    <div className='profiles-page'>
      <div>
        {profiles.map((profile) => (
          <Link to={`/profiles/${profile}`} key={profile}>
            Profile {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
