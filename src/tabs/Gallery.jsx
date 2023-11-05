import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
    photos: [],
    page: 1,
    showLoadMore: false,
  };
  onSubmit = searchValue => {
    if (!searchValue) return;
    this.setState({ searchValue, page: 1, photos: [] });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      const {
        data: { photos, total_results },
      } = await ImageService.getImages(this.state.searchValue, this.state.page);
      this.setState(prev => ({
        photos: [...prev.photos, ...photos],
        showLoadMore: this.state.page < Math.ceil(total_results / 15),
      }));
    }
  }
  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit}></SearchForm>
        <Grid>
          {this.state.photos.length > 0 &&
            this.state.photos.map(({ id, alt, avg_color, src: { medium } }) => {
              return (
                <GridItem key={id}>
                  <CardItem color={avg_color}>
                    <img src={medium} alt={alt} />
                  </CardItem>
                </GridItem>
              );
            })}
        </Grid>
        {this.state.showLoadMore && (
          <Button onClick={this.handleLoadMoreClick}>Load More</Button>
        )}
        {!this.state.showLoadMore && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}
