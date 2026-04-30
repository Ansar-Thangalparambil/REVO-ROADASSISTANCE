import axiosInstance from './axios';
import { Service, ServiceCategory } from '../types';

export const servicesAPI = {
  getCategories: async (): Promise<ServiceCategory[]> => {
    const response = await axiosInstance.get('/services/categories/');
    return response.data;
  },

  getServices: async (params?: {
    category?: string;
    search?: string;
    ordering?: string;
  }): Promise<Service[]> => {
    const response = await axiosInstance.get('/services/', { params });
    return response.data.results || response.data;
  },

  getService: async (id: string): Promise<Service> => {
    const response = await axiosInstance.get(`/services/${id}/`);
    return response.data;
  },
};
