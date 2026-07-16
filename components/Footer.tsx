import { FaSquareGithub } from "react-icons/fa6";

export default function Footer(){
    return (
        <footer className="mt-auto border-t border-gray-200 px-6 py-8">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
                <p className="text-gray-600">© {new Date().getFullYear()} Spencer Delimas. All rights reserved</p>
                <div className="flex gap-6 ">
                    {/* <a href="https://github.com/Its-delimas" target="_blank" className="hover:text-white hover:scale-150">
                        <FaSquareGithub /> 
                    </a> */}
                </div>
            </div>
        </footer>
    )
}