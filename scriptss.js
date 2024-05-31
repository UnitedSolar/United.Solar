function loadContent(section) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    switch (section) {
        case 'home':
            content.innerHTML = `
                <div id="home">
                    <section class="showcase">
                        <div class="container">
                            <h1>Welcome to United Solar</h1>
                            <p>Be United with us and Leading the way in solar and engineering solutions</p>
                        </div>
                    </section>
                    <div class="container">
                    <h2>About Us</h2>
                    <p><strong>United Solar and Engineering Solutions (SMC) PVT LTD</strong>, established in 2015, is a premier best solar energy company based in Multan, Pakistan. We are dedicated to providing innovative and sustainable solar power solutions tailored to the needs of residential and commercial clients across the country. Our expertise lies in designing, installing, and maintaining custom solar power systems, ensuring our clients receive the most efficient and reliable energy solutions.</p>
                </div>
                </div>`;
            break;
        case 'about':
            content.innerHTML = `
                <section id="Download" class="container">
                    <h2>About Us</h2>
                    <p><strong>United Solar and Engineering Solutions (SMC) PVT LTD</strong>, established in 2015, is a premier best solar energy company based in Multan, Pakistan. We are dedicated to providing innovative and sustainable solar power solutions tailored to the needs of residential and commercial clients across the country. Our expertise lies in designing, installing, and maintaining custom solar power systems, ensuring our clients receive the most efficient and reliable energy solutions.</p>
                </section>`;
            break;
        case 'services':
            content.innerHTML = `
                <section id="services" class="container">
                    <h2>Our Services</h2>
                    <div class="box">
                        <img src="image/solar-panel.jpg" alt="United Solar and Engineering Solutions (SMC) PVT LT">
                        <h3>Solar Panel Installation</h3>
                        <p>We offer professional solar panel installation services to ensure optimal energy efficiency for your home or business.</p>
                    </div>
                    <div class="box">
                        <img src="image/renewable-energy.jpg" alt="Best Solar Company">
                        <h3>Renewable Energy Consulting</h3>
                        <p>Our experts provide consulting services to help you choose the best renewable energy solutions for your needs.</p>
                    </div>
                    <div class="box">
                        <img src="image/engineering.jpg" alt="Solar Panel">
                        <h3>Engineering Solutions</h3>
                        <p>We offer a range of engineering solutions to support your projects from concept to completion.</p>
                    </div>
                </section>`;
            break;
        case 'projects':
            content.innerHTML = `
                <section id="projects" class="container">
                    <h2>Our Projects</h2>
                    <p>Here are some of the projects we have successfully completed:</p>
                    <div class="box">
                        <img src="image/project1.jpg" alt="Inverter">
                        <h3>Project 1: Solar Power Installation for Cotton Factory</h3>
                        <div class="project-details">
                            <p>Location: Lahore, Pakistan</p>
                            <p>Completed: March 2023</p>
                            <ul>
                                <li>Installed a 500 kW on-grid solar power system</li>
                                <li>Integrated battery storage for backup power</li>
                                <li>Annual energy savings of 30%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box">
                        <img src="image/project2.jpg" alt="Green Meter">
                        <h3>Project 2: Residential Solar Setup for Roayal Orsharad Housing Society</h3>
                        <div class="project-details">
                            <p>Location: Multan, Pakistan</p>
                            <p>Completed: January 2024</p>
                            <ul>
                                <li>Installed 200 hybrid solar systems</li>
                                <li>Each system equipped with battery storage</li>
                                <li>Reduced dependency on grid power by 50%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box">
                        <img src="image/project3.jpg" alt="Multan">
                        <h3>Project 3: Solar Park for Taxtiel Industrial Estate</h3>
                        <div class="project-details">
                            <p>Location: Faisalabad, Pakistan</p>
                            <p>Completed: November 2021</p>
                            <ul>
                                <li>Designed and installed a 1 MW solar park</li>
                                <li>Provides clean energy to multiple industrial units</li>
                                <li>Contributes to significant carbon footprint reduction</li>
                            </ul>
                        </div>
                    </div>
                </section>`;
            break;
        case 'contact':
            content.innerHTML = `
                <section id="contact" class="container">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or would like to learn more about our services, please feel free to contact us:</p>
                    <p>Email: united.Solar@hotmail.com</p>
                    <p>Phone: 
                        <ul>
                            <li>03006361727</li>
                            <li>03101721727</li>
                        </ul>
                    </p>
                    <p>Address: 34-F, T Chowk Shah Ruken-e-Alam Colony Multan</p>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1724.304552453!2d71.50183789839478!3d30.191158299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b37116bbee07b%3A0x9a88131f1c61f904!2sUNITED%20SOLAR%20AND%20ENGINEERING%20SOLUTIONS%20(SMC)%20PVT%20LTD!5e0!3m2!1sen!2s!4v1716545723467!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>`;
            break;
    }
}
