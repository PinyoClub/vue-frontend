import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '../src/App.vue'

describe('Welcome to vitest', () => {
  it('...first test', () => {
    let wrapper = mount(App);
    expect(wrapper).toBeTruthy();
  })
})