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
        return (<header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
      
          <input
            class="input"
            type="text"
            name="imageQuery"
            value={this.state.imageQuery}
            onChange={this.handleQueryChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>)
    }
}