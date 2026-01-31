import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import Link from "next/link";


export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/20 to-grey-900 relative overflow-hidden">
            {/* animated bacground Blobs */}
            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 -96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div> */}

            {/* Main Content */}
            <div className="relative z-10 flex item-center justify-center min-h-screen px-4 pt-120">
                <div className="max-w-5xl w-full text-center space-y-8">

                    {/* welcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full text-sm text-gray-300 mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4 text-green-400" />
                        <span>Welcome to my portfolio</span>
                    </div>
                    
                    {/* main heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold animate-fade-in-up">
                        <span className="block text-white mb-4">Building Digital</span>
                        <span className="block bg-gradient-to-r from-white-400 to-green-400 to-black-400 bg-clip-text text-transparent">Experiences</span>
                    </h1>

                    {/* subtitle */}
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-faded-in-up animation-delay-200">
                        Full-stack developer crafting beautiful, functional web applications with
                        modern technologies and creative solutions. <br />

                    </p>

                    {/* feature tags */}
                    <div className="flex flex-wrap justify-center gap-5 pt-4 animate-fade-in-up animation-delay-400">

                        <div className="dlex items-center gap-2 px-4 py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Code className="w-5 h-5 text-blue-400" />
                            <span className="text-gray-300">Clean Code</span>
                        </div>
                        <div className="dlex items-center gap-2 px-4 py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Zap className="w-5 h-5 text-yellow-400"/>
                            <span className="text-gray-300">Fast Performance</span>
                        </div>
                        <div className="dlex items-center gap-2 px-4 py-2 bg-purple-500/10 border-pink-500/20 rounded-lg">
                            <Sparkles className="w-5 h-5 text-green-400"/>
                            <span className="yext-gray-300">Modern Design</span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animte-fade-on-up animation-delay-600">
                        {/* primary button */}
                        <Link href="/projects"
                            className="relative px-8 py-4 bg-gradient-to-r from-black-500 to-green-500 te-black-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                                <span className="relative z-10 flex items-center gap-2">
                                    View My Work
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 "></div>
                        </Link>

                        {/* secondary link */}
                        <Link href="/contact" 
                            className="group px-8 py-4 bg-white/5 backdrop-blur-lg border-2 border-white/10 text-white font-semibold rounded-xl hover:border-white/20 transition-all">
                            <span className="relative z-10 flex items-center gap-2">
                                Connect with me
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </span>
                        </Link>
                    </div>

                    {/* scroll indicator */}
                    <div className="pt-16 animate-fade-in animation-delay-800">
                        <div className="inline-flex flex-col items-center gap-2 text-gray-500 animate-bounce">
                            <span className="text-sm">Scroll to exploroe</span>
                            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
                                <div className="w-1 h-3 bg-gray-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
