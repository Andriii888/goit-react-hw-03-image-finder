// import PropTypes from 'prop-types';
import { Component } from 'react';

export class SearchBar extends Component {

    state = {
imageQuery:'',
    }

    handleQueryChange = (e)=>{
e.preventDefault();
this.setState({imageQuery: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = (e)=>{
e.preventDefault();
this.props.onSubmit(this.state.imageQuery);
this.setState({imageQuery:''});
    }

    render(){
        return (<header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
      
          <input
            className="input"
            type="text"
            name="imageQuery"
            value={this.state.imageQuery}
            onChange={this.handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>)
    }
}