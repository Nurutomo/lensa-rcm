import About from "./Pages/About"
import Info from "./Pages/Info"
import Livestream from "./Pages/Livestream"
import Photography from "./Pages/Photography"
import Reason from "./Pages/Reason"
import Services from "./Pages/Services"
import Videography from "./Pages/Videography"
import Page from "./Page"

function _Pages(props) {
  const SinglePage = Pages[props.type]
  return (
    <div className='mt-4' id={props.type.toLowerCase()}>
      <Page title={SinglePage.title || props.type}>
        <SinglePage {...props} />
      </Page>
    </div>
  )
}

const Pages = Object.assign(_Pages, {
  About,
  Info,
  Livestream,
  Photography,
  Reason,
  Services,
  Videography,
})

export default Pages
