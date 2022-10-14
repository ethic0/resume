import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  data: any = [];
  dummyData = {
    "name": "Utkarsh Sharma",
    "position": "Manager in Content writing department, Quirinus Soft Pvt. Ltd.",
    "contact": "7340443184",
    "email": "officialaaditya.p@gmail.com",
    "address": "194/20, Sector 19, Pratap Nagar, Jaipur - 302033",
    "links": [
        {
            "title": "github",
            "value": "https://github.com/ethic0"
        },
        {
            "title": "linkedin",
            "value": "https://www.linkedin.com/in/ethic0"
        }
    ],
    "objective": "By giving this information I intend to attain a position, which would empower me to pursue the actions that would affect our community. I by applying my academic and managerial acumen would contribute to the organization to the best of my ability and work hard with utmost sincerity and honesty.",
    "managementSkills": [
        {
            "mgnttSkill": "Team management"
        },
        {
            "mgnttSkill": "Employee trainig and development"
        },
        {
            "mgnttSkill": "Work flow and work delivery management"
        }
    ],
    "technicalSkills": [
        {
            "techSkill": "HTML"
        },
        {
            "techSkill": "CSS"
        },
        {
            "techSkill": "JavaScript"
        },
        {
            "techSkill": "Academic Content writing"
        },
        {
            "techSkill": "Web content writing"
        },
        {
            "techSkill": "AutoCAD Civil and Mechanical"
        },
        {
            "techSkill": "System design and analysis"
        },
        {
            "techSkill": "MS project"
        },
        {
            "techSkill": "Photoshop"
        },
        {
            "techSkill": "UI/UX designing"
        }
    ],
    "education": [
        {
            "institution": "RIET",
            "degree": "M.Tech ",
            "specialization": "Production engineering",
            "marks": "70",
            "board": "RTU",
            "yearFrom": "2017",
            "yearTo": "2019"
        },
        {
            "institution": "CTC",
            "degree": "B.tech",
            "specialization": "Mechanical engineering",
            "marks": "70",
            "board": "RTU",
            "yearFrom": "2011",
            "yearTo": "2016"
        }
    ],
    "achievements": [
        {
            "title": "Most valuable player of the team",
            "year": "2020",
            "from": "Zucol"
        },
        {
            "title": "The pitch perfectionist",
            "year": "2021",
            "from": "Zucol"
        },
        {
            "title": "Most productive expert in technical team",
            "year": "2022",
            "from": "Zucol"
        }
    ],
    "experiences": [
        {
            "title": "Manager",
            "from": "2022",
            "to": "Present",
            "organization": "QuirinusSoft Pvt. Ltd.",
            "responsibilites": "- Team management\n- Employee training and development\n- Academic content management\n- Web Content management"
        },
        {
            "title": "Asst. Manager",
            "from": "2021",
            "to": "2022",
            "organization": "ZUCOL SERVICES, Jaipur",
            "responsibilites": "Team management\nAcademic content management"
        },
        {
            "title": "Technical researcher and analyst",
            "from": "2020",
            "to": "2021",
            "organization": "ZUCOL SERVICES, Jaipur",
            "responsibilites": "fkdjvkzdjfbv"
        },
        {
            "title": "Frontend developer",
            "from": "2020",
            "to": "2020",
            "organization": "Pixel4Web IT solutions, Jaipur",
            "responsibilites": "Manual web applications testing\nUI/UX design and testing\nWeb page development using HTML, CSS and bootstrap."
        },
        {
            "title": "Asst. professor",
            "from": "2016",
            "to": "2020",
            "organization": "VGIET, Jaipur",
            "responsibilites": "dfgjbdfkjvg"
        }
    ],
    "trainings": [
        {
            "title": "Frontend Developer",
            "organization": "Pixel4Web IT solutions, Jaipur",
            "position": "Internship",
            "from": "2016",
            "to": "2016"
        },
        {
            "title": "Web Designing -Frontend",
            "organization": "PACE INFOTECH,Jaipur",
            "position": "Trainee",
            "from": "2016",
            "to": "2016"
        },
        {
            "title": "Summer Industrial Training",
            "organization": "Natiollial Engineering Industries Limited Jaipur",
            "position": "Trainee",
            "from": "2016",
            "to": "2016"
        }
    ],
    "projects": [
        {
            "title": " Solar cooling system",
            "description": "system design of the solar power instruments."
        },
        {
            "title": " Solar steam generator and electricity generator",
            "description": "system design of the solar power instruments."
        }
    ],
    "about": "Apart from the above mentioned skills, I would like to mention the following traits of my personality. I am a good team worker and a capable team leader. I have contributed as both, a volunteer and a team leader during my 5+ years of career. I have the zeal to do any job responsibility assigned to me with perfection. I putthe best of my effortsto make the job responsibility assigned to me a success."
}
  constructor() { }
  ngOnInit(): void {
    const formData = localStorage.getItem('data');
    if(!formData){
      localStorage.setItem('data', JSON.stringify(this.dummyData));
    }
    this.data.push(JSON.parse(formData));
    console.log('data received:', this.data);
  }

}
