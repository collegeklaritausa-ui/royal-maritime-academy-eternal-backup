#!/usr/bin/env python3
"""
ROUDIE MARITIME ACADEMY - MEGA COURSE GENERATOR
Generates thousands of courses with stunning comfortable design
"""

import json
import random

# Department configurations with course topics
DEPARTMENTS = {
    # HOSPITALITY DIVISION
    "front-office": {
        "icon": "🎯",
        "division": "hospitality",
        "topics": ["Guest Relations", "Check-in Systems", "VIP Welcome", "Embarkation", "Disembarkation", "Guest Communication", "Complaint Resolution", "Multicultural Service", "Digital Concierge", "Loyalty Programs"],
        "scene": "/images/departments/front-office-scene.png",
        "avatar": "/images/avatars/front-office-couple.png"
    },
    "food-beverage": {
        "icon": "🍽️",
        "division": "hospitality",
        "topics": ["Fine Dining Service", "Wine Sommelier", "Cocktail Mixology", "Buffet Management", "Room Service", "Specialty Restaurants", "Culinary Arts", "Food Safety", "Menu Design", "Beverage Pairing"],
        "scene": "/images/departments/restaurant-scene.png",
        "avatar": "/images/avatars/chef-avatar.png"
    },
    "housekeeping": {
        "icon": "🛏️",
        "division": "hospitality",
        "topics": ["Cabin Excellence", "Turndown Service", "Laundry Operations", "Suite Management", "Cleaning Standards", "Guest Amenities", "Inventory Control", "Team Leadership", "Quality Inspection", "Eco-Friendly Practices"],
        "scene": "/images/departments/cabin-scene.png",
        "avatar": "/images/avatars/housekeeping-avatar.png"
    },
    "spa-wellness": {
        "icon": "💆",
        "division": "hospitality",
        "topics": ["Massage Therapy", "Facial Treatments", "Body Treatments", "Wellness Programs", "Fitness Training", "Yoga Instruction", "Salon Services", "Spa Management", "Aromatherapy", "Hydrotherapy"],
        "scene": "/images/departments/spa-scene.png",
        "avatar": "/images/avatars/spa-avatar.png"
    },
    "concierge": {
        "icon": "🗺️",
        "division": "hospitality",
        "topics": ["Shore Excursions", "Destination Knowledge", "Travel Planning", "VIP Arrangements", "Special Requests", "Local Partnerships", "Tour Operations", "Guest Advisory", "Cultural Experiences", "Adventure Activities"],
        "scene": "/images/departments/concierge-scene.png",
        "avatar": "/images/avatars/concierge-avatar.png"
    },
    "vip-butler": {
        "icon": "👔",
        "division": "hospitality",
        "topics": ["Butler Service", "Personal Assistance", "Suite Management", "Private Dining", "Wardrobe Care", "Event Coordination", "Celebrity Service", "Royal Protocol", "Discretion Training", "Anticipatory Service"],
        "scene": "/images/departments/vip-suite-scene.png",
        "avatar": "/images/avatars/butler-avatar.png"
    },
    "retail": {
        "icon": "🛍️",
        "division": "hospitality",
        "topics": ["Luxury Sales", "Visual Merchandising", "Duty-Free Operations", "Jewelry Sales", "Fashion Retail", "Art Gallery", "Watch Sales", "Perfume Expertise", "Customer Experience", "Inventory Management"],
        "scene": "/images/departments/retail-scene.png",
        "avatar": "/images/avatars/retail-avatar.png"
    },
    
    # ENTERTAINMENT DIVISION
    "entertainment": {
        "icon": "🎭",
        "division": "entertainment",
        "topics": ["Guest Activities", "Pool Games", "Trivia Hosting", "Dance Classes", "Kids Programs", "Teen Activities", "Adult Entertainment", "Theme Nights", "Deck Parties", "Interactive Shows"],
        "scene": "/images/departments/entertainment-scene.png",
        "avatar": "/images/avatars/entertainment-avatar.png"
    },
    "casino": {
        "icon": "🎰",
        "division": "entertainment",
        "topics": ["Table Games", "Slot Operations", "Poker Tournaments", "VIP Gaming", "Casino Hospitality", "Responsible Gaming", "Cage Operations", "Surveillance", "Player Development", "Gaming Regulations"],
        "scene": "/images/departments/casino-scene.png",
        "avatar": "/images/avatars/casino-avatar.png"
    },
    "dj-music": {
        "icon": "🎧",
        "division": "entertainment",
        "topics": ["DJ Fundamentals", "Mixing Techniques", "Music Production", "Sound Engineering", "Crowd Reading", "Genre Mastery", "Equipment Setup", "Live Performance", "Music Curation", "Brand Building"],
        "scene": "/images/departments/dj-scene.png",
        "avatar": "/images/avatars/dj-avatar.png"
    },
    "event-production": {
        "icon": "🎪",
        "division": "entertainment",
        "topics": ["Event Planning", "Stage Management", "Lighting Design", "Sound Production", "Special Effects", "Venue Setup", "Talent Coordination", "Budget Management", "Timeline Planning", "Post-Event Analysis"],
        "scene": "/images/departments/event-scene.png",
        "avatar": "/images/avatars/event-avatar.png"
    },
    "theater-performance": {
        "icon": "🎬",
        "division": "entertainment",
        "topics": ["Broadway Production", "Stage Performance", "Costume Design", "Set Design", "Choreography", "Voice Training", "Acting Techniques", "Technical Theater", "Show Direction", "Audience Engagement"],
        "scene": "/images/departments/theater-scene.png",
        "avatar": "/images/avatars/theater-avatar.png"
    },
    
    # MARITIME OPERATIONS DIVISION
    "bridge-navigation": {
        "icon": "🧭",
        "division": "maritime-operations",
        "topics": ["Navigation Systems", "Bridge Procedures", "Watchkeeping", "ECDIS Operations", "Radar Navigation", "Weather Routing", "Port Maneuvering", "Emergency Procedures", "Communication Systems", "Voyage Planning"],
        "scene": "/images/departments/bridge-scene.png",
        "avatar": "/images/avatars/captain-avatar.png"
    },
    "marine-engineering": {
        "icon": "⚙️",
        "division": "maritime-operations",
        "topics": ["Engine Operations", "Propulsion Systems", "Power Generation", "HVAC Systems", "Fuel Management", "Maintenance Planning", "Automation Systems", "Emergency Response", "Environmental Systems", "Technical Management"],
        "scene": "/images/departments/engine-scene.png",
        "avatar": "/images/avatars/engineer-avatar.png"
    },
    "safety-security": {
        "icon": "🛡️",
        "division": "maritime-operations",
        "topics": ["SOLAS Compliance", "Fire Safety", "Lifeboat Operations", "Security Protocols", "Emergency Drills", "Medical Response", "Crowd Management", "Access Control", "Risk Assessment", "Crisis Management"],
        "scene": "/images/departments/safety-scene.png",
        "avatar": "/images/avatars/security-avatar.png"
    },
    "environmental": {
        "icon": "🌊",
        "division": "maritime-operations",
        "topics": ["MARPOL Compliance", "Waste Management", "Emissions Control", "Ballast Water", "Fuel Efficiency", "Shore Power", "Recycling Programs", "Environmental Auditing", "Sustainability Reporting", "Green Certifications"],
        "scene": "/images/departments/environmental-scene.png",
        "avatar": "/images/avatars/environmental-avatar.png"
    },
    "deck-operations": {
        "icon": "⚓",
        "division": "maritime-operations",
        "topics": ["Mooring Operations", "Anchor Handling", "Tender Operations", "Deck Maintenance", "Cargo Operations", "Rope Work", "Painting & Preservation", "Deck Equipment", "Safety Procedures", "Team Coordination"],
        "scene": "/images/departments/deck-scene.png",
        "avatar": "/images/avatars/deck-avatar.png"
    },
    
    # CONSTRUCTION & DESIGN DIVISION
    "naval-architecture": {
        "icon": "📐",
        "division": "construction-design",
        "topics": ["Ship Design", "Structural Engineering", "Stability Calculations", "Hull Design", "Hydrodynamics", "CAD Systems", "Classification Rules", "Material Selection", "Weight Engineering", "Design Optimization"],
        "scene": "/images/departments/naval-scene.png",
        "avatar": "/images/avatars/architect-avatar.png"
    },
    "yacht-design": {
        "icon": "🛥️",
        "division": "construction-design",
        "topics": ["Yacht Styling", "Interior Design", "Deck Layout", "Luxury Finishes", "Custom Features", "Tender Garages", "Beach Clubs", "Owner Suites", "Guest Accommodations", "Crew Quarters"],
        "scene": "/images/departments/yacht-design-scene.png",
        "avatar": "/images/avatars/yacht-designer-avatar.png"
    },
    "shipyard-management": {
        "icon": "🏗️",
        "division": "construction-design",
        "topics": ["Project Management", "Construction Planning", "Quality Control", "Supply Chain", "Workforce Management", "Safety Programs", "Cost Control", "Schedule Management", "Subcontractor Coordination", "Commissioning"],
        "scene": "/images/departments/shipyard-scene.png",
        "avatar": "/images/avatars/shipyard-avatar.png"
    },
    "sustainable-vessels": {
        "icon": "🌱",
        "division": "construction-design",
        "topics": ["Hydrogen Propulsion", "Solar Integration", "Wind Assistance", "Battery Systems", "LNG Operations", "Fuel Cells", "Carbon Neutrality", "Eco Materials", "Energy Recovery", "Green Certification"],
        "scene": "/images/departments/sustainable-scene.png",
        "avatar": "/images/avatars/sustainable-avatar.png"
    },
    "marine-systems": {
        "icon": "🔧",
        "division": "construction-design",
        "topics": ["Automation Systems", "Control Systems", "Electrical Systems", "Hydraulic Systems", "Pneumatic Systems", "Communication Systems", "Entertainment Systems", "Security Systems", "HVAC Integration", "Smart Ship Technology"],
        "scene": "/images/departments/systems-scene.png",
        "avatar": "/images/avatars/systems-avatar.png"
    },
    
    # LEADERSHIP & MANAGEMENT DIVISION
    "hotel-management": {
        "icon": "🏨",
        "division": "leadership",
        "topics": ["Hotel Operations", "Revenue Management", "Guest Satisfaction", "Staff Leadership", "Budget Planning", "Quality Standards", "Brand Management", "Crisis Leadership", "Strategic Planning", "Performance Metrics"],
        "scene": "/images/departments/hotel-scene.png",
        "avatar": "/images/avatars/hotel-director-avatar.png"
    },
    "cruise-director": {
        "icon": "🎤",
        "division": "leadership",
        "topics": ["Entertainment Leadership", "Guest Experience", "Team Management", "Show Production", "Public Speaking", "Event Coordination", "Brand Ambassador", "Social Media", "Guest Relations", "Program Development"],
        "scene": "/images/departments/cruise-director-scene.png",
        "avatar": "/images/avatars/cruise-director-avatar.png"
    },
}

LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert", "Master"]
LEVEL_COLORS = {
    "Beginner": "bg-emerald-500",
    "Intermediate": "bg-blue-500",
    "Advanced": "bg-purple-500",
    "Expert": "bg-orange-500",
    "Master": "bg-rose-500"
}

DURATIONS = {
    "Beginner": ["20 hours", "25 hours", "30 hours", "35 hours", "40 hours"],
    "Intermediate": ["35 hours", "40 hours", "45 hours", "50 hours", "55 hours"],
    "Advanced": ["50 hours", "55 hours", "60 hours", "65 hours", "70 hours"],
    "Expert": ["60 hours", "65 hours", "70 hours", "75 hours", "80 hours"],
    "Master": ["70 hours", "75 hours", "80 hours", "85 hours", "90 hours"]
}

CREDITS = {
    "Beginner": [2, 3, 4],
    "Intermediate": [3, 4, 5],
    "Advanced": [4, 5, 6],
    "Expert": [5, 6, 7],
    "Master": [6, 7, 8]
}

def generate_course_code(dept_id, level_idx, course_num):
    dept_abbr = ''.join([word[0].upper() for word in dept_id.split('-')])[:3]
    level_code = (level_idx + 1) * 100 + course_num
    return f"RMA-{dept_abbr}-{level_code}"

def generate_modules(topic, level):
    base_modules = [
        f"{topic} Fundamentals",
        f"Maritime Standards for {topic}",
        f"Safety Protocols in {topic}",
        f"Guest Service Excellence",
        f"Practical Applications"
    ]
    
    if level in ["Advanced", "Expert", "Master"]:
        base_modules.extend([
            f"Advanced {topic} Techniques",
            f"Leadership in {topic}",
            f"Innovation & Technology"
        ])
    
    if level in ["Expert", "Master"]:
        base_modules.extend([
            f"Strategic {topic} Management",
            f"Global Best Practices"
        ])
    
    return base_modules[:5 + (LEVELS.index(level))]

def generate_courses():
    courses = []
    course_id = 1001  # Start after existing 1000 courses
    
    for dept_id, dept_config in DEPARTMENTS.items():
        for level_idx, level in enumerate(LEVELS):
            # Generate 20 courses per level per department
            for i in range(20):
                topic = dept_config["topics"][i % len(dept_config["topics"])]
                
                # Create unique title variations
                title_prefixes = [
                    "Introduction to", "Fundamentals of", "Mastering", "Advanced",
                    "Professional", "Excellence in", "Strategic", "Innovative",
                    "Comprehensive", "Specialized", "Expert-Level", "Premium",
                    "Luxury", "5-Star", "World-Class", "Elite", "Executive",
                    "Certified", "International", "Modern"
                ]
                
                title_prefix = title_prefixes[(course_id + i) % len(title_prefixes)]
                
                course = {
                    "id": course_id,
                    "code": generate_course_code(dept_id, level_idx, i + 1),
                    "department": dept_id,
                    "departmentIcon": dept_config["icon"],
                    "division": dept_config["division"],
                    "level": level,
                    "levelColor": LEVEL_COLORS[level],
                    "duration": random.choice(DURATIONS[level]),
                    "credits": random.choice(CREDITS[level]),
                    "avatar": dept_config["avatar"],
                    "scene": dept_config["scene"],
                    "videoEnabled": True,
                    "chatEnabled": True,
                    "title": {
                        "en": f"{title_prefix} {topic} in {dept_id.replace('-', ' ').title()}",
                        "ar": f"[AR] {title_prefix} {topic}",
                        "de": f"[DE] {title_prefix} {topic}",
                        "fr": f"[FR] {title_prefix} {topic}",
                        "es": f"[ES] {title_prefix} {topic}",
                        "zh": f"[ZH] {title_prefix} {topic}",
                        "ru": f"[RU] {title_prefix} {topic}",
                        "pt": f"[PT] {title_prefix} {topic}"
                    },
                    "description": {
                        "en": f"A comprehensive {level.lower()} course focusing on {topic.lower()} within the {dept_id.replace('-', ' ').title()} department. Designed for maritime professionals seeking excellence in the ROUDIE CRUISES fleet."
                    },
                    "modules": generate_modules(topic, level),
                    "certification": f"{level} Certificate in {topic}",
                    "featured": i == 0 and level in ["Advanced", "Expert", "Master"],
                    "popular": random.random() > 0.8,
                    "new": random.random() > 0.9
                }
                
                courses.append(course)
                course_id += 1
    
    return courses

def main():
    print("🚢 ROUDIE MARITIME ACADEMY - MEGA COURSE GENERATOR")
    print("=" * 60)
    
    courses = generate_courses()
    
    print(f"✅ Generated {len(courses)} new courses")
    print(f"📚 Departments: {len(DEPARTMENTS)}")
    print(f"🎓 Levels: {len(LEVELS)}")
    print(f"📊 Courses per department: {len(courses) // len(DEPARTMENTS)}")
    
    # Write to TypeScript file
    output = f'''// ROUDIE MARITIME ACADEMY - MEGA COURSES DATABASE
// AUTOMATICALLY GENERATED - {len(courses)} ADDITIONAL COURSES
// Total with existing: {1000 + len(courses)} courses
// DO NOT EDIT MANUALLY

export interface MegaCourse {{
  id: number;
  code: string;
  department: string;
  departmentIcon: string;
  division: string;
  level: string;
  levelColor: string;
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
  featured: boolean;
  popular: boolean;
  new: boolean;
}}

export const megaCourses: MegaCourse[] = {json.dumps(courses, indent=2, ensure_ascii=False)};

export const megaCourseStats = {{
  totalCourses: {len(courses)},
  departments: {len(DEPARTMENTS)},
  levels: {len(LEVELS)},
  coursesPerDepartment: {len(courses) // len(DEPARTMENTS)},
  divisions: ["hospitality", "entertainment", "maritime-operations", "construction-design", "leadership"]
}};
'''
    
    with open('/home/ubuntu/royal-maritime-academy-eternal-backup/client/src/data/megaCourses.ts', 'w') as f:
        f.write(output)
    
    print(f"✅ Written to megaCourses.ts")
    print("🎉 MEGA COURSE GENERATION COMPLETE!")

if __name__ == "__main__":
    main()
