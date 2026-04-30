import axiosInstance from './axios';
import { AuthResponse, RegisterData, LoginData, VerifyOTPData } from '../types';

export const authAPI = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await axiosInstance.post('/auth/register/', data);
    return response.data;
  },

  verifyOTP: async (data: VerifyOTPData): Promise<AuthResponse> => {
    const response = await axiosInstance.post('/auth/verify-otp/', data);
    return response.data;
  },

  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await axiosInstance.post('/auth/login/', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },
};
