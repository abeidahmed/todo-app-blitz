import { ReactNode } from "react"
import { Head } from "blitz"
import Header from "app/application/components/Header"

type ApplicationLayoutProps = {
  title?: string
  children: ReactNode
}

const ApplicationLayout = ({ title, children }: ApplicationLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "todo-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </>
  )
}

export default ApplicationLayout
