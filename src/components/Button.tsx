"use client";

const Button = ({ label }: { label: string }) => {
    return (
        <div>
            <button className="absolute border-white border bg-radial from-blue-600 to-blue-900 cursor-pointer hover:bg-transparent text-white text-center py-2 px-6 m-2 rounded-3xl">{label}</button>
        </div>
    );
}

export default Button