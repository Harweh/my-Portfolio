import { Code2, Zap, Lightbulb, Heart } from 'lucide-react';
import Image from 'next/image';
import Me from '@/app/about/dv.avif'
// import { FaReact } from 'react-icons/fa';
// import { SiNextdotjs } from 'react-icons/si';
// import { SiTailwindcss } from 'react-icons/si';
// import { SiTypescript } from 'react-icons/si';
// import { SiCss3 } from 'react-icons/si';



export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-5xl font-bold text-white">
                About Me
                </h1>
                <p className="text-xl md:text-1xl text-gray-400 max-w-3xl mx-auto">
                I transform visionary ideas into functional applications and working software. Whether it's crafting 
                sleek front-end interfaces, developing robust back-end systems, or integrating APIs and databases.
                if it interacts with users or fuels a sserver, I've likely built and developed it with precision and flair.
                </p>
            </div>
            </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-black-500 to-green-500 rounded-2xl">

                        <Image className='w-full  aspect-square ' 


                        src="/dv.avif"
                        alt ="this is an image"
                        width = {300}
                        height={100}
                        quality={0}
        
                    />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-0"></div>

                
                </div>

                {/* Text Side */}
                <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-green-400 to-black bg-clip-text text-transparent">Awe Emmanuel Oluwatobi</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    I'm a full-stack developer with a passion for creating beautiful, 
                    functional web applications. With expertise in the MERN stack, 
                    I bring ideas to life through clean code and intuitive design.
                </p>
                {/* <p className="text-gray-400 text-lg leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source, or sharing knowledge with the developer community.
                </p> */}

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center">
                    <div className="text-3xl font-bold text-white">2+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-white">2+</div>
                    <div className="text-gray-400 text-sm">Projects Done</div>
                    </div>
                    <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
                What I Do
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
                <p className="text-gray-400">
                    <div className="flex gap-4">
                        {/* <FaReact className="text-4xl text-blue-400" />
                        <SiNextdotjs className="text-4xl text-black dark:text-white" /> */}
                    </div>

                </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                <p className="text-gray-400">
                    Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-400">
                    Designing intuitive and beautiful user experiences that delight users and achieve business goals.
                </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                    <p className="text-gray-400">
                        Tackling complex challenges with creative solutions and a focus on clean, maintainable code.
                    </p>
                </div>

                {/* Card 4
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Heart className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                    <p className="text-gray-400">
                        Tackling complex challenges with creative solutions and a focus on clean, maintainable code.
                    </p>
                </div> */}

            </div>
            </div>
        </section>
        </div>
    );
}
