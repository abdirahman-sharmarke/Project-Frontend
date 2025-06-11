'use client';

import React from 'react';

// Base skeleton component with animation
const SkeletonBase = ({ className = '', children }: { className?: string; children?: React.ReactNode }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
    {children}
  </div>
);

// Text skeleton
export const SkeletonText = ({ lines = 1, className = '' }: { lines?: number; className?: string }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBase 
        key={i} 
        className={`h-4 ${i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}`} 
      />
    ))}
  </div>
);

// Avatar skeleton
export const SkeletonAvatar = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  return <SkeletonBase className={`${sizeClasses[size]} rounded-full ${className}`} />;
};

// Card skeleton
export const SkeletonCard = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-200 ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <SkeletonBase className="h-10 w-10 rounded-lg" />
      </div>
      <SkeletonBase className="h-6 w-16 rounded-full" />
    </div>
    <div className="space-y-2">
      <SkeletonBase className="h-8 w-20" />
      <SkeletonBase className="h-4 w-24" />
    </div>
  </div>
);

// Stats card skeleton
export const SkeletonStatsCard = ({ className = '' }: { className?: string }) => (
  <SkeletonCard className={className} />
);

// Activity item skeleton
export const SkeletonActivityItem = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <SkeletonAvatar size="md" />
    <div className="flex-1 space-y-2">
      <SkeletonBase className="h-4 w-3/4" />
      <SkeletonBase className="h-3 w-20" />
    </div>
  </div>
);

// Task item skeleton
export const SkeletonTaskItem = ({ className = '' }: { className?: string }) => (
  <div className={`border-l-4 border-gray-200 pl-4 space-y-2 ${className}`}>
    <div className="flex items-center justify-between">
      <SkeletonBase className="h-4 w-48" />
      <SkeletonBase className="h-5 w-12 rounded-full" />
    </div>
    <SkeletonBase className="h-3 w-16" />
    <SkeletonBase className="h-3 w-20" />
  </div>
);

// Quick action skeleton
export const SkeletonQuickAction = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center p-4 rounded-lg border border-gray-200 ${className}`}>
    <SkeletonBase className="h-12 w-12 rounded-lg mb-2" />
    <SkeletonBase className="h-4 w-16" />
  </div>
);

// Chart skeleton
export const SkeletonChart = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}>
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <SkeletonBase className="h-6 w-40" />
        <SkeletonBase className="h-8 w-32 rounded-lg" />
      </div>
    </div>
    <div className="p-6">
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="flex items-end space-x-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBase 
              key={i} 
              className={`w-8 bg-gray-300 ${i % 2 === 0 ? 'h-32' : 'h-24'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Header skeleton
export const SkeletonHeader = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white border-b border-gray-200 p-4 ${className}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SkeletonBase className="h-6 w-6 lg:hidden" />
        <div className="flex-1 max-w-lg mx-4">
          <SkeletonBase className="h-10 w-full rounded-lg" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SkeletonBase className="h-10 w-10 rounded-lg" />
        <div className="flex items-center space-x-3">
          <SkeletonAvatar size="sm" />
          <div className="hidden md:block space-y-1">
            <SkeletonBase className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Sidebar skeleton
export const SkeletonSidebar = ({ className = '' }: { className?: string }) => (
  <div className={`w-64 bg-white border-r border-gray-200 ${className}`}>
    <div className="flex flex-col h-full">
      {/* Logo skeleton */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <SkeletonBase className="h-8 w-8 rounded-xl" />
          <SkeletonBase className="h-6 w-24" />
        </div>
      </div>

      {/* Navigation skeleton */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3 px-3 py-2">
            <SkeletonBase className="h-5 w-5" />
            <SkeletonBase className="h-4 w-20" />
            {i === 2 || i === 3 ? <SkeletonBase className="h-3 w-3 ml-auto" /> : null}
          </div>
        ))}
      </nav>

      {/* Footer skeleton */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <SkeletonAvatar size="sm" />
          <div className="flex-1 space-y-1">
            <SkeletonBase className="h-4 w-20" />
            <SkeletonBase className="h-3 w-32" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Welcome section skeleton
export const SkeletonWelcome = ({ className = '' }: { className?: string }) => (
  <div className={`bg-gradient-to-r from-gray-300 to-gray-400 rounded-2xl p-8 animate-pulse ${className}`}>
    <div className="flex items-center justify-between">
      <div className="space-y-4">
        <SkeletonBase className="h-8 w-64 bg-gray-200" />
        <SkeletonBase className="h-5 w-80 bg-gray-200" />
      </div>
      <div className="text-right space-y-2">
        <SkeletonBase className="h-4 w-20 bg-gray-200" />
        <SkeletonBase className="h-6 w-16 bg-gray-200" />
        <SkeletonBase className="h-4 w-24 bg-gray-200" />
      </div>
    </div>
  </div>
);

// Dashboard page skeleton
export const SkeletonDashboard = () => (
  <div className="space-y-8">
    {/* Welcome Section */}
    <SkeletonWelcome />

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonStatsCard key={i} />
      ))}
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Recent Activity */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <SkeletonBase className="h-6 w-32" />
          </div>
          <div className="p-6 space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonActivityItem key={i} />
            ))}
          </div>
          <div className="px-6 py-3 bg-gray-50 rounded-b-xl">
            <SkeletonBase className="h-4 w-32" />
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="space-y-6">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <SkeletonBase className="h-6 w-28" />
          </div>
          <div className="p-6 space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonTaskItem key={i} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <SkeletonBase className="h-6 w-24" />
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonQuickAction key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Performance Chart */}
    <SkeletonChart />
  </div>
);

// Loading wrapper component
export const LoadingSkeleton = ({ 
  type = 'dashboard', 
  className = '' 
}: { 
  type?: 'dashboard' | 'header' | 'sidebar' | 'card' | 'text' | 'chart' | 'welcome';
  className?: string;
}) => {
  switch (type) {
    case 'dashboard':
      return <SkeletonDashboard />;
    case 'header':
      return <SkeletonHeader className={className} />;
    case 'sidebar':
      return <SkeletonSidebar className={className} />;
    case 'card':
      return <SkeletonCard className={className} />;
    case 'text':
      return <SkeletonText className={className} />;
    case 'chart':
      return <SkeletonChart className={className} />;
    case 'welcome':
      return <SkeletonWelcome className={className} />;
    default:
      return <SkeletonDashboard />;
  }
};

export default LoadingSkeleton;
