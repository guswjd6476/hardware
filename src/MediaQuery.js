import React from "react"
import { useMediaQuery } from "react-responsive"

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:720px)"
  });

  return <React.Fragment>{isMobile && children}</React.Fragment>
}

const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:720px) "
  });
  return <React.Fragment>{isPc && children}</React.Fragment>
}

export  {Mobile,PC};