function showDetails(){
  const x = document.querySelector('.js-details-container');
  if(x.innerHTML.trim() !== ''){
    x.innerHTML = '';
    x.classList.remove("js-details-container-show");
    document.querySelector('.js-show-detail-btn').innerHTML = ' > ';
    return;
  }
    x.innerHTML = `<div class="name-desc">
        <p class="name">
          MISHTHI GARG
        </p>
        <p class="desc">
          B.Tech in Computer Communication & Engineering | LNMIIT
        </p>
      </div>
      <div class="contact-info">
        <div>
          <p class="heading">
            Phone
          </p>
          <p class="desc">
            8800467487
          </p>
        </div>
        <div>
          <p class="heading">
            Email
          </p>
          <p class="desc">
            mishthigarg1306@gmail.com
          </p>
        </div>
        <div>
          <p class="heading">
            LinkedIn
          </p>
          <a class="LinkedIn desc" href="https://www.linkedin.com/in/mishthi-garg-" target="_blank">
            linkedin.com/in/mishthi-garg-
          </a>
        </div>
        <div>
          <p class="heading">
            GitHub
          </p>
          <a class="GitHub desc" href="https://github.com/mishthi-garg" target="_blank">
            github.com/mishthi-garg
          </a>
        </div>
          
      </div>`;
    x.classList.add("js-details-container-show");  
    document.querySelector('.js-show-detail-btn').innerHTML = ' < ';
}

function showContent(section){
  x = document.querySelector('.js-content-area');
  if(section === 'about'){
    x.innerHTML = `<p class="section">
        ABOUT ME
      </p>
      <p class="desc">
        Second-year Undergraduate at LNMIIT with a strong academic background and a growing technical foundation in software development. Experienced Teaching Assistant for Labs, proficient in Linux, Python, and Web Development. Proven leader through student-led initiatives at GDG and the LNMIIT Alumni Association, possessing a proactive learning mindset for SDE roles.
      </p>`;

  }
  else if(section === 'education'){
    x.innerHTML = `<p class="section">
        EDUCATION
      </p>
      <div class="edu">
        <div>
          <p class="heading">
            DELHI PUBLIC SCHOOL GHAZIABAD
          </p>
          <p class="desc">
            Class XII (CBSE): 94.4%
          </p>
          <p class="desc">
            Class X (CBSE): 94% 
          </p>
          <p class="desc">
            APR 2010 - MAY 2024
          </p>
        </div>
        <div>
          <p class="heading">
            The LNM Institute of Information Technology (LNMIIT), Jaipur
          </p>
          <p class="desc">
            B.Tech in Computer & Communication Engineering
          </p>
          <p class="desc">
            AUG 2024 - MAY 2028
          </p>
        </div>
      </div>`;

  }
  else if(section === 'skills'){
    x.innerHTML = `<div>
      <p class="section">
      SKILLS
      </p>
    </div>
    <div class="skill-logos">
      <div class="c-programming">
        <img src="skills/C_Programming_Language.svg.png">
      </div>
      <div class="java">
        <img src="skills/java-logo.png">
      </div>
      <div class="html">
        <img src="skills/HTML5_logo_and_wordmark.svg.png">
      </div>
      <div class="css">
        <img src="skills/css-logo.png">
      </div>
      <div class="javascript">
        <img src="skills/js-logo.png">
      </div>
    </div>`;
  }
}