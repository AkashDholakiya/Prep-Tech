import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Ferm.css'
import myimage from '../img/img11.png'
export default function Bcd() {
  return (
    <div>
      <h1 className='ttl'>Blockchain Development Roadmap</h1>
      <div className='container'>
            <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgai'/>
            </div>
            <div className='container'>
                <h2 className='contentferm '><br/>
                   Got an Idea related to Crypto?Let's Learn Blockchain.
                   Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                    <br></br>
                    <br></br>
                    <h2 className='myconthead'>
                     What Is Blockchain Development?</h2>
                    <h2 className='contentferm'>
                    Blockchain development refers to the process of building, maintaining, and designing blockchain applications and systems. Blockchain technology is a decentralized digital ledger that records transactions on thousands of computers around the globe, making it secure and resistant to modification!<br/></h2>
                   
<h2 className='myconthead'>
                     Navigating the Roadmap
                     </h2>
                     <h2 className='fig1'></h2>
                    <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of development. <br />
                    Buckle up as we explore!<br />
                    </h2>
            </div>
            <div className='container-fluid'>
            <div className="container2 m-5">
            <div className="row align-items-start gx-1">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">UNDERSTAND THE BASICS</h5>
                            <Link class="card-text alpha" type="button" to="https://www.coursera.org/articles/blockchain-developer">Start by gaining a solid understanding of how blockchain works, its decentralized nature  and the cryptographic principles that underpin it. <br/>Resources like online courses, tutorials, and blockchain documentation can provide a strong foundation.</Link>
                            </div></div>
                            
                    </div>
                    <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Learn Programming Languages</h5>
                            <button class="card-text" type="button">Proficiency in programming languages is a cornerstone for any developer. In the realm of blockchain, languages like Solidity, JavaScript, Python, and Go are highly relevant. Solidity, in particular, is essential for smart contract development on platforms like Ethereum.</button>
                          
                        </div>
                        <Link className="btn btn-outline-light m-2 alpha card-text " to="/notes/Python.pdf" target="_blank"
                        >Python</Link>
                         <Link className="btn btn-outline-light m-2 alpha card-text" to="/notes/JS.pdf" target="_blank"
                        >JavaScript</Link>
                         <Link className="btn btn-outline-light m-2 alpha card-text" to="/https://www.w3schools.com/go/" target="_blank"
                        >GO</Link>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div className="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div className="card-body">
                            <h5 className="card-title">Blockchain Platforms and Frameworks</h5>
                            <button class="card-text" type="button">Familiarize yourself with popular blockchain platforms and frameworks such as Ethereum, Binance Smart Chain, Hyperledger, and Polkadot. Understand their unique features and use cases to broaden your understanding of blockchain development.
</button>
                          
                        </div>
                        <Link className="btn btn-outline-light m-2 alpha card-text" to="https://ethereum.org/en/what-is-ethereum/" target="_blank"
                        >Ethereum</Link>
                         <Link className="btn btn-outline-light m-2 alpha card-text" to="https://www.techtarget.com/searchcio/definition/Hyperledger" target="_blank"
                        >Hyperledge</Link>
                         <Link className="btn btn-outline-light m-2 alpha card-text" to="https://polkadot.network/" target="_blank"
                        >Polkadot</Link>
                    </div>
                </div>
                <div className="row align-items-start">
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Smart Contract Development</h5>
                            <Link class="card-text alpha" type="button"> Learn to develop smart contracts using platforms like Ethereum, where Solidity is the language of choice. Understand the lifecycle of a smart contract, from deployment to execution, and explore real-world use cases.</Link>
                            
                        </div>
                    </div>
                </div>
               <div class="col-xl-4 col-md-6">
                        <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title"> Decentralized Applications</h5>
                            <Link class="card-text alpha" type="button" to="https://archive.trufflesuite.com/docs/">Explore DApp development frameworks like Truffle and embark on projects that involve creating user-friendly interfaces, integrating smart contracts, and interacting with the blockchain.</Link>
                            {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                        <div class="card-body">
                            <h5 class="card-title">Consensus Mechanisms and Security</h5>
                            <Link class="card-text alpha" type='button'to="https://hacken.io/discover/consensus-mechanisms/"> Delve into the various consensus algorithms such as Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS). Additionally, focus on security best practices to safeguard blockchain applications against vulnerabilities and attacks.</Link>
                        </div>
                        </div>
                    </div>
                </div>
               
</div>
                </div>
              </div>
              <div className='container'>
                <br></br>
                <h2 className='mycont'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>
              
<h2 className='mycont'>                
Ready to embark on your Blockchain adventure? Let’s dive in!</h2><h2 className='fig1'>👩‍💻</h2>
<h2 className='mycont'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring Blockchain developers! </h2>
    </div></div>
  )
}