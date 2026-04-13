// ============================================
// PYTHON MASTERY ACADEMY — Application Logic
// ============================================

(function() {
    'use strict';

    // --- State Management ---
    const state = {
        currentSection: 'home',
        currentModuleId: null,
        currentLessonId: null,
        completedLessons: JSON.parse(localStorage.getItem('pma_completed') || '[]'),
        theme: localStorage.getItem('pma_theme') || 'dark',
        lang: localStorage.getItem('pma_lang') || 'en',
        sidebarOpen: true
    };

    // --- i18n Helper: Get active course data based on language ---
    function getActiveData() {
        if (state.lang === 'vi' && typeof COURSE_DATA_VI !== 'undefined') {
            // Merge VI data with EN fallback for lessons without VI content
            const viModules = COURSE_DATA_VI.modules.map(viModule => {
                const enModule = COURSE_DATA.modules.find(m => m.id === viModule.id);
                const lessons = viModule.lessons.map(viLesson => {
                    if (viLesson.content) return viLesson;
                    // Fallback to English content
                    const enLesson = enModule ? enModule.lessons.find(l => l.id === viLesson.id) : null;
                    return enLesson ? { ...viLesson, content: enLesson.content } : viLesson;
                });
                return { ...viModule, lessons };
            });
            return { ...COURSE_DATA_VI, modules: viModules };
        }
        return COURSE_DATA;
    }

    // --- Translate static UI elements ---
    function translateUI() {
        const t = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.en;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key]) el.textContent = t[key];
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (t[key]) el.placeholder = t[key];
        });

        // Update nav links
        const navMap = { home: 'navHome', curriculum: 'navCurriculum', lessons: 'navLessons', progress: 'navProgress' };
        dom.navLinks.forEach(link => {
            const section = link.dataset.section;
            if (navMap[section] && t[navMap[section]]) {
                link.textContent = t[navMap[section]];
            }
        });

        // Update language toggle button
        const langFlag = document.getElementById('lang-flag');
        const langLabel = document.getElementById('lang-label');
        if (langFlag) langFlag.textContent = state.lang === 'vi' ? '\u{1F1FB}\u{1F1F3}' : '\u{1F1EC}\u{1F1E7}';
        if (langLabel) langLabel.textContent = t.langLabel;

        // Update html lang attribute
        document.documentElement.lang = state.lang === 'vi' ? 'vi' : 'en';
    }

    // --- DOM References ---
    let dom = {};

    // --- Initialize ---
    function init() {
        dom = {
            nav: document.getElementById('main-nav'),
            navLinks: document.querySelectorAll('.nav-link'),
            navLinksContainer: document.getElementById('nav-links'),
            themeToggle: document.getElementById('theme-toggle'),
            themeIcon: document.querySelector('.theme-icon'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            curriculumGrid: document.getElementById('curriculum-grid'),
            sidebarNav: document.getElementById('sidebar-nav'),
            sidebarToggle: document.getElementById('sidebar-toggle'),
            sidebarClose: document.getElementById('sidebar-close'),
            sidebar: document.getElementById('lessons-sidebar'),
            lessonContent: document.getElementById('lesson-content'),
            lessonBreadcrumb: document.getElementById('lesson-breadcrumb'),
            lessonNavFooter: document.getElementById('lesson-nav-footer'),
            lessonSearch: document.getElementById('lesson-search'),
            progressDashboard: document.getElementById('progress-dashboard'),
            heroCode: document.getElementById('hero-code')
        };
        applyTheme(state.theme);
        applyLanguage(state.lang);
        renderHeroCode();
        renderCurriculumGrid();
        renderSidebar();
        renderProgress();
        setupEventListeners();
        showSection('home');
        animateStatsOnScroll();
    }

    // --- Theme ---
    function applyTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        dom.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        localStorage.setItem('pma_theme', theme);
    }

    function toggleTheme() {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    }

    // --- Language ---
    function applyLanguage(lang) {
        state.lang = lang;
        localStorage.setItem('pma_lang', lang);
        translateUI();
    }

    function toggleLanguage() {
        const newLang = state.lang === 'en' ? 'vi' : 'en';
        applyLanguage(newLang);
        // Re-render dynamic content with new language data
        renderCurriculumGrid();
        renderSidebar();
        renderProgress();
        // Re-load current lesson if viewing one
        if (state.currentLessonId && state.currentModuleId) {
            loadLesson(state.currentModuleId, state.currentLessonId);
        }
    }

    // --- Navigation ---
    function showSection(sectionId) {
        state.currentSection = sectionId;

        // Hide all sections
        document.querySelectorAll('.hero-section, .curriculum-section, .lessons-section, .progress-section').forEach(s => {
            s.classList.remove('visible');
        });

        // Show appropriate sections
        if (sectionId === 'home') {
            document.getElementById('home').classList.add('visible');
            document.getElementById('curriculum').classList.add('visible');
        } else if (sectionId === 'curriculum') {
            document.getElementById('curriculum').classList.add('visible');
        } else if (sectionId === 'lessons') {
            document.getElementById('lessons').classList.add('visible');
            if (!state.currentLessonId) {
                // Load first lesson
                const data = getActiveData();
                const firstModule = data.modules[0];
                const firstLesson = firstModule.lessons[0];
                loadLesson(firstModule.id, firstLesson.id);
            }
        } else if (sectionId === 'progress') {
            document.getElementById('progress').classList.add('visible');
            renderProgress();
        }

        // Update active nav link
        dom.navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionId);
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile menu
        dom.navLinksContainer.classList.remove('mobile-open');
    }

    // --- Hero Code Animation ---
    function renderHeroCode() {
        const codeLines = [
            '<span class="cm"># 🐍 Welcome to Python Mastery Academy</span>',
            '',
            '<span class="kw">class</span> <span class="cls">Student</span>:',
            '    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="self">self</span>, name):',
            '        <span class="self">self</span>.name = name',
            '        <span class="self">self</span>.skills = []',
            '',
            '    <span class="kw">def</span> <span class="fn">learn</span>(<span class="self">self</span>, topic):',
            '        <span class="self">self</span>.skills.append(topic)',
            '        <span class="bi">print</span>(<span class="str">f"✨ Mastered: {topic}"</span>)',
            '',
            'you = Student(<span class="str">"Learner"</span>)',
            'you.learn(<span class="str">"Python"</span>)',
            '<span class="cm"># ✨ Mastered: Python</span>'
        ];

        if (dom.heroCode) {
            let html = '';
            codeLines.forEach((line, i) => {
                html += `<span class="line" style="animation-delay: ${i * 0.08}s">${line}</span>\n`;
            });
            dom.heroCode.innerHTML = html;
        }
    }

    // --- Curriculum Grid ---
    function renderCurriculumGrid() {
        if (!dom.curriculumGrid) return;

        const data = getActiveData();
        const t = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.en;
        let html = '';
        data.modules.forEach(module => {
            const totalLessons = module.lessons.length;
            const completedCount = module.lessons.filter(l => state.completedLessons.includes(l.id)).length;
            const totalDuration = module.lessons.reduce((sum, l) => {
                const mins = parseInt(l.duration);
                return sum + (isNaN(mins) ? 0 : mins);
            }, 0);
            const levelLabel = t[module.level] || module.level;

            html += `
                <div class="module-card" onclick="window.openModule(${module.id})" tabindex="0" role="button" aria-label="Open module ${module.id}: ${module.title}">
                    <div class="module-card-header">
                        <div class="module-number">${module.id}</div>
                        <div class="module-info">
                            <h3 class="module-card-title">${module.title}</h3>
                            <span class="module-level level-${module.level}">${levelLabel}</span>
                        </div>
                    </div>
                    <p class="module-card-desc">${module.description}</p>
                    <div class="module-card-meta">
                        <span>${module.icon} ${totalLessons} ${t.lessonsLabel}</span>
                        <span>⏱ ${totalDuration} min</span>
                        <span>✓ ${completedCount}/${totalLessons}</span>
                    </div>
                </div>
            `;
        });
        dom.curriculumGrid.innerHTML = html;
    }

    // --- Sidebar ---
    function renderSidebar() {
        if (!dom.sidebarNav) return;

        const data = getActiveData();
        let html = '';
        data.modules.forEach(module => {
            const isActive = module.id === state.currentModuleId;
            const isExpanded = isActive;

            html += `
                <div class="sidebar-module" data-module-id="${module.id}">
                    <button class="sidebar-module-btn ${isActive ? 'active expanded' : ''}" onclick="window.toggleSidebarModule(${module.id})">
                        <span class="sidebar-module-num">${module.id}</span>
                        <span>${module.title}</span>
                        <span class="sidebar-module-arrow">›</span>
                    </button>
                    <div class="sidebar-lessons ${isExpanded ? 'visible' : ''}">
            `;

            module.lessons.forEach(lesson => {
                const isCompleted = state.completedLessons.includes(lesson.id);
                const isLessonActive = lesson.id === state.currentLessonId;
                html += `
                    <button class="sidebar-lesson-btn ${isLessonActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                            onclick="window.loadLessonFromSidebar('${lesson.id}')">
                        ${lesson.title}
                    </button>
                `;
            });

            html += '</div></div>';
        });

        dom.sidebarNav.innerHTML = html;
    }

    // --- Load Lesson ---
    function loadLesson(moduleId, lessonId) {
        const data = getActiveData();
        const t = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.en;
        const module = data.modules.find(m => m.id === moduleId);
        if (!module) return;

        const lesson = module.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        state.currentModuleId = moduleId;
        state.currentLessonId = lessonId;

        // Update content
        const isCompleted = state.completedLessons.includes(lessonId);
        const completeLabel = isCompleted ? t.completed : t.markComplete;
        dom.lessonContent.innerHTML = lesson.content + `
            <button class="lesson-complete-btn ${isCompleted ? 'completed' : ''}" 
                    onclick="window.toggleLessonComplete('${lessonId}')"
                    id="complete-btn-${lessonId}">
                ${completeLabel}
            </button>
        `;

        // Update breadcrumb
        dom.lessonBreadcrumb.innerHTML = `
            <span>Module ${moduleId}</span>
            <span class="separator">›</span>
            <span class="current">${lesson.title}</span>
        `;

        // Update nav footer
        renderLessonNav(moduleId, lessonId);

        // Update sidebar
        renderSidebar();

        // Scroll to top of content
        dom.lessonContent.scrollTo({ top: 0 });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderLessonNav(moduleId, lessonId) {
        if (!dom.lessonNavFooter) return;

        // Build flat list of all lessons
        const data = getActiveData();
        const allLessons = [];
        data.modules.forEach(m => {
            m.lessons.forEach(l => {
                allLessons.push({ moduleId: m.id, lesson: l });
            });
        });

        const currentIndex = allLessons.findIndex(item => item.lesson.id === lessonId);
        const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
        const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

        dom.lessonNavFooter.innerHTML = `
            <button class="lesson-nav-btn ${!prevLesson ? 'disabled' : ''}" 
                    onclick="${prevLesson ? `window.loadLessonFromSidebar('${prevLesson.lesson.id}')` : ''}"
                    ${!prevLesson ? 'disabled' : ''}>
                ← ${prevLesson ? prevLesson.lesson.title : 'Start'}
            </button>
            <button class="lesson-nav-btn ${!nextLesson ? 'disabled' : ''}" 
                    onclick="${nextLesson ? `window.loadLessonFromSidebar('${nextLesson.lesson.id}')` : ''}"
                    ${!nextLesson ? 'disabled' : ''}>
                ${nextLesson ? nextLesson.lesson.title : 'End'} →
            </button>
        `;
    }

    // --- Progress ---
    function renderProgress() {
        if (!dom.progressDashboard) return;

        const data = getActiveData();
        const t = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.en;
        const totalLessons = data.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        const completedCount = state.completedLessons.length;
        const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

        let moduleProgressHtml = '';
        data.modules.forEach(module => {
            const modTotal = module.lessons.length;
            const modCompleted = module.lessons.filter(l => state.completedLessons.includes(l.id)).length;
            const status = modCompleted === 0 ? 'locked' : modCompleted === modTotal ? 'complete' : 'progress';
            const statusLabel = modCompleted === 0 ? t.notStarted : modCompleted === modTotal ? t.complete : `${modCompleted}/${modTotal}`;
            
            moduleProgressHtml += `
                <div class="progress-module-item">
                    <span class="progress-module-name">
                        ${module.icon} Module ${module.id}: ${module.title}
                    </span>
                    <span class="progress-module-badge badge-${status}">${statusLabel}</span>
                </div>
            `;
        });

        dom.progressDashboard.innerHTML = `
            <div class="progress-card">
                <div class="progress-card-header">
                    <div class="progress-card-icon" style="background: rgba(99, 102, 241, 0.15);">📊</div>
                    <span class="progress-card-value" style="background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${progressPercent}%</span>
                </div>
                <div class="progress-card-title">${t.overallCompletion}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            <div class="progress-card">
                <div class="progress-card-header">
                    <div class="progress-card-icon" style="background: rgba(16, 185, 129, 0.15);">✅</div>
                    <span class="progress-card-value" style="color: var(--accent-green);">${completedCount}</span>
                </div>
                <div class="progress-card-title">${t.lessonsCompleted}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${(completedCount / totalLessons) * 100}%; background: var(--accent-green);"></div>
                </div>
            </div>
            <div class="progress-card">
                <div class="progress-card-header">
                    <div class="progress-card-icon" style="background: rgba(245, 158, 11, 0.15);">📚</div>
                    <span class="progress-card-value" style="color: var(--accent-yellow);">${totalLessons - completedCount}</span>
                </div>
                <div class="progress-card-title">${t.lessonsRemaining}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${((totalLessons - completedCount) / totalLessons) * 100}%; background: var(--accent-yellow);"></div>
                </div>
            </div>
            <div class="progress-card progress-overall">
                <h3 style="margin-bottom: 16px; font-size: 1.1rem;">${t.moduleProgress}</h3>
                <div class="progress-module-list">
                    ${moduleProgressHtml}
                </div>
            </div>
        `;
    }

    // --- Completion Toggle ---
    function toggleLessonComplete(lessonId) {
        const index = state.completedLessons.indexOf(lessonId);
        if (index === -1) {
            state.completedLessons.push(lessonId);
        } else {
            state.completedLessons.splice(index, 1);
        }
        localStorage.setItem('pma_completed', JSON.stringify(state.completedLessons));

        // Update UI
        const t = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.en;
        const btn = document.getElementById(`complete-btn-${lessonId}`);
        if (btn) {
            const isCompleted = state.completedLessons.includes(lessonId);
            btn.classList.toggle('completed', isCompleted);
            btn.textContent = isCompleted ? t.completed : t.markComplete;
        }

        renderSidebar();
        renderCurriculumGrid();
        renderProgress();
    }

    // --- Event Listeners ---
    function setupEventListeners() {
        // Theme toggle
        dom.themeToggle.addEventListener('click', toggleTheme);

        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', toggleLanguage);
        }

        // Nav links
        dom.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showSection(link.dataset.section);
            });
        });

        // Mobile menu
        dom.mobileMenuBtn.addEventListener('click', () => {
            dom.navLinksContainer.classList.toggle('mobile-open');
        });

        // Sidebar toggle
        if (dom.sidebarToggle) {
            dom.sidebarToggle.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    dom.sidebar.classList.toggle('mobile-open');
                } else {
                    dom.sidebar.classList.toggle('collapsed');
                }
            });
        }

        // Sidebar close (mobile)
        if (dom.sidebarClose) {
            dom.sidebarClose.addEventListener('click', () => {
                dom.sidebar.classList.remove('mobile-open');
            });
        }

        // Lesson search
        if (dom.lessonSearch) {
            dom.lessonSearch.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const modules = dom.sidebarNav.querySelectorAll('.sidebar-module');
                modules.forEach(moduleEl => {
                    const lessons = moduleEl.querySelectorAll('.sidebar-lesson-btn');
                    let hasMatch = false;
                    lessons.forEach(lessonBtn => {
                        const match = lessonBtn.textContent.toLowerCase().includes(query);
                        lessonBtn.style.display = match || !query ? 'block' : 'none';
                        if (match) hasMatch = true;
                    });
                    // Show module if any lesson matches
                    if (query) {
                        const lessonsContainer = moduleEl.querySelector('.sidebar-lessons');
                        if (hasMatch && lessonsContainer) {
                            lessonsContainer.classList.add('visible');
                        }
                    }
                    moduleEl.style.display = hasMatch || !query ? 'block' : 'none';
                });
            });
        }

        // Scroll listener for nav shadow
        window.addEventListener('scroll', () => {
            dom.nav.classList.toggle('scrolled', window.scrollY > 10);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (state.currentSection === 'lessons') {
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    navigateLesson(e.key === 'ArrowRight' ? 'next' : 'prev');
                }
            }
        });
    }

    function navigateLesson(direction) {
        const data = getActiveData();
        const allLessons = [];
        data.modules.forEach(m => {
            m.lessons.forEach(l => {
                allLessons.push({ moduleId: m.id, lesson: l });
            });
        });

        const currentIndex = allLessons.findIndex(item => item.lesson.id === state.currentLessonId);
        const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (targetIndex >= 0 && targetIndex < allLessons.length) {
            const target = allLessons[targetIndex];
            loadLesson(target.moduleId, target.lesson.id);
        }
    }

    // --- Stats Animation ---
    function animateStatsOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        animateNumber(stat);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.hero-stats');
        if (statsSection) observer.observe(statsSection);
    }

    function animateNumber(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const target = parseInt(text.replace(/[^0-9]/g, ''));
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }, 16);
    }

    // --- Global Functions (called from HTML) ---
    window.navigateToLessons = function() {
        showSection('lessons');
    };

    window.navigateToCurriculum = function() {
        showSection('home');
        setTimeout(() => {
            document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    window.openModule = function(moduleId) {
        const data = getActiveData();
        const module = data.modules.find(m => m.id === moduleId);
        if (module && module.lessons.length > 0) {
            showSection('lessons');
            loadLesson(moduleId, module.lessons[0].id);
        }
    };

    window.toggleSidebarModule = function(moduleId) {
        const moduleEl = dom.sidebarNav.querySelector(`[data-module-id="${moduleId}"]`);
        if (!moduleEl) return;

        const btn = moduleEl.querySelector('.sidebar-module-btn');
        const lessons = moduleEl.querySelector('.sidebar-lessons');

        btn.classList.toggle('expanded');
        lessons.classList.toggle('visible');
    };

    window.loadLessonFromSidebar = function(lessonId) {
        const data = getActiveData();
        // Find which module this lesson belongs to
        for (const module of data.modules) {
            const lesson = module.lessons.find(l => l.id === lessonId);
            if (lesson) {
                loadLesson(module.id, lessonId);
                // Close mobile sidebar
                if (window.innerWidth <= 1024) {
                    dom.sidebar.classList.remove('mobile-open');
                }
                break;
            }
        }
    };

    window.toggleLessonComplete = toggleLessonComplete;

    // --- Boot ---
    document.addEventListener('DOMContentLoaded', init);
})();
