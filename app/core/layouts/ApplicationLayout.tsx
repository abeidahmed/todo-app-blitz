import { ReactNode, useState } from "react"
import { Head } from "blitz"
import ModalStore from "app/core/stores/modal"
import Header from "app/application/components/Header"
import Sidebar from "app/application/components/Sidebar"
import ModalRoot from "app/core/components/ModalRoot"

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

      <ModalStore>
        <ModalRoot />
        <Header toggleSidebar={() => setIsActive(!isActive)} />
        <div className="flex">
          <Sidebar sidebarActive={isActive} />
          <main className="flex-1">{children}</main>
        </div>
        <div id="modal-root"></div>
      </ModalStore>
    </>
  )
}

export default ApplicationLayout
