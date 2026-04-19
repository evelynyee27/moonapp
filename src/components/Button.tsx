"use client";

const Button = ({ label }: { label: string }) => {
    return (
        <div>
            <button className="relative border-white border bg-blue-950 cursor-pointer hover:bg-transparent text-white text-center py-2 px-6 m-2 rounded-3xl">{label}</button>
        </div>
    );
}

export default Button