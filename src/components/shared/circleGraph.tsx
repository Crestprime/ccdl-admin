
const CircularProgressBar = ({ progress, size = 67, strokeWidth = 10 }: { progress: any, size?: number, strokeWidth?: number, isEvent?: boolean, fontSize?: string  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className=' w-fit relative ' >
            <div className=' w-full h-full absolute inset-0 flex justify-center items-center ' > 
                <p className=' text-[8px] ' >{progress}%</p>
            </div>
            <svg
                width={size}
                height={size}
                style={{ transform: 'rotate(-90deg)' }} // Rotate to start at the top
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#5465E0"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default CircularProgressBar;
