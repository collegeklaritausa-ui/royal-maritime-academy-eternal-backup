/*
 * ROUDIE MARITIME ACADEMY - Stunning Course Card Component
 * Ultra-comfortable luxury design with smooth animations
 * Premium visual experience for maritime professionals
 */

import { motion } from 'framer-motion';
import { Clock, Award, Star, Play, MessageCircle, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

interface CourseCardProps {
  course: {
    id: number;
    code: string;
    department: string;
    departmentIcon: string;
    level: string;
    levelColor?: string;
    duration: string;
    credits: number;
    avatar?: string;
    scene?: string;
    videoEnabled?: boolean;
    chatEnabled?: boolean;
    title: { [key: string]: string };
    description: { en: string };
    modules?: string[];
    certification?: string;
    featured?: boolean;
    popular?: boolean;
    new?: boolean;
  };
  language?: string;
  index?: number;
}

const levelGradients: { [key: string]: string } = {
  'Beginner': 'from-emerald-400 via-emerald-500 to-teal-600',
  'Intermediate': 'from-blue-400 via-blue-500 to-indigo-600',
  'Advanced': 'from-purple-400 via-purple-500 to-violet-600',
  'Expert': 'from-orange-400 via-orange-500 to-amber-600',
  'Master': 'from-rose-400 via-rose-500 to-pink-600',
};

const levelShadows: { [key: string]: string } = {
  'Beginner': 'shadow-emerald-500/20',
  'Intermediate': 'shadow-blue-500/20',
  'Advanced': 'shadow-purple-500/20',
  'Expert': 'shadow-orange-500/20',
  'Master': 'shadow-rose-500/20',
};

export default function StunningCourseCard({ course, language = 'en', index = 0 }: CourseCardProps) {
  const levelGradient = levelGradients[course.level] || levelGradients['Beginner'];
  const levelShadow = levelShadows[course.level] || levelShadows['Beginner'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${levelGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Main Card */}
      <div className={`relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl ${levelShadow} hover:shadow-2xl transition-all duration-500 border border-white/50`}>
        
        {/* Badges Row */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex gap-2">
            {course.featured && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs font-bold shadow-lg"
              >
                <Star className="w-3 h-3 fill-current" />
                Featured
              </motion.span>
            )}
            {course.new && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold shadow-lg"
              >
                <Sparkles className="w-3 h-3" />
                New
              </motion.span>
            )}
            {course.popular && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white text-xs font-bold shadow-lg"
              >
                <TrendingUp className="w-3 h-3" />
                Popular
              </motion.span>
            )}
          </div>
          
          {/* Level Badge */}
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${levelGradient} text-white text-xs font-bold shadow-lg`}
          >
            {course.level}
          </motion.span>
        </div>

        {/* Card Header with Gradient */}
        <div className={`relative h-36 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtMnYtMmgydi0yaDJ2MmgydjJoLTJ2Mmgydjh6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse" />
          </div>
          
          {/* Department Icon */}
          <div className="absolute bottom-4 left-6">
            <motion.span 
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-5xl drop-shadow-2xl"
            >
              {course.departmentIcon}
            </motion.span>
          </div>
          
          {/* Course Code */}
          <div className="absolute bottom-4 right-6">
            <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm text-white/80 text-sm font-mono">
              {course.code}
            </span>
          </div>
          
          {/* Decorative Gradient Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/95 to-transparent`} />
        </div>

        {/* Card Content */}
        <div className="p-6 pt-2">
          {/* Title */}
          <h3 className="font-display text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 transition-all duration-300">
            {course.title[language] || course.title.en}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
            {course.description.en}
          </p>

          {/* Meta Info Row */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="font-medium">{course.credits} Credits</span>
            </div>
          </div>

          {/* Features Row */}
          <div className="flex items-center gap-3 mb-4">
            {course.videoEnabled && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-medium">
                <Play className="w-3 h-3" />
                Video
              </div>
            )}
            {course.chatEnabled && (
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-medium">
                <MessageCircle className="w-3 h-3" />
                AI Chat
              </div>
            )}
          </div>

          {/* Certification */}
          {course.certification && (
            <div className="text-xs text-amber-600 font-medium bg-amber-50 px-3 py-2 rounded-lg">
              🎓 {course.certification}
            </div>
          )}
        </div>

        {/* Hover Overlay with CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Link href={`/course/${course.id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${levelGradient} text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              Enroll Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
