import { Component } from 'react';
import {SearchBar} from './Searchbar/SearchBar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {AppStyle} from './AppStyle.styled';
import {LoadMoreButton} from './Button/Button';
import {Modal} from './Modal/Modal';

export class App extends Component {
  state = {
    imageQuery:'',
    imgURL:null,
        }

        handleForSubmit=imageQuery=>{
this.setState({imageQuery})
        }

       

  render (){return (
    <AppStyle>
      <SearchBar onSubmit={this.handleForSubmit}/>
      <ImageGallery imageQuery={this.state.imageQuery}/>
      {this.state.imageQuery && <LoadMoreButton/>}
      {this.state.imgURL && <Modal url={this.state.imgURL}/>}
    </AppStyle>
  );}
  
};
