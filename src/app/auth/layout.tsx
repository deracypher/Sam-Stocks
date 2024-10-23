import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="w-full lg:grid lg:grid-cols-3 min-h-[100vh]">
=======
    <div className="w-full lg:grid lg:grid-cols-3 min-h-[calc(100vh-52px)]">
>>>>>>> 0ee5324 (update some pages)
=======
    <div className="w-full lg:grid lg:grid-cols-3 min-h-[calc(100vh-52px)]">
>>>>>>> 133fd70 (fixed unused varaibles)
      {children}
    </div>
  )
}