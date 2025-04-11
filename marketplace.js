// Sample vehicle data
const vehicles = [
    {
        id: 1,
        name: "2020 Tesla Model 3",
        price: 35000,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        year: 2020,
        location: "San Francisco, CA",
        mileage: "15,000 miles",
        description: "Excellent condition Tesla Model 3 with Autopilot feature. Single owner, always garaged.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 2,
        name: "2019 BMW M4",
        price: 45000,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2019,
        location: "Los Angeles, CA",
        mileage: "25,000 miles",
        description: "Pristine BMW M4 with Competition Package. Full service history available.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 3,
        name: "2021 Ducati Panigale V4",
        price: 23000,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2021,
        location: "Miami, FL",
        mileage: "3,000 miles",
        description: "Like-new Ducati Panigale V4 with Akrapovic exhaust. Track ready.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 4,
        name: "2018 Porsche 911 GT3",
        price: 140000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2018,
        location: "Seattle, WA",
        mileage: "8,000 miles",
        description: "Collector-grade Porsche 911 GT3. Paint protection film installed.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 5,
        name: "2022 Kawasaki Ninja ZX-10R",
        price: 16000,
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2022,
        location: "Austin, TX",
        mileage: "1,500 miles",
        description: "Nearly new Kawasaki Ninja ZX-10R. Never raced or dropped.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 6,
        name: "2020 Mercedes-AMG GT",
        price: 89000,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2020,
        location: "Chicago, IL",
        mileage: "12,000 miles",
        description: "AMG GT with all available options. Maintained by authorized dealer.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 7,
        name: "2021 BMW S1000RR",
        price: 18500,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2021,
        location: "Denver, CO",
        mileage: "4,000 miles",
        description: "BMW S1000RR with M Package. Includes all original documentation.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 8,
        name: "2019 Audi R8 V10",
        price: 135000,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2019,
        location: "Houston, TX",
        mileage: "9,000 miles",
        description: "V10 Plus variant with carbon ceramic brakes. Immaculate condition.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 9,
        name: "2022 Yamaha YZF-R1",
        price: 17500,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2022,
        location: "Phoenix, AZ",
        mileage: "2,000 miles",
        description: "Yamaha R1 with factory warranty. Includes tail tidy and frame sliders.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 10,
        name: "2020 McLaren 720S",
        price: 245000,
        image: "https://images.unsplash.com/photo-1621285853634-713b8dd6b5fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2020,
        location: "Las Vegas, NV",
        mileage: "3,500 miles",
        description: "McLaren 720S with extensive carbon fiber options. One owner.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 11,
        name: "2021 Aprilia RSV4",
        price: 19500,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2021,
        location: "Portland, OR",
        mileage: "1,800 miles",
        description: "Factory RSV4 with Öhlins suspension. Ready for track or street.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 12,
        name: "2019 Lamborghini Huracán",
        price: 198000,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2019,
        location: "Miami, FL",
        mileage: "6,000 miles",
        description: "Huracán Performante with full PPF. Garage kept, never tracked.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 13,
        name: "2022 MV Agusta F3",
        price: 16800,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2022,
        location: "San Diego, CA",
        mileage: "900 miles",
        description: "MV Agusta F3 800 RC. Limited edition with race kit included.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 14,
        name: "2020 Ferrari F8 Tributo",
        price: 289000,
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2020,
        location: "Beverly Hills, CA",
        mileage: "4,200 miles",
        description: "F8 Tributo with extensive options list. Full Ferrari service history.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 15,
        name: "2021 Triumph Speed Triple",
        price: 14500,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2021,
        location: "Atlanta, GA",
        mileage: "3,200 miles",
        description: "Speed Triple RS with Arrow exhaust. Includes all original parts.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 16,
        name: "2019 Aston Martin Vantage",
        price: 110000,
        image: "https://images.unsplash.com/photo-1617917572835-5ab878656dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2019,
        location: "Dallas, TX",
        mileage: "15,000 miles",
        description: "Vantage with Sport Plus Package. Recently serviced.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 17,
        name: "2022 KTM 1290 Super Duke",
        price: 18900,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2022,
        location: "Salt Lake City, UT",
        mileage: "1,100 miles",
        description: "Super Duke R EVO with Tech Pack. Perfect condition.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 18,
        name: "2020 Nissan GT-R NISMO",
        price: 175000,
        image: "https://images.unsplash.com/photo-1581362716668-e8e26e3f1dd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2020,
        location: "Seattle, WA",
        mileage: "7,500 miles",
        description: "GT-R NISMO with carbon fiber components. Professionally maintained.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 19,
        name: "2021 Honda CBR1000RR-R",
        price: 21500,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2021,
        location: "Orlando, FL",
        mileage: "2,800 miles",
        description: "Fireblade SP with quick shifter. Includes paddock stand and cover.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    },
    {
        id: 20,
        name: "2019 Porsche Cayman GT4",
        price: 95000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        year: 2019,
        location: "San Francisco, CA",
        mileage: "11,000 miles",
        description: "Cayman GT4 with Clubsport Package. Original owner, all records.",
        modelUrl: "https://leecoazswdqxmabrscpr.supabase.co/storage/v1/object/public/models//cartoon_car.glb"
    }
];

// DOM Elements
const vehicleGrid = document.getElementById('vehicleGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const modal = document.getElementById('vehicleModal');
const closeButton = document.querySelector('.close-button');
const modelViewer = document.getElementById('model-viewer');

// Render vehicle cards
function renderVehicles(vehiclesToRender) {
    vehicleGrid.innerHTML = vehiclesToRender.map(vehicle => `
        <div class="vehicle-card" data-id="${vehicle.id}">
            <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image">
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p class="vehicle-price">$${vehicle.price.toLocaleString()}</p>
            </div>
        </div>
    `).join('');

    // Add click listeners to cards
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.addEventListener('click', () => showVehicleDetails(card.dataset.id));
    });
}

// Show vehicle details in modal
function showVehicleDetails(vehicleId) {
    const vehicle = vehicles.find(v => v.id === parseInt(vehicleId));
    if (!vehicle) return;

    document.getElementById('modalImage').src = vehicle.image;
    document.getElementById('modalTitle').textContent = vehicle.name;
    document.getElementById('modalPrice').textContent = `$${vehicle.price.toLocaleString()}`;
    document.getElementById('modalYear').textContent = vehicle.year;
    document.getElementById('modalLocation').textContent = vehicle.location;
    document.getElementById('modalMileage').textContent = vehicle.mileage;
    document.getElementById('modalDescription').textContent = vehicle.description;

    // Set up the 3D model
    modelViewer.src = vehicle.modelUrl;
    modelViewer.alt = vehicle.name;

    modal.style.display = 'block';
}

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search functionality
searchInput.addEventListener('input', filterVehicles);

// Sort functionality
sortSelect.addEventListener('change', filterVehicles);

function filterVehicles() {
    let filtered = [...vehicles];
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(vehicle => 
            vehicle.name.toLowerCase().includes(searchTerm) ||
            vehicle.description.toLowerCase().includes(searchTerm)
        );
    }

    // Apply sort
    const sortValue = sortSelect.value;
    switch (sortValue) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'year-desc':
            filtered.sort((a, b) => b.year - a.year);
            break;
        case 'year-asc':
            filtered.sort((a, b) => a.year - b.year);
            break;
    }

    renderVehicles(filtered);
}

// Initial render
renderVehicles(vehicles);