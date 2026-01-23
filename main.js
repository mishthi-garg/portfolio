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
          Pursuing B.Tech in Computer Communication & Engineering at LNMIIT
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
        Second year Computer & Communication Engineering undergraduate with strong academic background and growing technical foundation in C, Java, HTML, CSS and JavaScript. Actively building skills in web development and problem solving with initial exposure to competitive programming. Experienced in student-led initiatives and event management through LNMIIT Alumni Association and GDG On Campus. Strong coordination, communication, and proactive learning mindset, seeking software development engineering internships.
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
            Ghaziabad
          </p>
          <p class="desc">
            APR 2010 - MAY 2024
          </p>
        </div>
        <div>
          <p class="heading">
            The LNM Institute of Information Technology
          </p>
          <p class="desc">
            B.Tech in Computer & Communication Engineering, Jaipur
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