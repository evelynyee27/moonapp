"use client";
import { useNavigate } from "react-router";

const Button = (
    { label, url }: { label: string, url: string }) => {
    let navigate = useNavigate();

    return (
        <div>
            <button 
            onClick={() => navigate(`${url}`, {viewTransition: true})}
            className="relative border-white border bg-blue-950 cursor-pointer hover:bg-transparent text-white text-center py-2 px-6 m-2 rounded-3xl">{label}</button>
        </div>
    );
}

export default Button