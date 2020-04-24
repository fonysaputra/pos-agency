import React from 'react'
import { connect } from 'react-redux'
import { getNews, getPost } from '../../actions'
import Navbar from '../../lib/Navbar'
import Sidebar from '../../lib/Sidebar'
import ContentCalendar from './ContentCalendar'
import ContentBox from './ContentBox'
import ContentProduct from './ContentProduct'
import Footer from '../../lib/Footer'

class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Selamat Datang Kembali</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <ContentBox />
              <div className="row">
                <section className="col-lg-7 connectedSortable">
                  <ContentProduct />
                </section>
                <section className="col-lg-5 connectedSortable">
                  <ContentCalendar />
                </section>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  article: state.responsePost.data,
  news: state.responseNews.data,
})

const mapDispatchToProps = (dispatch) => ({
  getNews: (id, ids) => dispatch(getNews({ id: id, ids: ids })),
  getPost: () => dispatch(getPost()),
})

Index = connect(mapStateToProps, mapDispatchToProps)(Index)

export default Index
