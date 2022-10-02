import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router ) { }
  resumeForm: any;
  experienceForm: any;
  isSubmit = false;
  ngOnInit(): void {
    this.formInit();
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  formInit(): void{
    this.resumeForm = this.formBuilder.group({
      name:['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['',[Validators.required]],
      address: ['', [Validators.required]],
      links: this.formBuilder.array([]),
      objective: ['',[Validators.required]],
      managementSkills: this.formBuilder.array([]),
      technicalSkills: this.formBuilder.array([]),
      education: this.formBuilder.array([]),
      achievements: this.formBuilder.array([]),
      experiences: this.formBuilder.array([]),
      trainings: this.formBuilder.array([]),
      projects: this.formBuilder.array([]),
      about: ['', [Validators.required]],
    });
  }

  addLinks(){
    const linksForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
    this.links.push(linksForm);
  }

  deleteLinks(index: number){
    const link = this.resumeForm.get('links') as FormArray;
    link.removeAt(index);
  }

  addManagementSkills(){
    const mgtSkills = this.formBuilder.group({
      mgnttSkill: ['', [Validators.required]],
    });
    this.managementSkills.push(mgtSkills);
  }

  deleteManagementSkills(index: number){
    const mgtSkill = this.resumeForm.get('managementSkills') as FormArray;
    mgtSkill.removeAt(index);
  }

  addTechnicalSkills() {
    const techSkills = this.formBuilder.group({
      techSkill: ['', [Validators.required]],
    });
    this.technicalSkills.push(techSkills);
  }

  deleteTechnicalSkills(index: number){
    const techSkill = this.resumeForm.get('technicalSkills') as FormArray;
    techSkill.removeAt(index);
  }

  addEducation() {
    const education = this.formBuilder.group({
      institution: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      specialization: [''],
      marks: ['', [Validators.required]],
      board: ['', [Validators.required]],
      yearFrom: ['', [Validators.required]],
      yearTo: ['', [Validators.required]],
    });
    this.education.push(education);
  }

  deleteEducation(index: number){
    const education = this.resumeForm.get('education') as FormArray;
    education.removeAt(index);
  }

  addAchievements() {
    const achievement = this.formBuilder.group({
      title:['', [Validators.required]],
      year: ['', [Validators.required]],
      from: ['', [Validators.required]],
    });
    this.achievements.push(achievement);
  }

  deleteAchievements(index: number){
    const achievement = this.resumeForm.get('achievements') as FormArray;
    achievement.removeAt(index);
  }

  addExperiences(){
     const experience = this.formBuilder.group({
      title: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      organization: ['',[Validators.required]],
      responsibilites: ['']
    });
    this.experiences.push(experience);
  }

  // addResponsibilities(){
  //   const responsibilites = this.formBuilder.group({
  //     responsibility: ['', [Validators.required]]
  //   });
  //   this.responsibilites.push(responsibilites);
  // }

  // deleteResponsibilities(index: number){
  //   const responsibility = this.resumeForm.get('responsibilties') as FormArray;
  //   responsibility.removeAt(index);
  // }

  deleteExperiences(index: number){
    const experience = this.resumeForm.get('experiences') as FormArray;
    experience.removeAt(index);
  }

  addTrainings(){
    const training = this.formBuilder.group({
      title:['',[Validators.required]],
      organization: ['', [Validators.required]],
      position: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]]
    });
    this.trainings.push(training);
  }

  deleteTraining(index: number){
    const training = this.resumeForm.get('trainings') as FormArray;
    training.removeAt(index);
  }

  addProjects(){
    const project = this.formBuilder.group({
      title:['',[Validators.required]],
      description:['', [Validators.required]],
    });
    this.projects.push(project);
  }

  deleteProject(index: number){
    const project = this.resumeForm.get('projects') as FormArray;
    project.removeAt(index);
  }

  create(){
    console.log('Clicked');
    this.isSubmit = true;
    if(this.resumeForm.valid){
      console.log('data: ', this.resumeForm.value);
      const formData = this.resumeForm.value;
      localStorage.setItem('data',JSON.stringify(formData));;
      this.router.navigateByUrl('/resume');
    }
    
  }

  get links(){
    return this.resumeForm.controls['links'] as FormArray;
  }

  get managementSkills() {
    return this.resumeForm.controls['managementSkills'] as FormArray;
  }

  get technicalSkills() {
    return this.resumeForm.controls['technicalSkills'] as FormArray;
  }

  get education(){
    return this.resumeForm.controls['education'] as FormArray;
  }

  get achievements(){
    return this.resumeForm.controls['achievements'] as FormArray;
  }

  get experiences(){
    return this.resumeForm.controls['experiences'] as FormArray;
  }
  
  get responsibilites(){
    return this.experienceForm.controls['responsibilites'] as FormArray;
  }

  get trainings(){
    return this.resumeForm.controls['trainings'] as FormArray;
  }

  get projects(){
    return this.resumeForm.controls['projects'] as FormArray;
  }

  get resumFormControls() {
    return this.resumeForm.controls();
  }

}
