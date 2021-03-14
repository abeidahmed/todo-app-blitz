import { ReactNode } from "react"
import { Head } from "blitz"

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

      {children}
    </>
  )
}

export default ApplicationLayout
