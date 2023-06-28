import React, { Component } from 'react'

import AppRouter from './components/AppRouter'
import ClientSide from './components/ClientSide'
import { logMyAccountURL, logGeneralErrors } from './utils/logger'

import 'vtex.country-codes/locales'
import './style.global.css'

class MyAccount extends Component {
  constructor(props: any) {
    super(props)

    if (
      window.location &&
      window.location.href.match('/account/orders') &&
      window.__RUNTIME__.workspace === 'master'
    ) {
      logMyAccountURL()
    }
  }

  public componentDidCatch(error: any, info: any) {
    if (window.__RUNTIME__.workspace === 'master') {
      logGeneralErrors(error, info)
    }
  }

  public render() {
    return (
      <div className="vtex-account helvetica flex justify-around">
        <ClientSide>
          <AppRouter />
        </ClientSide>
      </div>
    )
  }
}

export default MyAccount
