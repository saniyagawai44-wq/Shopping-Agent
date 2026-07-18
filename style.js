/* ==========================================
   INTELLIGENT SHOPPING AGENT
   script.js
========================================== */

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==============================
// AI Recommendation
// ==============================

const recommendBtn = document.getElementById("recommendBtn");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

const recommendations = {

    laptop: {
        title: "💻 Gaming Laptop",
        price: "₹74,999",
        rating: "★★★★★ 4.8/5",
        text: "Recommended for students, developers and gamers.",
        features: [
            "Intel Core i7 Processor",
            "16GB RAM",
            "512GB SSD",
            "RTX Graphics Card"
        ]
    },

    mobile: {
        title: "📱 Premium Smartphone",
        price: "₹39,999",
        rating: "★★★★★ 4.9/5",
        text: "Excellent camera and battery backup.",
        features: [
            "120Hz AMOLED Display",
            "50MP Camera",
            "5000mAh Battery",
            "Fast Charging"
        ]
    },

    headphone: {
        title: "🎧 Wireless Headphones",
        price: "₹5,499",
        rating: "★★★★★ 4.9/5",
        text: "Perfect for music lovers.",
        features: [
            "Noise Cancellation",
            "40 Hours Battery",
            "Bluetooth 5.3",
            "Fast Charging"
        ]
    },

    shoes: {
        title: "👟 Sports Shoes",
        price: "₹4,999",
        rating: "★★★★★ 4.7/5",
        text: "Comfortable for running and gym.",
        features: [
            "Light Weight",
            "Air Cushion Sole",
            "Breathable Material",
            "Anti Slip"
        ]
    },

    watch: {
        title: "⌚ Smart Watch",
        price: "₹3,999",
        rating: "★★★★★ 4.6/5",
        text: "Fitness tracking with stylish design.",
        features: [
            "Heart Rate Monitor",
            "Sleep Tracking",
            "Bluetooth Calling",
            "7 Days Battery"
        ]
    }

};


// ==============================
// Recommendation Button
// ==============================

recommendBtn.addEventListener("click", showRecommendation);

searchInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        showRecommendation();

    }

});

function showRecommendation(){

    const value = searchInput.value.toLowerCase().trim();

    let item = null;

    if(value.includes("laptop")){

        item = recommendations.laptop;

    }

    else if(value.includes("mobile") ||
            value.includes("phone")){

        item = recommendations.mobile;

    }

    else if(value.includes("headphone") ||
            value.includes("earphone")){

        item = recommendations.headphone;

    }

    else if(value.includes("shoe")){

        item = recommendations.shoes;

    }

    else if(value.includes("watch")){

        item = recommendations.watch;

    }

    if(item){

        result.classList.add("show");

        result.innerHTML = `

            <h3>${item.title}</h3>

            <p><strong>Price:</strong> ${item.price}</p>

            <p><strong>Rating:</strong> ${item.rating}</p>

            <p>${item.text}</p>

            <ul>

                ${item.features.map(f=>`<li>✅ ${f}</li>`).join("")}

            </ul>

        `;

    }

    else{

        result.classList.add("show");

        result.innerHTML=`

        <h3>🤖 AI Recommendation</h3>

        <p>

        Sorry! No recommendation found.

        Try searching:

        <br><br>

        <b>Laptop</b><br>

        <b>Mobile</b><br>

        <b>Headphone</b><br>

        <b>Shoes</b><br>

        <b>Watch</b>

        </p>

        `;

    }

}



// ==============================
// Hero Typing Effect
// ==============================

const heroTitle = document.querySelector(".hero-text h1");

if(heroTitle){

    const text = heroTitle.innerText;

    heroTitle.innerText="";

    let i=0;

    function typing(){

        if(i<text.length){

            heroTitle.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,50);

        }

    }

    typing();

}



// ==============================
// Header Shadow
// ==============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="0 3px 20px rgba(0,0,0,.06)";

    }

});



// ==============================
// Product Buttons
// ==============================

document.querySelectorAll(".product-card button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("🎉 Product added successfully!\nRedirecting to checkout...");

    });

});



// ==============================
// Contact Form
// ==============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("✅ Thank you!\nYour message has been sent successfully.");

    form.reset();

});

}



// ==============================
// Scroll Animation
// ==============================

const cards=document.querySelectorAll(

".feature-card,.category-card,.product-card,.testimonial-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.7s";

observer.observe(card);

});



// ==============================
// Welcome Message
// ==============================

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("🛒 Welcome to ShopAI!\nYour Intelligent Shopping Agent is Ready.");

},700);

});



// ==============================
// Live Clock
// ==============================

const footer=document.querySelector("footer");

const clock=document.createElement("p");

clock.style.marginTop="15px";

clock.style.color="#ccc";

footer.appendChild(clock);

function updateClock(){

const now=new Date();

clock.innerHTML="🕒 "+now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();



// ==============================
// Back To Top Button
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#6C63FF";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

console.log("✅ Intelligent Shopping Agent Loaded Successfully");