import React,{useState} from 'react'
import '../css/Ferm.css'
import myimage from '../img/img10.jpg'
import { Link } from "react-router-dom"
export default function DsAi() {
  return (
    <div>
        {/* <Link className="btn btn-outline-light my-3 mx-3 aligner" to="/roadmap">Return To Roadmap</Link> */}
        <br/>
    <div className='container'> <h1 className='ttl'>AI and Data Scientist Roadmap</h1></div>
      <div className='container'>
            <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgai'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                    Welcome to the exciting world of AI and Data Science where you will learn to train models and to predict the data ,Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What is Data Science and AI?</h2>
                    <h2 className='contentferm'>
                    Data Science is a multidisciplinary field that uses statistical and computational techniques to extract insights and knowledge from data, encompassing skills from statistics, computer science, mathematics, and domain expertise
. It involves tasks like data cleaning, preparation, visualization, statistical modeling, machine learning.<br/>AI particularly deep learning, focuses on mimicking human brain functions to process data and generate patterns without human assistance.<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid m-4 mx-5'>
            <div className="container2">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Mathematics</h5>
                            <button class="card-text" type="button">Learn Calculus ,Differential Calculus and Linear Algebra to have the basic understanding required for Data Science.</button></div>
                            <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.coursera.org/specializations/mathematics-machine-learning?irclickid=wEZQ:J0HUxyPRNswaUXVzwYzUkHQnjxYZ2hETQ0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=4863057&utm_content=b2c#courses" target="_blank"
                        >Maths for Machine Learning</Link>
                         <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://www.coursera.org/learn/algebra-and-differential-calculus-for-data-science?irclickid=wEZQ:J0HUxyPRNswaUXVzwYzUkHQnjwoZ2hETQ0&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=4863057&utm_content=b2c#syllabus" target="_blank" 
                        >Algebra and Differential Calculus</Link></div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Statistics</h5>
                            <button class="card-text" type="button">Increase your knowledge with concepts of Probability ,Statistics and Testing. </button>
                        </div>
                        <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://www.coursera.org/learn/stanford-statistics" target="_blank" 
                        >Introduction to Statistics</Link>
                        <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://www.coursera.org/learn/machine-learning-probability-and-statistics" target="_blank" 
                        >Probability and Statistics</Link>
                          <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://www.coursera.org/learn/statistical-analysis-hypothesis-testing-sas" target="_blank" 
                        >Hypothesis Testing</Link>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Econometrics</h5>
                            <h5 class="card-text alpha" type="button">Explore the Fundamentals of Econometrics and learn various series and models.</h5>
                            {/* <a to="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                        </div>
                        <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://bookdown.org/ts_robinson1994/10EconometricTheorems/" target="_blank" 
                        >Fundamentals of Econometrics</Link>
                        <Link className="btn btn-outline-light m-3  alpha card-text text-sm" to="https://www.coursera.org/learn/erasmus-econometrics" target="_blank" 
                        >Econometrics Methods and Applications</Link>
                    </div>
                </div>
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Coding</h5>
                            <button class="card-text" type="button"> Learn Python ,Data Structures and Algorithms and SQL</button>
                            {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="/notes/Python.pdf" target="_blank"
                        >Python</Link>
                         <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.sqltutorial.org/" target="_blank"
                        >SQL</Link>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="/notes/DSA.pdf" target="_blank"
                        >Data Structures and Algorithms </Link>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">Machine Learning</h5>
                            <button class="card-text" gitype="button">Use your coding to skills and develop machine learning models.</button>
                        </div>
                        <Link className="btn btn-outline-light m-3 alpha card-text" to="https://www.ibm.com/topics/machine-learning" target="_blank"
                        >Introduction to Machine Learning</Link>
                           <Link className="btn btn-outline-light m-3 alpha card-text" to="https://mlcourse.ai/" target="_blank"
                        >Machine Learning</Link>

                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">MLOps</h5>
                            <Link  class="card-text alpha" type="button" to="https://ml-ops.org/" target="_blank"> Simplify Machine Learning worlflows and deployments through MLOps.</Link>
                        </div>
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
Ready to embark on your Data Science adventure? Let’s dive in!</h2><h2 className='fig1'>👨🏼‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring  developers! </h2></div>
    </div>
    
  )
}