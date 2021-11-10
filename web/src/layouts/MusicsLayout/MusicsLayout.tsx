import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MusicLayoutProps = {
  children: React.ReactNode
}

const MusicsLayout = ({ children }: MusicLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.musics()}
            className="rw-link"
          >
            Musics
          </Link>
        </h1>
        <Link
          to={routes.newMusic()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Music
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MusicsLayout
