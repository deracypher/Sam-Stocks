import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <div className="w-full lg:grid lg:grid-cols-3 min-h-[100vh]">
=======
    <div className="w-full lg:grid lg:grid-cols-3 min-h-[calc(100vh-52px)]">
>>>>>>> 0ee5324 (update some pages)
      {children}
    </div>
  )
}