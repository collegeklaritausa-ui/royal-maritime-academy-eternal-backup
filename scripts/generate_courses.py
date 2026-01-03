import json
import random

# Configuration
DEPARTMENTS = [
    {'id': 'front-office', 'name': 'Front Office & Reception', 'icon': '🎯', 'code': 'FO'},
    {'id': 'food-beverage', 'name': 'Food & Beverage Service', 'icon': '🍽️', 'code': 'FB'},
    {'id': 'housekeeping', 'name': 'Housekeeping & Cabin Services', 'icon': '🛏️', 'code': 'HK'},
    {'id': 'entertainment', 'name': 'Entertainment & Activities', 'icon': '🎭', 'code': 'EN'},
    {'id': 'spa-wellness', 'name': 'Spa & Wellness', 'icon': '💆', 'code': 'SW'},
    {'id': 'concierge', 'name': 'Concierge & Shore Excursions', 'icon': '🗺️', 'code': 'CO'},
    {'id': 'casino', 'name': 'Casino & Gaming Services', 'icon': '🎰', 'code': 'CA'},
    {'id': 'retail', 'name': 'Retail & Boutique Operations', 'icon': '🛍️', 'code': 'RT'},
    {'id': 'vip-butler', 'name': 'VIP & Butler Services', 'icon': '👔', 'code': 'VB'},
    {'id': 'safety-security', 'name': 'Guest Safety & Security', 'icon': '🛡️', 'code': 'SS'},
]

LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master']

LANGUAGES = {
    'en': 'English',
    'ar': 'Arabic',
    'de': 'German',
    'fr': 'French',
    'es': 'Spanish',
    'zh': 'Chinese',
    'ru': 'Russian',
    'pt': 'Portuguese'
}

# Topic templates for generation
TOPICS = {
    'front-office': ['Guest Relations', 'Check-in Systems', 'VIP Protocols', 'Complaint Handling', 'Night Audit', 'Concierge Skills', 'Language Skills', 'Cultural Awareness', 'Emergency Response', 'Team Leadership'],
    'food-beverage': ['Fine Dining', 'Wine Service', 'Mixology', 'Food Safety', 'Menu Knowledge', 'Table Setting', 'Buffet Management', 'Room Service', 'Barista Skills', 'Inventory Control'],
    'housekeeping': ['Cabin Cleaning', 'Laundry Operations', 'Turndown Service', 'Chemical Safety', 'Public Area Care', 'Inspection Standards', 'Linen Management', 'Pest Control', 'Flower Arrangement', 'Butler Support'],
    'entertainment': ['Stage Management', 'Sound & Light', 'Activity Hosting', 'Kids Club', 'Dance Instruction', 'Event Planning', 'Public Speaking', 'Safety Drills', 'Costume Care', 'Talent Coordination'],
    'spa-wellness': ['Massage Therapy', 'Facial Treatments', 'Fitness Training', 'Sales Techniques', 'Reception Skills', 'Hygiene Standards', 'Product Knowledge', 'Holistic Health', 'Yoga Instruction', 'Salon Services'],
    'concierge': ['Destination Knowledge', 'Tour Booking', 'Problem Solving', 'VIP Services', 'Port Operations', 'Local Customs', 'Transportation', 'Dining Reservations', 'Special Requests', 'Map Reading'],
    'casino': ['Dealer Skills', 'Slot Operations', 'Cashiering', 'Surveillance', 'Responsible Gaming', 'VIP Hosting', 'Game Protection', 'Customer Service', 'Regulatory Compliance', 'Equipment Maintenance'],
    'retail': ['Sales Techniques', 'Visual Merchandising', 'Product Knowledge', 'Inventory Management', 'Luxury Brands', 'Duty Free Rules', 'Loss Prevention', 'Customer Service', 'Cash Handling', 'Promotions'],
    'vip-butler': ['Valet Services', 'Wardrobe Care', 'Fine Dining Service', 'Suite Preparation', 'Guest Preferences', 'Etiquette', 'Packing/Unpacking', 'Shoe Polishing', 'Beverage Service', 'Anticipatory Service'],
    'safety-security': ['Fire Safety', 'Crowd Control', 'First Aid', 'ISPS Code', 'Patrol Procedures', 'Investigation', 'Access Control', 'Emergency Drills', 'Risk Assessment', 'Conflict Resolution']
}

# Simple translation dictionary (simulated for demo purposes - in production would use an API)
TRANSLATIONS = {
    'Course': {'ar': 'دورة', 'de': 'Kurs', 'fr': 'Cours', 'es': 'Curso', 'zh': '课程', 'ru': 'Курс', 'pt': 'Curso'},
    'Level': {'ar': 'مستوى', 'de': 'Stufe', 'fr': 'Niveau', 'es': 'Nivel', 'zh': '级别', 'ru': 'Уровень', 'pt': 'Nível'},
    'Management': {'ar': 'إدارة', 'de': 'Management', 'fr': 'Gestion', 'es': 'Gestión', 'zh': '管理', 'ru': 'Управление', 'pt': 'Gestão'},
    'Advanced': {'ar': 'متقدم', 'de': 'Fortgeschritten', 'fr': 'Avancé', 'es': 'Avanzado', 'zh': '高级', 'ru': 'Продвинутый', 'pt': 'Avançado'},
    'Basics': {'ar': 'أساسيات', 'de': 'Grundlagen', 'fr': 'Bases', 'es': 'Fundamentos', 'zh': '基础', 'ru': 'Основы', 'pt': 'Fundamentos'},
}

def generate_title(dept_name, topic, level, lang):
    prefix = ""
    suffix = ""
    
    if level == 'Beginner':
        prefix = "Introduction to "
    elif level == 'Intermediate':
        prefix = "Intermediate "
    elif level == 'Advanced':
        prefix = "Advanced "
    elif level == 'Expert':
        prefix = "Expert "
    elif level == 'Master':
        prefix = "Master Class: "
        
    base_title = f"{prefix}{topic} in {dept_name}"
    
    # Simulate translation for other languages
    if lang == 'en':
        return base_title
    else:
        # For demo, we append the language code to show it's a "translation"
        # In a real scenario, we'd use a translation library
        return f"[{lang.upper()}] {base_title}"

def generate_courses():
    courses = []
    course_id = 1
    
    # We need 1000 courses total
    # 10 departments * 100 courses per department
    
    for dept in DEPARTMENTS:
        dept_topics = TOPICS[dept['id']]
        
        # Generate 100 courses for this department
        for i in range(100):
            level_idx = i // 20 # 0-19 Beginner, 20-39 Intermediate, etc.
            level = LEVELS[level_idx]
            topic = dept_topics[i % len(dept_topics)]
            
            # Create multi-language titles
            titles = {}
            for lang_code in LANGUAGES.keys():
                titles[lang_code] = generate_title(dept['name'], topic, level, lang_code)
            
            course = {
                'id': course_id,
                'code': f"RMA-{dept['code']}-{100 + i}",
                'department': dept['id'],
                'departmentIcon': dept['icon'],
                'level': level,
                'duration': f"{30 + (level_idx * 10)} hours",
                'credits': 3 + level_idx,
                'avatar': f"/images/avatars/{dept['id']}-couple.png",
                'scene': f"/images/departments/{dept['id']}-scene.png" if i % 2 == 0 else f"/images/scenery/academy-building.png",
                'videoEnabled': True,
                'chatEnabled': True,
                'title': titles,
                'description': {
                    'en': f"A comprehensive {level.lower()} course focusing on {topic.lower()} within the {dept['name']} department. Designed for maritime professionals seeking excellence."
                },
                'modules': [
                    f"{topic} Fundamentals",
                    f"Maritime Standards for {topic}",
                    f"Safety Protocols in {topic}",
                    f"Guest Service Excellence",
                    f"Practical Applications"
                ],
                'certification': f"{level} Certificate in {topic}"
            }
            
            courses.append(course)
            course_id += 1
            
    return courses

if __name__ == "__main__":
    all_courses = generate_courses()
    
    # Write to a TypeScript file for the frontend
    ts_content = f"""
// The Royal Supreme AI Augmented Maritime Academy
// AUTOMATICALLY GENERATED - 1000 COURSES
// DO NOT EDIT MANUALLY

export interface Course {{
  id: number;
  code: string;
  department: string;
  departmentIcon: string;
  level: string;
  duration: string;
  credits: number;
  avatar: string;
  scene: string;
  videoEnabled: boolean;
  chatEnabled: boolean;
  title: {{ [key: string]: string }};
  description: {{ en: string }};
  modules: string[];
  certification: string;
}}

export const allCourses: Course[] = {json.dumps(all_courses, indent=2)};
"""
    
    with open('/home/ubuntu/royal-maritime-academy/client/src/data/allCourses.ts', 'w') as f:
        f.write(ts_content)
        
    print(f"Successfully generated {len(all_courses)} courses in /home/ubuntu/royal-maritime-academy/client/src/data/allCourses.ts")
