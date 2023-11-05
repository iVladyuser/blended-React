import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.searchValue.value;
    this.props.onSubmit(value);
  }
  render() {
    return <SearchFormStyled onSubmit={this.handleSubmit}>
      <InputSearch name="searchValue"/>
      <FormBtn>
        <FiSearch/>
</FormBtn>
    </SearchFormStyled>;
  }
}
