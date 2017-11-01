import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { fetchIndustries, fetchSectors, fetchServices, fetchCities} from '../actions/natives_actions'
// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <HashRouter>
//       <App/>
//     </HashRouter>
//   </Provider>
// );


class Root extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.store.dispatch(fetchSectors())
    this.props.store.dispatch(fetchIndustries())
    this.props.store.dispatch(fetchServices())
    this.props.store.dispatch(fetchCities())
  }

  render(){
    return (
      <Provider store={ this.props.store }>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>
    )
  }
}

export default Root;
