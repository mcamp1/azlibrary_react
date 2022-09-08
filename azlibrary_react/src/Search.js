import React from 'react';
import axios from 'axios';
import SelectCollectionGroup from './SelectCollectionGroup'
import SearchResults from './SearchResults'

const baseUrl = "https://devdata.azgs.arizona.edu/api/v1/metadata";

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTitle: "",
            searchUrl: baseUrl,
            results: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.buildQueryString());
    }

    buildQueryString() {
        let url = baseUrl;
        let params = new URLSearchParams();

        if (this.state.searchTitle){
            params.append('title', this.state.searchTitle);
        }

        if (Array.from(params).length > 0){
            url = baseUrl + "?" + params.toString();
        } 

        this.setState({ 'searchUrl': url });
    }

    getResults = () => {
        const self = this;
        axios
            .get(this.state.searchUrl)
            .then(function (response) {
                self.setState({
                    results: response.data.data,
                });
            });
    };

    render() {
        return (

            <div className="container">
                <form>

                    <SelectCollectionGroup />

                    <div className="form-group">
                        <label htmlFor="searchTitle">Title</label>
                        <input type="text" className="form-control" id="searchTitle" name="searchTitle" autocomplete="off" onChange={this.handleInputChange} />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={this.getResults}>Search</button>
                </form>

                <div className="mt-5">
                    <a href={this.state.searchUrl}>{this.state.searchUrl}</a>
                </div>

                <SearchResults results={this.state.results} />

            </div>
        )
    }
}