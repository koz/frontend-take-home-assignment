import React from 'react';
import { mount, shallow } from 'enzyme';

import SavingCard from './index';
import Button from '../Button/index';

describe('<SavingCard />', () => {
  // beforeEach(() => {
  //   jest.spyOn(Storage.prototype, 'setItem');
  // });

  it('set external className', () => {
    const testClass = 'testClass';
    const wrapper = mount(
      <SavingCard iconSrc="" iconAlt="" title="" className={testClass} id="" />
    );
    expect(wrapper.hasClass(testClass)).toBe(true);
  });

  it('renders iconSrc as src for an image tag', () => {
    const iconSrc = '/path/to/icon/src';
    const wrapper = mount(
      <SavingCard iconSrc={iconSrc} iconAlt="" title="" id="" />
    );
    expect(wrapper.exists(`img[src="${iconSrc}"]`)).toBe(true);
  });

  it('renders iconAlt as alt for an image tag', () => {
    const iconAlt = 'Alt text for icon';
    const wrapper = mount(
      <SavingCard iconSrc="" iconAlt={iconAlt} title="" id="" />
    );
    expect(wrapper.exists(`img[alt="${iconAlt}"]`)).toBe(true);
  });

  it('renders title', () => {
    const title = 'Test Card Title';
    const wrapper = mount(
      <SavingCard iconSrc="" iconAlt="" title={title} id="" />
    );
    expect(wrapper.text()).toContain(title);
  });

  it('save the current data in localStorage on <Button /> component click', () => {
    const testId = '1';
    const defaultValue = 25000;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const spy = jest.spyOn(Storage.prototype, 'setItem');

    const wrapper = shallow(
      <SavingCard iconSrc="" iconAlt="" title="" id={testId} />
    );
    wrapper.find('[data-testid="button"]').simulate('click');
    expect(spy).toBeCalledWith(
      testId,
      JSON.stringify({ value: defaultValue, month, year })
    );
  });

  it('get the correct data from local storage based on id', () => {
    const testId = '1';
    const testObj = { value: 1000, year: 1000, month: 1 };
    jest.spyOn(React, 'useEffect').mockImplementation((fn: Function) => fn());
    jest.spyOn(React, 'useState').mockImplementation(() => [true, jest.fn()]);
    const spy = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => JSON.stringify(testObj));
    shallow(<SavingCard iconSrc="" iconAlt="" title="" id={testId} />);
    expect(spy).toHaveBeenCalledWith(testId);
  });
});
