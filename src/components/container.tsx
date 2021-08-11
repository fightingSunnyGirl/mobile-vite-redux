import React from 'react'
import Loading from './loading'
import Error from './error'

interface IPropsModel {
  children: JSX.Element;
  loading?: boolean;
  error?: Project.General.Error | null;
}

function Container (props: IPropsModel): JSX.Element {
  const { loading, error, children } = props

  return (
    <div className="components_container">
      {!error && loading
        ? (
          <Loading />
          )
        : error
          ? (
            <Error error={error} />
            )
          : (
            <div>{children}</div>
            )}
    </div>
  )
}

export default Container
