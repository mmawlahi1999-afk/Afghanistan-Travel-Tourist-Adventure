// دیتاست ترجمه
const translations = {
    // Page Title
    'page-title': { 
        en: 'Afghanistan Travel Tourist Adventure | Your Gateway to Afghanistan\'s Beauty', 
        fa: 'Afghanistan Travel Tourist Adventure | سفیران سفر - دروازه شما به زیبایی‌های افغانستان' 
    },
    // Navigation
    'home-link': { en: 'Home', fa: 'صفحه اصلی' },
    'tours-link': { en: 'Tours', fa: 'تورها و مسیرها' },
    'heritage-link': { en: 'Heritage', fa: 'میراث و فرهنگ' },
    'gallery-link': { en: 'Gallery', fa: 'گالری' },
    'safety-link': { en: 'Safety Guide', fa: 'راهنمای سفر' },
    'contact-link': { en: 'Contact', fa: 'تماس با ما' },
    
    // Hero
    'hero-heading': { en: 'Experience the Undiscovered Beauty of Afghanistan', fa: 'زیبایی‌های کشف نشده افغانستان را تجربه کنید' },
    'hero-paragraph': { en: 'Secure journey to the heart of history and pristine nature, from Band-e Amir to Bala Hissar and Pamir Badakhshan.', fa: 'سفری مطمئن به قلب تاریخ و طبیعت بکر، از بند امیر تا بالاحصار و پامیر بدخشان.' },
    'cta-button': { en: 'Book Your Tour Now', fa: 'تور خود را رزرو کنید' },

    // Features
    'features-heading': { en: 'Distinguishing Features of Afghanistan Travel Tourist Adventure', fa: 'ویژگی‌های متمایز Afghanistan Travel Tourist Adventure' },
    'feature-1-title': { en: 'Rich Cultural Heritage', fa: 'میراث فرهنگی غنی' },
    'feature-1-text': { en: 'Visit UNESCO heritage sites and ancient attractions with local expert guides.', fa: 'بازدید از میراث یونسکو و جاذبه‌های باستانی با راهنمایان متخصص محلی.' },
    'feature-2-title': { en: 'Custom Tour Builder', fa: 'ساخت تور سفارشی' },
    'feature-2-text': { en: 'Design your own itinerary based on personal interests (trekking, historical, culinary).', fa: 'برنامه سفر خود را بر اساس علاقه شخصی (کوهنوردی، تاریخی، غذا) بسازید.' },
    'feature-3-title': { en: 'Safety & Guidance', fa: 'امنیت و راهنمایی کامل' },
    'feature-3-text': { en: 'Up-to-date safety information and 24/7 support throughout your journey.', fa: 'اطلاعات به‌روز ایمنی و پشتیبانی ۲۴/۷ در طول سفر.' },

    // Tours
    'featured-tours-heading': { en: 'Featured Special Tours', fa: 'تورهای پیشنهادی ویژه' },
    'tour-1-title': { en: 'The Ancient Route of Balkh & Herat', fa: 'مسیر باستانی بلخ و هرات' },
    'tour-1-text': { en: 'A 10-day journey for lovers of Islamic architecture and ancient history.', fa: 'سفری ۱۰ روزه برای عاشقان معماری اسلامی و تاریخ کهن.' },
    'tour-2-title': { en: 'Nature of Bamyan & Band-e Amir', fa: 'طبیعت بکر بامیان و بند امیر' },
    'tour-2-text': { en: '5 days of adventure in the Baba Mountains and turquoise lakes.', fa: '۵ روز ماجراجویی در کوه‌های بابا و دریاچه‌های فیروزه‌ای.' },
    'tour-3-title': { en: 'Pamir & Badakhshan Expedition', fa: 'صعود به پامیر و کوهستان بدخشان' },
    'tour-3-text': { en: 'An 8-day trip for climbers to discover challenging routes.', fa: 'سفری ۸ روزه برای کوهنوردان و کشف مسیرهای صعب‌العبور.' },
    
    // Links
    'tour-details-1': { en: 'View Details', fa: 'جزئیات بیشتر' },
    'tour-details-2': { en: 'View Details', fa: 'جزئیات بیشتر' },
    'tour-details-3': { en: 'View Details', fa: 'جزئیات بیشتر' },

    // Why Us
    'why-us-heading': { en: 'Why Travel with Afghanistan Travel Tourist Adventure?', fa: 'چرا با Afghanistan Travel Tourist Adventure سفر کنیم؟' },
    'why-us-text': { en: 'We offer not just a tour, but an unforgettable experience from the heart of Afghanistan\'s culture and history.', fa: 'ما نه تنها یک تور، بلکه یک تجربه فراموش نشدنی از قلب فرهنگ و تاریخ افغانستان را به شما ارائه می‌دهیم.' },

    // Footer
    'about-us-link': { en: 'About Us', fa: 'درباره ما' },
    'privacy-link': { en: 'Privacy Policy', fa: 'حریم خصوصی' },
    'faq-link': { en: 'FAQ', fa: 'سوالات متداول' }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const htmlTag = document.querySelector('html');
    const bodyTag = document.querySelector('body');

    // تابع آپدیت محتوا
    const updateContent = (lang) => {
        // تغییر تایتل
        document.title = translations['page-title'][lang];

        // تغییر جهت و کلاس بادی
        if (lang === 'fa') {
            htmlTag.setAttribute('lang', 'fa');
            htmlTag.setAttribute('dir', 'rtl');
            bodyTag.classList.add('rtl'); // اضافه کردن کلاس راست‌چین
            langBtn.textContent = 'English (EN)';
            langBtn.setAttribute('data-lang', 'en');
        } else {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
            bodyTag.classList.remove('rtl'); // حذف کلاس راست‌چین
            langBtn.textContent = 'فارسی (FA)';
            langBtn.setAttribute('data-lang', 'fa');
        }

        // ترجمه تمام المنت‌ها
        for (const key in translations) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[key][lang];
            }
        }
    };

    // کلیک روی دکمه
    langBtn.addEventListener('click', () => {
        const nextLang = langBtn.getAttribute('data-lang');
        updateContent(nextLang);
    });
});






// ... ادامه ترجمه‌های قبلی ...

    // ترجمه‌های صفحه Tours
    'tours-page-title': { en: 'Tours & Routes | Afghanistan Travel Tourist Adventure', fa: 'تورها و مسیرها | Afghanistan Travel Tourist Adventure' },
    'tours-hero-title': { en: 'Explore Our Exclusive Journeys', fa: 'سفرهای اختصاصی ما را کاوش کنید' },
    'tours-hero-text': { en: 'Choose your path through history, nature, and adventure.', fa: 'مسیر خود را از میان تاریخ، طبیعت و ماجراجویی انتخاب کنید.' },
    
    // تور ۱
    'tour-pkg-1-title': { en: 'The Ancient Silk Road: Balkh & Herat', fa: 'جاده ابریشم باستان: بلخ و هرات' },
    'tour-pkg-1-desc': { en: 'Dive deep into the Islamic Golden Age. Visit the Blue Mosque, the Citadel of Herat.', fa: 'غرق در دوران طلایی اسلامی شوید. بازدید از مسجد کبود و ارگ هرات.' },
    
    // تور ۲
    'tour-pkg-2-title': { en: 'Bamyan & Band-e Amir National Park', fa: 'بامیان و پارک ملی بند امیر' },
    'tour-pkg-2-desc': { en: 'Experience the serenity of the turquoise lakes and the historical significance of the Buddha niches.', fa: 'آرامش دریاچه‌های فیروزه‌ای و عظمت طاقچه‌های بودا را تجربه کنید.' },

    // تور ۳
    'tour-pkg-3-title': { en: 'Wakhan Corridor & Pamir Expedition', fa: 'اکسپدیشن واخان و پامیر' },
    'tour-pkg-3-desc': { en: 'A once-in-a-lifetime trekking experience to the "Roof of the World".', fa: 'یک تجربه کوهنوردی تکرار نشدنی به بام دنیا.' },

    // تور ۴
    'tour-pkg-4-title': { en: 'Kabul City Highlights', fa: 'دیدنی‌های شهر کابل' },
    'tour-pkg-4-desc': { en: 'Visit Babur Gardens, the National Museum, and the bird market.', fa: 'بازدید از باغ بابر، موزیم ملی و کوچه کاه فروشی.' },
    // ... ادامه ترجمه‌های قبلی ...

    // Heritage Page
    'heritage-page-title': { en: 'Heritage & Culture | Afghanistan Travel Tourist Adventure', fa: 'میراث و فرهنگ | Afghanistan Travel Tourist Adventure' },
    'heritage-hero-title': { en: 'Guardians of History', fa: 'حافظان تاریخ' },
    'heritage-hero-text': { en: 'A journey through 5,000 years of civilization, art, and poetry.', fa: 'سفری در دل ۵۰۰۰ سال تمدن، هنر و شعر.' },
    
    'heritage-intro-heading': { en: 'The Crossroads of Asia', fa: 'چهارراه آسیا' },
    'heritage-intro-text': { en: 'Afghanistan has been a focal point of the Silk Road for centuries. From the Greek influence in Balkh to the Islamic architecture of Herat.', fa: 'افغانستان قرن‌ها نقطه کانونی جاده ابریشم بوده است. از نفوذ یونانیان در بلخ تا معماری اسلامی هرات.' },

    // Sites
    'site-1-title': { en: 'Minaret of Jam', fa: 'منار جام' },
    'site-1-subtitle': { en: 'UNESCO World Heritage', fa: 'میراث جهانی یونسکو' },
    'site-1-desc': { en: 'Standing at 65 meters tall in a remote valley of Ghor province, this 12th-century masterpiece is renowned for its intricate brickwork.', fa: 'این شاهکار قرن دوازدهمی با ارتفاع ۶۵ متر در دره‌ای دورافتاده در ولایت غور ایستاده و به خاطر آجرکاری پیچیده‌اش مشهور است.' },

    'site-2-title': { en: 'Citadel of Herat', fa: 'ارگ هرات' },
    'site-2-subtitle': { en: 'The Heart of Khurasan', fa: 'قلب خراسان' },
    'site-2-desc': { en: 'Also known as Qala Ikhtyaruddin, this imposing fortress dates back to Alexander the Great.', fa: 'این قلعه باشکوه که به قلعه اختیارالدین نیز معروف است، قدمتی به دوران اسکندر مقدونی دارد.' },

    'site-3-title': { en: 'Bamyan Cultural Landscape', fa: 'چشم‌انداز فرهنگی بامیان' },
    'site-3-subtitle': { en: 'Art of Gandhara', fa: 'هنر گندهارا' },
    'site-3-desc': { en: 'The Bamyan Valley represents the artistic and religious developments characterized by ancient Bakhtria.', fa: 'دره بامیان نمایانگر تحولات هنری و مذهبی است که مشخصه باختر باستان بوده است.' },

    // Culture
    'culture-heading': { en: 'Living Traditions', fa: 'سنت‌های زنده' },
    'culture-1-title': { en: 'Afghan Carpets', fa: 'قالین افغانی' },
    'culture-1-text': { en: 'World-renowned for their quality and complex geometric patterns.', fa: 'شهرت جهانی به خاطر کیفیت و نقش‌های هندسی پیچیده.' },

    'culture-2-title': { en: 'Hospitality & Cuisine', fa: 'مهمان‌نوازی و غذا' },
    'culture-2-text': { en: 'From Kabuli Pulao to Mantu, Afghan food is a celebration.', fa: 'از قابلی پلو تا منتو، غذای افغانی یک جشن است.' },

    'culture-3-title': { en: 'Poetry & Literature', fa: 'شعر و ادب' },
    'culture-3-text': { en: 'The land of Rumi, Rabia Balkhi, and Jami.', fa: 'سرزمین مولانا، رابعه بلخی و جامی.' },
    // ... ادامه ترجمه‌های قبلی ...

    // Gallery Page
    'gallery-page-title': { en: '3D Gallery | Afghanistan Travel Tourist Adventure', fa: 'گالری سه‌بعدی | Afghanistan Travel Tourist Adventure' },
    'gallery-hero-title': { en: 'Visual Journey', fa: 'سفر بصری' },
    'gallery-hero-text': { en: 'Experience Afghanistan through the lens of our travelers and professional photographers.', fa: 'افغانستان را از دید مسافران و عکاسان حرفه‌ای تجربه کنید.' },
    
    'gallery-section-heading': { en: 'Photo Collection', fa: 'مجموعه عکس‌ها' },
    'video-section-heading': { en: 'Featured Videos', fa: 'ویدیوهای برگزیده' },

    // Captions
    'photo-1-caption': { en: 'Bamyan Valley', fa: 'دره بامیان' },
    'photo-2-caption': { en: 'Band-e Amir Lakes', fa: 'دریاچه‌های بند امیر' },
    'photo-3-caption': { en: 'Blue Mosque, Mazar', fa: 'مسجد کبود مزار' },
    'photo-4-caption': { en: 'Herat Citadel', fa: 'ارگ هرات' },
    'photo-5-caption': { en: 'Pamir Mountains', fa: 'کوه‌های پامیر' },
    'photo-6-caption': { en: 'Kabul City View', fa: 'منظره شهر کابل' },
    
    'video-1-caption': { en: 'Documentary: The Beauty of Badakhshan', fa: 'مستند: زیبایی بدخشان' },
    'video-2-caption': { en: 'A Quick Tour of Herat\'s History', fa: 'تور سریع تاریخ هرات' },

    // ... ادامه ترجمه‌های قبلی ...

    // Safety Guide Page
    'safety-page-title': { en: 'Safety Guide & Travel Tips | Afghanistan Travel Tourist Adventure', fa: 'راهنمای سفر و امنیت | Afghanistan Travel Tourist Adventure' },
    'safety-hero-title': { en: 'Your Safety Is Our Priority', fa: 'امنیت شما اولویت ماست' },
    'safety-hero-text': { en: 'Essential tips and guidelines for a secure and informed journey.', fa: 'نکات و دستورالعمل‌های ضروری برای سفری امن و آگاهانه.' },
    
    // Q&A
    'safety-q1-title': { en: 'Is it safe to travel to Afghanistan right now?', fa: 'آیا سفر به افغانستان در حال حاضر امن است؟' },
    'safety-q1-answer': { en: 'We closely monitor the security situation. Our tours strictly follow approved routes and we use professional, vetted security escorts.', fa: 'ما وضعیت امنیتی را به دقت زیر نظر داریم. تورهای ما مسیرهای تأیید شده را دنبال می‌کنند و از اسکورت‌های امنیتی حرفه‌ای استفاده می‌کنیم.' },

    'safety-q2-title': { en: 'What are the Visa and Documentation requirements?', fa: 'الزامات ویزا و مدارک چیست؟' },
    'safety-q2-answer': { en: 'A valid passport and a Tourist Visa are mandatory. We will provide all necessary invitation letters and assist you with the application process.', fa: 'گذرنامه معتبر و ویزای توریستی الزامی است. ما نامه‌های دعوت‌نامه لازم را ارائه کرده و شما را در فرآیند درخواست یاری می‌کنیم.' },

    'safety-q3-title': { en: 'Do I need specific Travel Insurance?', fa: 'آیا به بیمه مسافرتی خاصی نیاز دارم؟' },
    'safety-q3-answer': { en: 'Yes. Comprehensive travel insurance covering medical emergencies and emergency repatriation is mandatory for all our travelers.', fa: 'بله. بیمه مسافرتی جامع که اورژانس‌های پزشکی و بازگشت اضطراری را پوشش دهد، برای همه مسافران ما الزامی است.' },

    'safety-q4-title': { en: 'What is the recommended dress code and cultural etiquette?', fa: 'کد لباس و آداب فرهنگی توصیه شده چیست؟' },
    'safety-q4-answer': { en: 'We strongly advise modesty. For women, a headscarf and long, loose-fitting clothing are required. For men, long trousers are expected.', fa: 'ما به شدت پوشش محتاطانه را توصیه می‌کنیم. برای خانم‌ها روسری و لباس‌های گشاد و بلند الزامی است. برای آقایان شلوارهای بلند انتظار می‌رود.' },
    
    'safety-q5-title': { en: 'Where will we stay and what transport is used?', fa: 'محل اقامت و حمل و نقل چگونه است؟' },
    'safety-q5-answer': { en: 'We use highly-rated, secure guesthouses and hotels in designated safe areas. All ground transportation is private and driven by experienced local drivers.', fa: 'ما از مهمان‌خانه‌ها و هتل‌های ایمن و دارای رتبه بالا در مناطق امن استفاده می‌کنیم. تمام حمل و نقل زمینی خصوصی و توسط رانندگان حرفه‌ای انجام می‌شود.' },

    'safety-q6-title': { en: 'What are the emergency contact procedures?', fa: 'روش‌های تماس اضطراری چیست؟' },
    'safety-q6-answer': { en: 'You will have a direct 24/7 line to your local guide and our operations manager. The full emergency contact list will be provided upon arrival.', fa: 'شما یک خط ۲۴/۷ مستقیم به راهنمای محلی و مدیر عملیات ما خواهید داشت. لیست کامل تماس‌های اضطراری در هنگام ورود ارائه می‌شود.' },
    
    // Notice Box
    'notice-heading': { en: '⚠️ Important Note on Flexibility', fa: '⚠️ نکته مهم در مورد انعطاف‌پذیری' },
    'notice-text': { en: 'Tour itineraries may change at short notice due to local security assessments. We ask for your patience and full cooperation with your guide, whose decisions are final regarding safety protocols.', fa: 'برنامه‌های سفر ممکن است به دلیل ارزیابی‌های امنیتی محلی در کوتاه‌مدت تغییر کنند. ما از شما می‌خواهیم که با راهنمای خود همکاری کامل داشته باشید، زیرا تصمیمات آن‌ها در مورد پروتکل‌های ایمنی نهایی است.' },

    // ... ادامه ترجمه‌های قبلی ...

    // Contact Page
    'contact-page-title': { en: 'Contact Us | Afghanistan Travel Tourist Adventure', fa: 'تماس با ما | Afghanistan Travel Tourist Adventure' },
    'contact-hero-title': { en: 'Let\'s Plan Your Journey', fa: 'بیایید سفر شما را برنامه‌ریزی کنیم' },
    'contact-hero-text': { en: 'We are here to answer your questions and customize your Afghan adventure.', fa: 'ما برای پاسخگویی به سوالات شما و شخصی‌سازی ماجراجویی‌تان آماده‌ایم.' },
    
    'form-heading': { en: 'Send Us a Quick Message', fa: 'یک پیام سریع برای ما بفرستید' },
    'form-name-label': { en: 'Your Name', fa: 'نام شما' },
    'form-email-label': { en: 'Your Email', fa: 'ایمیل شما' },
    'form-subject-label': { en: 'Subject', fa: 'موضوع' },
    'form-message-label': { en: 'Your Message', fa: 'پیام شما' },
    'form-submit-btn': { en: 'Send Message', fa: 'ارسال پیام' },
    'form-backend-note': { en: 'Note: This form requires server-side integration to send emails.', fa: 'توجه: این فرم برای ارسال ایمیل به ادغام سمت سرور نیاز دارد.' },

    'direct-contact-heading': { en: 'Direct Contact Information', fa: 'اطلاعات تماس مستقیم' },
    'detail-email': { en: 'Email:', fa: 'ایمیل:' },
    'detail-phone': { en: 'Phone/WhatsApp:', fa: 'تلفن/واتساپ:' },
    'detail-address': { en: 'Address:', fa: 'آدرس:' },
    
    'team-heading': { en: 'Meet the Founder', fa: 'با مؤسس آشنا شوید' },
    'team-name': { en: 'YOUR NAME HERE', fa: 'نام شما اینجا' },
    'team-title': { en: 'YOUR TITLE (e.g., Lead Guide & Operations Manager)', fa: 'عنوان شما (مثلاً: راهنمای ارشد و مدیر عملیات)' },
    'team-quote': { en: '"We believe in responsible tourism that benefits local communities and preserves heritage."', fa: '"ما به گردشگری مسئولانه‌ای باور داریم که به نفع جوامع محلی باشد و میراث فرهنگی را حفظ کند."' },

