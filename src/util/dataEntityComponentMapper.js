import Page from '../components/Page'
import LinkSet from '../components/LinkSet'
import Link from '../components/Link'
import Text from '../components/Text'
import Carousel from '../components/Carousel'
import Grid from '../components/Grid'
import Tray from '../components/Tray'

const componentMapper = (() => {
  const mapping = {
    page: Page,
    carousel: Carousel,
    grid: Grid,
    tray: Tray,
    linkset: LinkSet,
    link: Link,
    text: Text,
  }

  return (id = '') => mapping[id.split(':')[2]]
})()

export default componentMapper
