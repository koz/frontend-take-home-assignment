import React from 'react';
import { shallow } from 'enzyme';
import ListingCard from './index';

describe('<ListingCard />', () => {
  it('should render the icon correctly', () => {
    const iconPath = 'icon/path/image';
    const wrapper = shallow(<ListingCard id="" icon={iconPath} title="" />);
    expect(wrapper.exists(`[src="${iconPath}"]`)).toBe(true);
  });

  it('should render the title correctly', () => {
    const title = 'card title';
    const wrapper = shallow(<ListingCard id="" icon="" title={title} />);
    expect(wrapper.text()).toContain(title);
  });
});
