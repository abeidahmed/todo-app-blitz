import { BlitzPage } from "blitz"
import ApplicationLayout from "app/core/layouts/ApplicationLayout"

const UpcomingPage: BlitzPage = () => {
  return <div>hello world</div>
}

UpcomingPage.authenticate = true
UpcomingPage.getLayout = (page) => (
  <ApplicationLayout title={"Create New Project"}>{page}</ApplicationLayout>
)

export default UpcomingPage
