import React,{useState} from 'react'
import "../css/Ferm.css"
import myimage from "../img/img7.jpg"
import { Link } from 'react-router-dom'
export default function Dops() {
  return (
    <div>
     {/* <Link className="btn btn-outline-light my-3 mx-3 aligner " to="/roadmap">Return To Roadmap</Link> */}
        <br/>
        <div className='container my-1'>
      <h1>DevOps Roadmap</h1></div>
      <div className='container'>
            <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgb'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                Let’s explore the world of DevOps. As a DevOps engineer, you’ll play a crucial role in bridging the gap between development and operations. Your mission is to streamline processes, automate workflows, and ensure smooth collaboration across teams.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is DevOps?</h2>
                    <h2 className='contentferm'>
                    DevOps is a methodology that combines software development (Dev) and IT operations (Ops) with the goal of shortening the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives. It emphasizes collaboration, automation, and integration, leading to faster and more reliable software delivery. DevOps practices include continuous integration, continuous delivery, and infrastructure as code.<br/></h2>
<br/>                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of DevOps <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid'>
            <div className="container2 align-items-center">
            <div className="row align-items-start gx-1 mx-5">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Version Control and Git</h5>
                            <button class="card-text" type="button">Understand Git fundamentals: commits, branches, merges, and pull requests.Explore platforms like GitHub, GitLab, or Bitbucket for collaborative development.
                            </button></div><Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.w3schools.com/git/git_intro.asp?remote=github" target="_blank"
                        >Github</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://about.gitlab.com/" target="_blank" 
                        >Gitlab</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://bitbucket.org/product/guides/getting-started/overview" target="_blank"
                        >BitBucket</Link></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Continuous Integration and<br/> Continuous Deployment
</h5>
                            <button class="card-text" type="button">Set up CI/CD pipelines using tools like Jenkins, GitLab CI/CD, or Travis CI.<br/>Automate testing, build, and deployment processes. </button>
                            {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.simplilearn.com/tutorials/jenkins-tutorial" target="_blank"
                        >Jenkins</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://about.gitlab.com/" target="_blank" 
                        >Gitlab</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://docs.travis-ci.com/user/tutorial/" target="_blank" 
                        > Travis CI</Link>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Cloud Providers</h5>
                            <button class="card-text" type="button"> Study cloud providers like AWS, Azure, or Google Cloud Platform and their services to strengthen your cloud computing skills.
</button>
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.w3schools.com/aws/" target="_blank"
                        >AWS</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://www.simplilearn.com/tutorials/azure-tutorial" target="_blank" 
                        >Azure</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text" to="https://www.freecodecamp.org/news/google-cloud-platform-from-zero-to-hero/" target="_blank" 
                        > Google Cloud</Link>
                    </div>
                </div>
               
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Containers</h5>
                            <button class="card-text" type="button">Understand containerization technologies like Docker and container orchestration tools like Kubernetes
</button>
                    
                        </div>
                        <Link className="btn btn-outline-light m-3  alpha card-text" to="https://docs.docker.com/get-started/" target="_blank" 
                        > Docker</Link>
                        <Link className="btn btn-outline-light m-3  alpha card-text" to="https://kubernetes.io/docs/tutorials/kubernetes-basics/" target="_blank" 
                        > Kubernetes</Link>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Networking & Security</h5>
                            <Link class="card-text alpha" type="button" to="https://aws.amazon.com/what-is/devsecops/" target="_blank">Learn networking protocols and security patterns to ensure secure software delivery
</Link>

                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Infrastructure as Code</h5>
                            <button class="card-text" type="button">  Learn IaC tools like Terraform or Ansible to automate infrastructure provisioning</button>
                        </div>
                        <Link className="btn btn-outline-light m-3  alpha card-text" to="https://developer.hashicorp.com/terraform/tutorials" target="_blank" 
                        >Terraform</Link>
                        <Link className="btn btn-outline-light m-3  alpha card-text" to="https://docs.ansible.com/ansible/latest/getting_started/index.html" target="_blank" 
                        > Ansible</Link>
                        </div>
                    </div>
                </div>
</div>
                </div>
              </div>
                <br></br>
               <div className='container'>
                <h2 className='mycont'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>
              
<h2 className='mycont'>                
Ready to embark on your frontend adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring frontend developers! </h2>
    </div></div>
  )
}