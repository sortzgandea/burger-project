import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptop= axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error
                    })        
                })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqIterceptor)
            axios.interceptors.response.eject(this.resIterceptor)
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render(){
            return(
                <>
                    <Modal display={this.state.error}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>

                    <WrappedComponent {...this.props}/>
                </>
            )
        }
    }
}

export default withErrorHandler
