"use client"

import React, { useEffect, useState } from 'react'
import { NavUserProps } from '../nav-user';

export default function Welcome({ user }: {user: NavUserProps}) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
        // Format today's date
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        setCurrentDate(today.toLocaleDateString('en-US', options));
  }, []);

  // Determine greeting based on time of day
  const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
  };

    return (
        <div className="p-6 shadow-sm bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold">
                    {getGreeting()}, {user.name}!
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                    <p className="text-lg opacity-90">
                        Role: <span className="font-semibold capitalize">{user.role}</span>
                    </p>
                    <div className="hidden sm:block text-white opacity-60">•</div>
                    <p className="text-lg opacity-90">{currentDate}</p>
                </div>
            </div>
        </div>
    );
}
