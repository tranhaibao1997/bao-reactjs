import React from 'react'

export default function NotFound() {
  return (
    <main>
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col=md-12">
                <div className="breadcrumb-text text-center">
                  <h1>Not found</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <p>Not found</p>
          </div>
        </section>
      </main>
  )
}