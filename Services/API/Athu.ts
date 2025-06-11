// Authentication API Service
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://abdi-production.up.railway.app/api';

// TypeScript interfaces
export interface User {
  id: number;
  fullName: string;
  email: string;
  isActive: boolean;
  age?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

// Token management
export const tokenManager = {
  setToken: (token: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  },

  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  },

  removeToken: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
    }
  },

  setUser: (user: User): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_data', JSON.stringify(user));
    }
  },

  getUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user_data');
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  },

  isAuthenticated: (): boolean => {
    return !!tokenManager.getToken();
  }
};

// HTTP client with error handling
class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = tokenManager.getToken();

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          // If parsing JSON fails, use default error message
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error instanceof Error ? error : new Error('Network error occurred');
    }
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'GET',
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

// Create API client instance
const apiClient = new ApiClient();

// Authentication service
export const authService = {
  /**
   * Register a new user
   */
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>('/users/register', userData);
      
      if (response.success && response.data.token) {
        // Store token and user data
        tokenManager.setToken(response.data.token);
        tokenManager.setUser(response.data.user);
      }
      
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Registration failed');
    }
  },

  /**
   * Login user
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>('/users/login', credentials);
      
      if (response.success && response.data.token) {
        // Store token and user data
        tokenManager.setToken(response.data.token);
        tokenManager.setUser(response.data.user);
      }
      
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  },

  /**
   * Logout user
   */
  logout(): void {
    tokenManager.removeToken();
  },

  /**
   * Get current user data
   */
  getCurrentUser(): User | null {
    return tokenManager.getUser();
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return tokenManager.isAuthenticated();
  },

  /**
   * Get user profile (requires authentication)
   */
  async getProfile(): Promise<User> {
    try {
      const response = await apiClient.get<{ success: boolean; data: User }>('/users/profile');
      return response.data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to fetch profile');
    }
  },

  /**
   * Update user profile
   */
  async updateProfile(userData: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.put<{ success: boolean; data: User }>('/users/profile', userData);
      
      if (response.success) {
        // Update stored user data
        tokenManager.setUser(response.data);
      }
      
      return response.data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update profile');
    }
  },

  /**
   * Refresh token if needed
   */
  async refreshToken(): Promise<string> {
    try {
      const response = await apiClient.post<{ success: boolean; data: { token: string } }>('/users/refresh-token');
      
      if (response.success && response.data.token) {
        tokenManager.setToken(response.data.token);
        return response.data.token;
      }
      
      throw new Error('Token refresh failed');
    } catch (error) {
      // If refresh fails, logout user
      this.logout();
      throw new Error(error instanceof Error ? error.message : 'Token refresh failed');
    }
  },

  /**
   * Validate token
   */
  async validateToken(): Promise<boolean> {
    try {
      const token = tokenManager.getToken();
      if (!token) return false;

      await apiClient.get('/users/validate-token');
      return true;
    } catch (error) {
      // If validation fails, remove invalid token
      tokenManager.removeToken();
      return false;
    }
  }
};

// Hook for React components (optional - for future use)
export const useAuth = () => {
  return {
    user: authService.getCurrentUser(),
    isAuthenticated: authService.isAuthenticated(),
    login: authService.login,
    register: authService.register,
    logout: authService.logout,
    updateProfile: authService.updateProfile,
  };
};

// Export everything
export default authService;
export { apiClient };
