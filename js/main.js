/* Main Logic for TECHNITUDE IPL AUCTION 2026 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Modal Toggle Logic
    const registrationModal = document.getElementById('registrationModal');
    const registerTriggers = document.querySelectorAll('.registerTrigger');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.querySelector('.modal-overlay');

    const toggleModal = (show) => {
        if (show) {
            registrationModal.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
        } else {
            registrationModal.classList.remove('modal-active');
            document.body.style.overflow = 'auto';
        }
    };

    registerTriggers.forEach(btn => {
        btn.addEventListener('click', () => toggleModal(true));
    });

    closeModal.addEventListener('click', () => toggleModal(false));
    modalOverlay.addEventListener('click', () => toggleModal(false));

    // 2. Dynamic Player Rendering & Filtering
    const playerGrid = document.getElementById('playerGrid');
    const roleFilters = document.querySelectorAll('.filter-role');
    const countryFilters = document.querySelectorAll('.filter-country');

    const players = [
        { name: "MS Dhoni", role: "wicketkeeper", country: "India", team: "CSK", highlight: "Captain Cool", img: "msd.png" },
        { name: "Virat Kohli", role: "batsman", country: "India", team: "RCB", highlight: "King Kohli", img: "kolhi.png" },
        { name: "Rohit Sharma", role: "batsman", country: "India", team: "MI", highlight: "Hitman", img: "rohit_sharma.png" },
        { name: "Jasprit Bumrah", role: "bowler", country: "India", team: "MI", highlight: "Boom Boom", img: "bumbraah.png" },
        { name: "Hardik Pandya", role: "all-rounder", country: "India", team: "MI", highlight: "Kung Fu Pandya", img: "pandya.png" },
        { name: "Rashid Khan", role: "all-rounder", country: "Afghanistan", team: "GT", highlight: "Magician", img: "rashid khan.png" },
        { name: "KL Rahul", role: "wicketkeeper", country: "India", team: "LSG", highlight: "Classy", img: "kl rahul.png" },
        { name: "Shubman Gill", role: "batsman", country: "India", team: "GT", highlight: "Prince", img: "gill.png" },
        { name: "David Warner", role: "batsman", country: "Australia", team: "DC", highlight: "Bull", img: "david_warner.png" },
        { name: "Glenn Maxwell", role: "all-rounder", country: "Australia", team: "RCB", highlight: "Big Show", img: "maxwell.png" },
        { name: "Ravindra Jadeja", role: "all-rounder", country: "India", team: "RR", highlight: "Sir Jadeja", img: "sir_jadeja.png" },
        { name: "Suryakumar Yadav", role: "batsman", country: "India", team: "MI", highlight: "SKY", img: "surya.png" },
        { name: "Rishabh Pant", role: "wicketkeeper", country: "India", team: "DC", highlight: "Spiderman", img: "rishabh_pant.png" },
        { name: "Trent Boult", role: "bowler", country: "New Zealand", team: "RR", highlight: "Thunder Bolt", img: "trent_bolt.png" },
        { name: "Mohammed Siraj", role: "bowler", country: "India", team: "RCB", highlight: "Miyan Magic", img: "mohammed_siraj.png" },
        { name: "Faf du Plessis", role: "batsman", country: "South Africa", team: "RCB", highlight: "FAF", img: "faf_du_plessis.png" }
    ];

    let activeRole = 'all';
    let activeCountry = 'all';

    const renderPlayers = () => {
        playerGrid.innerHTML = '';
        const filtered = players.filter(p => {
            const roleMatch = activeRole === 'all' || p.role === activeRole;
            const countryMatch = activeCountry === 'all' || p.country === activeCountry;
            return roleMatch && countryMatch;
        });

        filtered.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = `player-card group bg-secondary rounded-2xl overflow-hidden border border-gray-800 hover:border-accentBlue/30 transition-all shadow-xl opacity-0 translate-y-10`;
            card.style.transitionDelay = `${index * 50}ms`;
            
            // Use local images from assets/players
            const playerImg = `./assets/players/${p.img}`;

            card.innerHTML = `
                <div class="aspect-[4/5] bg-gray-950 flex items-center justify-center relative overflow-hidden">
                    <img src="${playerImg}" alt="${p.name}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                    <span class="text-white/10 font-black text-6xl absolute -bottom-5 -right-5 italic uppercase z-0">${p.team}</span>
                </div>
                <div class="p-6 relative z-10">
                    <div class="text-accentGold text-xs font-bold tracking-widest mb-2 uppercase">${p.highlight}</div>
                    <h5 class="text-xl font-bold mb-1">${p.name}</h5>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-gray-500 text-sm capitalize">${p.role}</span>
                        <span class="px-2 py-1 bg-primary text-[10px] rounded border border-gray-800 text-gray-400 capitalize">${p.country}</span>
                    </div>
                </div>
            `;
            playerGrid.appendChild(card);
            
            // Trigger animation
            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-10');
            }, 50);
        });

        // Re-initialize interactions for new cards
        if (typeof window.setupInteractions === 'function') {
            window.setupInteractions();
        }
    };

    // Initialize
    renderPlayers();

    // Event Listeners for Filters
    roleFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            roleFilters.forEach(b => b.classList.remove('active', 'bg-accentBlue', 'text-primary'));
            btn.classList.add('active', 'bg-accentBlue', 'text-primary');
            activeRole = btn.getAttribute('data-role');
            renderPlayers();
        });
    });

    countryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            countryFilters.forEach(b => b.classList.remove('active', 'bg-accentBlue', 'text-primary'));
            btn.classList.add('active', 'bg-accentBlue', 'text-primary');
            activeCountry = btn.getAttribute('data-country');
            renderPlayers();
        });
    });

    // 3. Smooth Scroll Navigation Header update
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('bg-primary/95', 'shadow-2xl');
            nav.classList.remove('bg-gradient-to-b', 'from-primary/80');
        } else {
            nav.classList.remove('bg-primary/95', 'shadow-2xl');
            nav.classList.add('bg-gradient-to-b', 'from-primary/80');
        }
    });

    // 4. Placeholder Log for Debugging
    console.log('Technitude IPL Auction 2026 - Frontend Loaded Successfully');
});
