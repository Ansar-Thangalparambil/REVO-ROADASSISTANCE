export interface User {
  id: string;
  phone: string;
  email?: string;
  role: 'CUSTOMER' | 'PROVIDER' | 'VENDOR' | 'ADMIN';
  is_verified: boolean;
  preferred_language: string;
  created_at: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    tokens: {
      access: string;
      refresh: string;
    };
  };
}

export interface RegisterData {
  phone: string;
  password: string;
  email?: string;
  role?: 'CUSTOMER' | 'PROVIDER' | 'VENDOR';
  preferred_language?: string;
}

export interface LoginData {
  phone: string;
  password: string;
}

export interface VerifyOTPData {
  phone: string;
  otp_code: string;
}

export interface Vehicle {
  id: string;
  model: VehicleModel;
  year: number;
  color: string;
  plate_number: string;
  vin?: string;
  is_default: boolean;
  created_at: string;
}

export interface VehicleModel {
  id: string;
  make: VehicleMake;
  name: string;
  slug: string;
  vehicle_type: VehicleType;
  year_start: number;
  year_end?: number;
}

export interface VehicleMake {
  id: string;
  name: string;
  slug: string;
  logo?: string;
}

export interface VehicleType {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Service {
  id: string;
  provider: ProviderProfile;
  category: ServiceCategory;
  title: string;
  description: string;
  base_price: string;
  max_price?: string;
  is_home_deliverable: boolean;
  avg_duration_minutes: number;
  rating: string;
  total_bookings: number;
  is_active: boolean;
  created_at: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  parent?: string;
  subcategories?: ServiceCategory[];
}

export interface ProviderProfile {
  user: User;
  bio: string;
  years_experience: number;
  certifications: Certification[];
  mentor?: {
    id: string;
    phone: string;
    rating: number;
  };
  is_mobile: boolean;
  coverage_radius_km: string;
  latitude?: string;
  longitude?: string;
  availability_status: 'ONLINE' | 'BUSY' | 'OFFLINE';
  rating: string;
  total_jobs: number;
  created_at: string;
}

export interface Certification {
  id: string;
  name: string;
  issuing_authority: string;
  description?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
