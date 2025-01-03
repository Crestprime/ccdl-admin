import React from 'react'

interface IProps {
    children: React.ReactNode;
    loading: boolean;
    refetching?: boolean;
}

export default function LoadingAnimation({ children, loading }: IProps) {
    return (
        <>
            {!loading && (
                <div className=' w-full ' >
                    {children}
                </div>
            )}
            {loading && (
                <div className=' w-full flex py-8 justify-center items-center text-gray-900 text-lg font-bold ' >
                    Loading...
                </div>
            )}
        </>
    )
}
