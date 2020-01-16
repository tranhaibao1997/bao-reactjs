import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Loading() {
  return (
    <main>
      <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col=md-12">
              <div className="breadcrumb-text text-center">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <p>Loading</p>
        </div>
      </section>
    </main>
  )
}