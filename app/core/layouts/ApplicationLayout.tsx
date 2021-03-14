import { ReactNode, useState } from "react"
import { Head } from "blitz"
import Header from "app/application/components/Header"
import Sidebar from "app/application/components/Sidebar"

type ApplicationLayoutProps = {
  title?: string
  children: ReactNode
}

const ApplicationLayout = ({ title, children }: ApplicationLayoutProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <Head>
        <title>{title || "todo-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleSidebar={() => setIsActive(!isActive)} />
      <div className="flex">
        <Sidebar sidebarActive={isActive} />
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}

export default ApplicationLayout
