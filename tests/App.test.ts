import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import App from '../src/App.vue'
import * as auth0 from '@auth0/auth0-vue';
import { log } from 'console';
vi.mock('@auth0/auth0-vue')

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
      isAuthenticated: false,
      logout: vi.fn(),
      loginWithRedirect: vi.fn()
    });
    wrapper = mount(App);
  })

  describe('Layout', () => {
    
    it('has a login button', () => {
      expect(wrapper.find('#loginButton').text()).toBe('Login');
    }) 
    
    it('has a logout button when user is logged in', () => {
      (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
        isAuthenticated: true,
        logout: vi.fn(),
        loginWithRedirect: vi.fn()
      });
      wrapper = mount(App);
      expect(wrapper.find('#logoutButton').text()).toBe('Logout');
    })
    
  })
  
  describe('Functionality', () => {
    
    it("has 'login' method", () => {
      expect(wrapper.vm.login).toBeTypeOf('function');
    })
    
    it("has 'logout' method", () => {
      expect(wrapper.vm.logout).toBeTypeOf('function');
    })
  })
  
  describe('Interactions', () => {
    
    describe('click login button', () => {
      
      it('calls login method', async () => {
        const loginSpy = vi.spyOn(wrapper.vm, 'login');
        await wrapper.find('#loginButton').trigger('click');
        expect(loginSpy).toHaveBeenCalled();
      })
      
    })
    
    describe('click logout button', () => {
      
      it("calls 'logout' method", async () => {
        (auth0 as any).useAuth0 = vi.fn().mockReturnValue({
          isAuthenticated: true,
          logout: vi.fn(),
          loginWithRedirect: vi.fn()
        });
        wrapper = mount(App);
        const logoutSpy = vi.spyOn(wrapper.vm, 'logout');
        await wrapper.find('#logoutButton').trigger('click');
        expect(logoutSpy).toHaveBeenCalled();
      })

    })

  })

})