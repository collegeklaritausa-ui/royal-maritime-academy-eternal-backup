/*
 * ROUDIE MARITIME ACADEMY - Stunning Courses Grid
 * Luxurious, comfortable display of thousands of courses
 * Premium filtering and search experience
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, Sparkles, GraduationCap, Ship, Anchor } from 'lucide-react';
import StunningCourseCard from './StunningCourseCard';
import { megaCourses, megaCourseStats } from '@/data/megaCourses';
import { allCourses } from '@/data/allCourses';
import { useLanguage } from '@/contexts/LanguageContext';

const divisions = [
  { id: 'all', name: 'All Divisions', icon: '🌟', color: 'from-amber-400 to-yellow-500' },
  { id: 'hospitality', name: 'Hospitality', icon: '🏆', color: 'from-emerald-400 to-teal-500' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎭', color: 'from-purple-400 to-violet-500' },
  { id: 'maritime-operations', name: 'Maritime Operations', icon: '⚓', color: 'from-blue-400 to-indigo-500' },
  { id: 'construction-design', name: 'Construction & Design', icon: '🏗️', color: 'from-orange-400 to-amber-500' },
  { id: 'leadership', name: 'Leadership', icon: '👔', color: 'from-rose-400 to-pink-500' },
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];

export default function StunningCoursesGrid() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(24);

  // Combine all courses
  const allCoursesData = useMemo(() => {
    const existingCourses = allCourses.map(c => ({
      ...c,
      division: 'hospitality',
      levelColor: '',
      featured: false,
      popular: false,
      new: false,
    }));
    return [...existingCourses, ...megaCourses];
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return allCoursesData.filter(course => {
      const matchesSearch = searchQuery === '' || 
        course.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.department.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDivision = selectedDivision === 'all' || course.division === selectedDivision;
      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      
      return matchesSearch && matchesDivision && matchesLevel;
    });
  }, [allCoursesData, searchQuery, selectedDivision, selectedLevel]);

  const displayedCourses = filteredCourses.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCourses.length;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            ROUDIE MARITIME ACADEMY
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600">
              Explore Our Courses
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-6">
            Discover {allCoursesData.length.toLocaleString()}+ world-class maritime courses across {megaCourseStats.departments + 10} departments
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span className="font-bold text-slate-700">{allCoursesData.length.toLocaleString()}</span>
              <span className="text-slate-500">Courses</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md">
              <Ship className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-slate-700">{megaCourseStats.departments + 10}</span>
              <span className="text-slate-500">Departments</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md">
              <Anchor className="w-5 h-5 text-purple-500" />
              <span className="font-bold text-slate-700">5</span>
              <span className="text-slate-500">Divisions</span>
            </div>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-slate-100"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses, departments, or codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all duration-300 text-slate-700 placeholder-slate-400"
            />
          </div>

          {/* Division Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {divisions.map((division) => (
              <motion.button
                key={division.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDivision(division.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedDivision === division.id
                    ? `bg-gradient-to-r ${division.color} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{division.icon}</span>
                <span>{division.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Level Filters & View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <motion.button
                  key={level}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedLevel === level
                      ? 'bg-slate-800 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level}
                </motion.button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-6"
        >
          <p className="text-slate-500">
            Showing <span className="font-bold text-slate-700">{displayedCourses.length}</span> of{' '}
            <span className="font-bold text-slate-700">{filteredCourses.length.toLocaleString()}</span> courses
          </p>
        </motion.div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${selectedDivision}-${selectedLevel}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}
          >
            {displayedCourses.map((course, index) => (
              <StunningCourseCard 
                key={course.id} 
                course={course} 
                language={language}
                index={index % 12}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Load More Courses ({filteredCourses.length - visibleCount} remaining)
            </motion.button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
