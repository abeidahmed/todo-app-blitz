import { BlitzPage } from "blitz"
import ApplicationLayout from "app/core/layouts/ApplicationLayout"

const TodayPage: BlitzPage = () => {
  return <div>hello world</div>
}

TodayPage.authenticate = true
TodayPage.getLayout = (page) => <ApplicationLayout title="Today's todo">{page}</ApplicationLayout>

export default TodayPage
