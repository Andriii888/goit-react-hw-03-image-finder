import { Component } from 'react';
import {SearchBar} from './Searchbar/SearchBar';
import {ImageGallery} from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imageQuery:'',
        }

        handleForSubmit=imageQuery=>{
this.setState({imageQuery})
        }
  render (){return (
    <div>
      <SearchBar onSubmit={this.handleForSubmit}/>
      <ImageGallery imageQuery={this.state.imageQuery}/>
    </div>
  );}
  
};
