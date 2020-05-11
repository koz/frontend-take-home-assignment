import React from 'react';
import { shallow } from 'enzyme';
import { cards } from '../../utils/constants';
import Listing from './index';
import ListingCard from '../../components/ListingCard';

describe('<Listing />', () => {
  it('should render cards instances', () => {
    const wrapper = shallow(<Listing />);
    expect(wrapper.find(ListingCard)).toHaveLength(cards.length);
  });
  it('should render card with the correct props', () => {
    const wrapper = shallow(<Listing />);
    expect(
      wrapper
        .find(ListingCard)
        .first()
        .props()
    ).toMatchObject(cards[0]);
  });
});
