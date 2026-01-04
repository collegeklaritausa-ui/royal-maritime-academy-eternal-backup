// ROUDIE MARITIME ACADEMY - EXPANDED DEPARTMENTS
// 25 Departments with Thousands of Courses

export interface Department {
  id: string;
  name: { [key: string]: string };
  icon: string;
  division: string;
  description: string;
  courseCount: number;
}

export const expandedDepartments: Department[] = [
  // ═══════════════════════════════════════════════════════════════
  // HOSPITALITY DIVISION
  // ═══════════════════════════════════════════════════════════════
  { id: 'front-office', name: { en: 'Front Office & Reception', ar: 'مكتب الاستقبال', de: 'Rezeption', fr: 'Réception', es: 'Recepción', zh: '前台接待', ru: 'Ресепшн', pt: 'Recepção' }, icon: '🎯', division: 'hospitality', description: 'Guest check-in, embarkation, and first impressions', courseCount: 100 },
  { id: 'food-beverage', name: { en: 'Food & Beverage Service', ar: 'خدمة الأغذية والمشروبات', de: 'Speisen & Getränke', fr: 'Restauration', es: 'Alimentos y Bebidas', zh: '餐饮服务', ru: 'Питание', pt: 'Alimentos e Bebidas' }, icon: '🍽️', division: 'hospitality', description: 'Fine dining, bars, and culinary excellence', courseCount: 100 },
  { id: 'housekeeping', name: { en: 'Housekeeping & Cabin Services', ar: 'خدمة الغرف', de: 'Housekeeping', fr: 'Housekeeping', es: 'Housekeeping', zh: '客房服务', ru: 'Хаускипинг', pt: 'Housekeeping' }, icon: '🛏️', division: 'hospitality', description: 'Cabin excellence and guest comfort', courseCount: 100 },
  { id: 'spa-wellness', name: { en: 'Spa & Wellness', ar: 'السبا والعافية', de: 'Spa & Wellness', fr: 'Spa & Bien-être', es: 'Spa y Bienestar', zh: '水疗健康', ru: 'Спа и Велнес', pt: 'Spa e Bem-estar' }, icon: '💆', division: 'hospitality', description: 'Luxury spa treatments and wellness programs', courseCount: 100 },
  { id: 'concierge', name: { en: 'Concierge & Shore Excursions', ar: 'الكونسيرج والرحلات', de: 'Concierge', fr: 'Conciergerie', es: 'Conserjería', zh: '礼宾服务', ru: 'Консьерж', pt: 'Concierge' }, icon: '🗺️', division: 'hospitality', description: 'Guest services and destination experiences', courseCount: 100 },
  { id: 'vip-butler', name: { en: 'VIP & Butler Services', ar: 'خدمات كبار الشخصيات', de: 'VIP-Service', fr: 'Service VIP', es: 'Servicio VIP', zh: 'VIP管家', ru: 'VIP-сервис', pt: 'Serviço VIP' }, icon: '👔', division: 'hospitality', description: 'Ultra-luxury personal service', courseCount: 100 },
  { id: 'retail', name: { en: 'Retail & Boutique Operations', ar: 'البيع بالتجزئة', de: 'Einzelhandel', fr: 'Boutiques', es: 'Tiendas', zh: '零售精品', ru: 'Розница', pt: 'Varejo' }, icon: '🛍️', division: 'hospitality', description: 'Luxury retail and duty-free operations', courseCount: 100 },
  
  // ═══════════════════════════════════════════════════════════════
  // ENTERTAINMENT DIVISION
  // ═══════════════════════════════════════════════════════════════
  { id: 'entertainment', name: { en: 'Entertainment & Guest Activities', ar: 'الترفيه والأنشطة', de: 'Unterhaltung', fr: 'Divertissement', es: 'Entretenimiento', zh: '娱乐活动', ru: 'Развлечения', pt: 'Entretenimento' }, icon: '🎭', division: 'entertainment', description: 'Shows, performances, and guest activities', courseCount: 100 },
  { id: 'casino', name: { en: 'Casino & Gaming Services', ar: 'الكازينو والألعاب', de: 'Casino', fr: 'Casino', es: 'Casino', zh: '赌场服务', ru: 'Казино', pt: 'Cassino' }, icon: '🎰', division: 'entertainment', description: 'Gaming operations and hospitality', courseCount: 100 },
  { id: 'dj-music', name: { en: 'DJ & Music Production', ar: 'دي جي وإنتاج الموسيقى', de: 'DJ & Musikproduktion', fr: 'DJ & Production Musicale', es: 'DJ y Producción Musical', zh: 'DJ与音乐制作', ru: 'DJ и музыкальное производство', pt: 'DJ e Produção Musical' }, icon: '🎧', division: 'entertainment', description: 'Professional DJ skills and music entertainment', courseCount: 100 },
  { id: 'event-production', name: { en: 'Event Production & Management', ar: 'إنتاج وإدارة الفعاليات', de: 'Eventproduktion', fr: 'Production d\'Événements', es: 'Producción de Eventos', zh: '活动制作与管理', ru: 'Организация мероприятий', pt: 'Produção de Eventos' }, icon: '🎪', division: 'entertainment', description: 'Large-scale event planning and execution', courseCount: 100 },
  { id: 'theater-performance', name: { en: 'Theater & Live Performance', ar: 'المسرح والعروض الحية', de: 'Theater & Live-Performance', fr: 'Théâtre & Spectacles', es: 'Teatro y Espectáculos', zh: '剧院与现场表演', ru: 'Театр и живые выступления', pt: 'Teatro e Espetáculos' }, icon: '🎬', division: 'entertainment', description: 'Broadway-style shows and live entertainment', courseCount: 100 },

  // ═══════════════════════════════════════════════════════════════
  // MARITIME OPERATIONS DIVISION
  // ═══════════════════════════════════════════════════════════════
  { id: 'bridge-navigation', name: { en: 'Bridge & Navigation', ar: 'الجسر والملاحة', de: 'Brücke & Navigation', fr: 'Passerelle & Navigation', es: 'Puente y Navegación', zh: '驾驶台与航海', ru: 'Мостик и навигация', pt: 'Ponte e Navegação' }, icon: '🧭', division: 'maritime-operations', description: 'Ship command and navigation systems', courseCount: 100 },
  { id: 'marine-engineering', name: { en: 'Marine Engineering', ar: 'الهندسة البحرية', de: 'Schiffstechnik', fr: 'Ingénierie Maritime', es: 'Ingeniería Marina', zh: '轮机工程', ru: 'Судовая инженерия', pt: 'Engenharia Marítima' }, icon: '⚙️', division: 'maritime-operations', description: 'Engine room operations and maintenance', courseCount: 100 },
  { id: 'safety-security', name: { en: 'Safety & Security', ar: 'الأمن والسلامة', de: 'Sicherheit', fr: 'Sécurité', es: 'Seguridad', zh: '安全保障', ru: 'Безопасность', pt: 'Segurança' }, icon: '🛡️', division: 'maritime-operations', description: 'Maritime safety and security protocols', courseCount: 100 },
  { id: 'environmental', name: { en: 'Environmental Compliance', ar: 'الامتثال البيئي', de: 'Umweltkonformität', fr: 'Conformité Environnementale', es: 'Cumplimiento Ambiental', zh: '环境合规', ru: 'Экологическое соответствие', pt: 'Conformidade Ambiental' }, icon: '🌊', division: 'maritime-operations', description: 'Sustainability and environmental regulations', courseCount: 100 },
  { id: 'deck-operations', name: { en: 'Deck Operations', ar: 'عمليات السطح', de: 'Deckbetrieb', fr: 'Opérations de Pont', es: 'Operaciones de Cubierta', zh: '甲板作业', ru: 'Палубные операции', pt: 'Operações de Convés' }, icon: '⚓', division: 'maritime-operations', description: 'Deck crew and mooring operations', courseCount: 100 },

  // ═══════════════════════════════════════════════════════════════
  // CONSTRUCTION & DESIGN DIVISION
  // ═══════════════════════════════════════════════════════════════
  { id: 'naval-architecture', name: { en: 'Naval Architecture', ar: 'الهندسة المعمارية البحرية', de: 'Schiffbauarchitektur', fr: 'Architecture Navale', es: 'Arquitectura Naval', zh: '船舶设计', ru: 'Морская архитектура', pt: 'Arquitetura Naval' }, icon: '📐', division: 'construction-design', description: 'Ship design and structural engineering', courseCount: 100 },
  { id: 'yacht-design', name: { en: 'Yacht Design & Interiors', ar: 'تصميم اليخوت والديكور', de: 'Yachtdesign & Interieur', fr: 'Design de Yachts', es: 'Diseño de Yates', zh: '游艇设计与内饰', ru: 'Дизайн яхт и интерьеров', pt: 'Design de Iates' }, icon: '🛥️', division: 'construction-design', description: 'Luxury yacht design and interior styling', courseCount: 100 },
  { id: 'shipyard-management', name: { en: 'Shipyard Management', ar: 'إدارة أحواض السفن', de: 'Werftmanagement', fr: 'Gestion de Chantier Naval', es: 'Gestión de Astilleros', zh: '船厂管理', ru: 'Управление верфью', pt: 'Gestão de Estaleiros' }, icon: '🏗️', division: 'construction-design', description: 'Shipbuilding operations and project management', courseCount: 100 },
  { id: 'sustainable-vessels', name: { en: 'Sustainable Vessel Technology', ar: 'تقنية السفن المستدامة', de: 'Nachhaltige Schiffstechnologie', fr: 'Technologie Navale Durable', es: 'Tecnología de Buques Sostenibles', zh: '可持续船舶技术', ru: 'Устойчивые судовые технологии', pt: 'Tecnologia de Navios Sustentáveis' }, icon: '🌱', division: 'construction-design', description: 'Eco-friendly and hydrogen-powered vessels', courseCount: 100 },
  { id: 'marine-systems', name: { en: 'Marine Systems Integration', ar: 'تكامل الأنظمة البحرية', de: 'Marine Systemintegration', fr: 'Intégration des Systèmes Marins', es: 'Integración de Sistemas Marinos', zh: '船舶系统集成', ru: 'Интеграция морских систем', pt: 'Integração de Sistemas Marítimos' }, icon: '🔧', division: 'construction-design', description: 'Advanced ship systems and automation', courseCount: 100 },

  // ═══════════════════════════════════════════════════════════════
  // LEADERSHIP & MANAGEMENT DIVISION
  // ═══════════════════════════════════════════════════════════════
  { id: 'hotel-management', name: { en: 'Hotel Director & Management', ar: 'إدارة الفنادق', de: 'Hotelmanagement', fr: 'Direction Hôtelière', es: 'Dirección Hotelera', zh: '酒店管理', ru: 'Гостиничный менеджмент', pt: 'Gestão Hoteleira' }, icon: '🏨', division: 'leadership', description: 'Cruise ship hotel operations leadership', courseCount: 100 },
  { id: 'cruise-director', name: { en: 'Cruise Director Programs', ar: 'برامج مدير الرحلات', de: 'Kreuzfahrtdirektor', fr: 'Directeur de Croisière', es: 'Director de Cruceros', zh: '邮轮总监', ru: 'Директор круиза', pt: 'Diretor de Cruzeiros' }, icon: '🎤', division: 'leadership', description: 'Guest experience and entertainment leadership', courseCount: 100 },
];

export const divisions = [
  { id: 'hospitality', name: 'Hospitality Division', icon: '🏆', color: 'gold' },
  { id: 'entertainment', name: 'Entertainment Division', icon: '🎭', color: 'purple' },
  { id: 'maritime-operations', name: 'Maritime Operations Division', icon: '⚓', color: 'navy' },
  { id: 'construction-design', name: 'Construction & Design Division', icon: '🏗️', color: 'steel' },
  { id: 'leadership', name: 'Leadership & Management Division', icon: '👔', color: 'royal' },
];

export const totalCourseCount = expandedDepartments.reduce((sum, dept) => sum + dept.courseCount, 0);
// Total: 2,500 courses across 25 departments
