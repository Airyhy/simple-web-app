// Made Dinners Page
const API_BASE = '/api';
const USER_ID = 'default';

let dinners = [];

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadDinners();
    renderDinners();
});

// Load dinners from API
async function loadDinners() {
    try {
        const response = await fetch(`${API_BASE}/dinner-plan/${USER_ID}`);
        dinners = await response.json();
        console.log(`Loaded ${dinners.length} dinners`);
    } catch (error) {
        console.error('Failed to load dinners:', error);
        showToast('Failed to load dinner history', 'error');
    }
}

// Render dinners
function renderDinners() {
    const gallery = document.getElementById('dinner-gallery');
    
    if (!dinners.length) {
        gallery.innerHTML = `
            <p style="text-align: center; color: #999; padding: 40px;">
                No dinners recorded yet / 还没有记录晚餐<br>
                <small>Save your dinner plans from the main page / 从主页保存晚餐计划</small>
            </p>
        `;
        return;
    }
    
    // Group by date
    const byDate = {};
    dinners.forEach(dinner => {
        const date = new Date(dinner.createdAt).toLocaleDateString();
        if (!byDate[date]) byDate[date] = [];
        byDate[date].push(dinner);
    });
    
    gallery.innerHTML = Object.entries(byDate).map(([date, items]) => `
        <div class="dinner-date-section">
            <h3 class="dinner-date">${date}</h3>
            <div class="dinner-cards">
                ${items.map(dinner => `
                    <div class="dinner-card">
                        <h4>${dinner.dishName}</h4>
                        <p class="dinner-time">${new Date(dinner.createdAt).toLocaleTimeString()}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Toast notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const icon = toast.querySelector('.toast-icon');
    const text = toast.querySelector('.toast-message');
    
    icon.textContent = type === 'success' ? '✅' : '⚠️';
    text.textContent = message;
    
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
