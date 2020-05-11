import React from 'react';
import PageLayout from './index';
import { mount } from 'enzyme';

describe('<PageLayout />', () => {
  it('should render children', () => {
    const id = 'testId';
    const wrapper = mount(
      <PageLayout>
        <div id={id}>teste</div>
      </PageLayout>
    );
    expect(wrapper.exists(`div[id="${id}"]`)).toBe(true);
  });
});
