import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from './index';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({ id: 'car' })
}));

describe('<Form />', () => {
  it('matches snapshot', () => {
    const component = shallow(<Form />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
