import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActions } from '../actions/GetActions';
import Pagination from './Pagination';
import DataTable from './DataTable';

class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            postsPerPage: 10,
            indexOfLastPost: 10,
            indexOfFirstPost: 0,
            currentPosts: this.props.address.slice(0, 10)
        }
    }

    componentDidMount() {
        this.props.getAddress();
    }

    loadInitialData = () =>{
        this.setState({
            currentPosts: this.props.address.slice(0, 10)
        })
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.address !== this.props.address) {
            this.setState({
                currentPosts: this.props.address.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
            })
        }
    }

    paginate = pageNumber => {
        this.setState({
            currentPage: pageNumber,
        }, () => {
            this.setState({
                indexOfLastPost: this.state.currentPage * this.state.postsPerPage
            }, () => {
                this.setState({
                    indexOfFirstPost: this.state.indexOfLastPost - this.state.postsPerPage
                }, () => {
                    this.setState({
                        currentPosts: this.props.address.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
                    })
                })
            })
        });
    };

    render() {
        const { address } = this.props;
        const { postsPerPage, currentPosts } = this.state;
        return (
            <React.Fragment>
                 <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={address.length}
                    paginate={this.paginate}
                />
                <DataTable tableData={currentPosts} loading={address.length > 1 ? false : true} />
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    address: state.GetData.address
})

const mapDispatchToProps = (dispatch) => ({
    getAddress: () => dispatch(getActions.getAddress())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address)
