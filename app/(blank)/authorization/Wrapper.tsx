import React from 'react'

import { AuthNavigateContext } from '../../../context/authorization/navigate'

function Wrapper (): JSX.Element {
  const { page } = React.useContext(AuthNavigateContext)

  return (
    <section className="grid grid-cols-1 bg-background-light-2 dark:border-0 dark:bg-background-dark-2 rounded-xl w-11/12 lg:w-6/12 xl:w-5/12 m-auto">
      {page}
    </section>
  )
}

export default Wrapper
