(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const n="/images/tools/profileImg_big.jfif";document.querySelector("#app").innerHTML=`
<div class="container">
<div class="resume">
  <div class="top-container">
    <div class="info">
      <button id="downloadBtn" class="btn">🡇</button>
      <div class="photo">
        <img src="${n}" alt="Photo" />
      </div>
      <div class="about">
        <p class="about-user" id="aboutUser" contenteditable="true">
          Hello 👋🏻 I’m
        </p>
        <p class="user-name" id="userName" contenteditable="true">
          Graham Hunt
        </p>
        <p
          class="user-speciality"
          id="userSpeciality"
          contenteditable="true"
        >
          Brand/Logo Designer
        </p>
      </div>
    </div>
    <div class="languages">
      <p class="lang-title" id="langTitle" contenteditable="true">
        Languages
      </p>
      <div class="lang">
        <p id="langEnglish" contenteditable="true">English</p>
        <div class="skill-bar">
          <div
            class="lang-percent"
            style="width: 184px; margin-left: 22px"
          ></div>
        </div>
      </div>
      <div class="lang">
        <p id="langSpanish" contenteditable="true">Spanish</p>
        <div class="skill-bar">
          <div
            class="lang-percent"
            style="width: 144px; margin-left: 17px"
          ></div>
        </div>
      </div>
      <div class="lang">
        <p id="langFrench" contenteditable="true">French</p>
        <div class="skill-bar">
          <div
            class="lang-percent"
            style="width: 123px; margin-left: 23px"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="middle-container">
    <div class="education">
      <p
        class="education-title"
        id="educationTitle"
        contenteditable="true"
      >
        Education
      </p>
      <div class="education-user">
        <div class="edu-most-recent">
          <div class="likeButton">❤</div>
          <p class="edu-year" id="eduYear2024" contenteditable="true">
            2024
          </p>
          <p id="eduCourse2024" contenteditable="true">UX/UI</p>
          <p
            class="edu-description"
            id="eduDesc2024"
            contenteditable="true"
          >
            #UX #UI #research #DesignSystem #Agile #wireframing #figma #IA
          </p>
          <p class="edu-place" id="eduPlace2024" contenteditable="true">
            Neoland
          </p>
        </div>
        <div class="edu">
          <div class="likeButton">❤</div>
          <p class="edu-year" id="eduYear2022" contenteditable="true">
            2022
          </p>
          <p id="eduCourse2022" contenteditable="true">
            Product designer
          </p>
          <p
            class="edu-description"
            id="eduDesc2022"
            contenteditable="true"
          >
            #analytics #research #prototype #wireframes
          </p>
          <p class="edu-place" id="eduPlace2022" contenteditable="true">
            Coursera
          </p>
        </div>
        <div class="edu">
          <div class="likeButton">❤</div>
          <p class="edu-year" id="eduYear2017" contenteditable="true">
            2017–2021
          </p>
          <p id="eduCourse2017" contenteditable="true">Graphic design</p>
          <p
            class="edu-description"
            id="eduDesc2017"
            contenteditable="true"
          >
            #branding #web #illustration #adobe
          </p>
          <p class="edu-place" id="eduPlace2017" contenteditable="true">
            Cali Institute of the Arts
          </p>
        </div>
      </div>
    </div>
    <div class="interests-contact">
      <div class="interests">
        <p
          class="interests-title"
          id="interestsTitle"
          contenteditable="true"
        >
          Interests
        </p>
        <div
          class="interests-user"
          id="interestsUser"
          contenteditable="true"
        >
          <p>branding</p>
          <p>brand identity</p>
          <p>logo</p>
          <p>typography</p>
          <p>photography</p>
          <p>designing</p>
          <p>poster design</p>
          <p>research</p>
          <p>social networks</p>
          <p>illustration</p>
        </div>
      </div>
      <div class="contact">
        <p class="contact-title" id="contactTitle" contenteditable="true">
          Let´s chat! I´m ready to work on exciting projects
        </p>
        <p id="contactInfo" contenteditable="true">
          ivann19bj@gmail.com | +34 666 666 666
        </p>
      </div>
    </div>
  </div>
  <div class="bottom-container">
    <div class="tools">
      <p class="tools-title" id="toolsTitle" contenteditable="true">
        Tools
      </p>
      <div class="tools-user">
        <div class="tools-section">
          <div class="tool-icons">
            <span
              class="tools-name"
              id="toolsDesign"
              contenteditable="true"
              >design</span
            >
            <img src="images/tools/logoFigma.svg" alt="logoFigma" />
            <img
              src="images/tools/logoCreativeCloud.svg"
              alt="logoCreativeCloud"
            />
            <img src="images/tools/logoMiro1.svg" alt="logoMiro" />
            <img src="images/tools/logoNotion.svg" alt="logoNotion" />
            <img src="images/tools/logoMeet.svg" alt="logoMeet" />
            <img
              src="images/tools/logoanalytics.svg"
              alt="logoanalytics"
            />
          </div>
        </div>
        <div class="tools-section">
          <div class="tool-icons">
            <span
              class="tools-name"
              id="toolsNoCode"
              contenteditable="true"
              >no-code</span
            >
            <img src="images/tools/logoZapìer1.svg" alt="logoZapìer" />
            <img src="images/tools/logoWebflow.svg" alt="logoWebflow" />
            <img src="images/tools/logoFramer.svg" alt="logoFramer" />
            <img
              src="images/tools/logoWordpress.svg"
              alt="logoWordpress"
            />
          </div>
        </div>
        <div class="tools-section">
          <div class="tool-icons">
            <span class="tools-name" id="toolsAI" contenteditable="true"
              >artificial intelligence</span
            >
            <img src="images/tools/logoChatGPT1.svg" alt="logoChatGPT" />
            <img src="images/tools/logoCopilot1.svg" alt="logoCopilot" />
            <img
              src="images/tools/logoMidjourney1.svg"
              alt="logoMidjourney"
            />
            <img
              src="images/tools/logoMidjourney1.svg"
              alt="logoMidjourney"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="experience">
      <p
        class="experience-title"
        id="experienceTitle"
        contenteditable="true"
      >
        Experience
      </p>
      <div class="job-most-recent">
        <div class="job-header">
          <p id="jobDate2023" contenteditable="true">
            Jul. 2023 - Ago. 2023
          </p>
          <p class="job-recent" id="jobRecent" contenteditable="true">
            most recent
          </p>
        </div>
        <div class="job-spec">
          <div class="job-title">
            <p id="jobTitle2023" contenteditable="true">
              Senior Graphic Designer
            </p>
            <p class="job-place" id="jobPlace2023" contenteditable="true">
              Pinnacle | Full-time
            </p>
          </div>
          <div
            class="job-description"
            id="jobDesc2023"
            contenteditable="true"
          >
            <ul>
              <li>
                Research and brainstorm various design ideas for content
                and marketing.
              </li>
              <li>
                Review the work submitted by Junior Designers and sharing
                feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <p id="jobDate2021" contenteditable="true">
            Ene. 2021 - Jul. 2023
          </p>
        </div>
        <div class="job-spec">
          <div class="job-title">
            <p id="jobTitle2021" contenteditable="true">
              Graphic / Web Designer
            </p>
            <p class="job-place" id="jobPlace2021" contenteditable="true">
              Double Square | Full-time
            </p>
          </div>
          <div
            class="job-description"
            id="jobDesc2021"
            contenteditable="true"
          >
            <ul>
              <li>
                Development of internal projects from scratch, product
                design of brands.
              </li>
              <li>Landing page, webapps and hybrid apps</li>
              <li>
                Taking decisions with stakeholders for the future of
                products such as Beagle labs, myur...
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="job">
        <div class="job-header">
          <p id="jobDateFreelance" contenteditable="true">
            Feb. 2021 - Jul. 2023
          </p>
        </div>
        <div class="job-spec">
          <div class="job-title">
            <p id="jobTitleFreelance" contenteditable="true">
              Graphic Designer
            </p>
            <p
              class="job-place"
              id="jobPlaceFreelance"
              contenteditable="true"
            >
              Freelance
            </p>
          </div>
          <div
            class="job-description"
            id="jobDescFreelance"
            contenteditable="true"
          >
            <ul>
              <li>Visual design for Events, Brands and Products.</li>
              <li>Product design, Packaging Design</li>
              <li>Logo Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".resume [contenteditable]").forEach(e=>{const t=e.id;if(!t){console.error("Contenteditable element is missing an id:",e);return}localStorage.getItem(t)&&(e.innerHTML=localStorage.getItem(t)),e.addEventListener("input",()=>{localStorage.setItem(t,e.innerHTML)})}),document.querySelectorAll(".likeButton").forEach(e=>{e.addEventListener("click",function(){this.classList.toggle("liked"),this.classList.contains("liked")?this.style.color="#F6ED1E":this.style.color="#FFFFFF"})});function l(e){const t=document.createElement("div");t.className="material-wave",t.style.width=t.style.height=Math.max(e.target.clientWidth,e.target.clientHeight)+"px",t.style.left=e.clientX-e.target.getBoundingClientRect().left-t.style.width.replace("px","")/2+"px",t.style.top=e.clientY-e.target.getBoundingClientRect().top-t.style.height.replace("px","")/2+"px",e.target.appendChild(t),setTimeout(()=>t.remove(),600)}document.querySelectorAll(".resume > *").forEach(e=>{e.addEventListener("click",l)}),document.getElementById("downloadBtn").addEventListener("click",function(){const e=document.querySelector(".resume"),t={margin:0,filename:"resume.pdf",image:{type:"jpeg",quality:1},html2canvas:{scale:3},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};html2pdf().from(e).set(t).save()})});
