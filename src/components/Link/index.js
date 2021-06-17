import { Link as LinkBs} from 'react-router-dom'

export const Link = ({page}) => (
  <LinkBs to={page.path}>{page.name}</LinkBs>
)
